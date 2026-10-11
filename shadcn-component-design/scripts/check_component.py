#!/usr/bin/env python3
"""Check a .tsx component against shadcn/ui (Base UI) conventions.

Usage: check_component.py <file.tsx> [<file.tsx> ...]

Heuristic, regex-based: it flags likely mistakes, it does not parse TSX.
Exit code 1 if any ERROR was found, 0 otherwise (WARNs don't fail).
"""

import re
import sys

COLOR_LITERAL = re.compile(
    r"(?<![\w-])(?:bg|text|border|ring|fill|stroke|from|to|via|outline|shadow|divide|accent|caret|decoration)-"
    r"(?:\[#[0-9a-fA-F]{3,8}\]|\[rgb|\[hsl|\[oklch(?!\(from_var)"
    r"|(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d{2,3})"
)
CLIENT_HINTS = re.compile(
    r"\b(?:React\.)?use(State|Effect|LayoutEffect|Context|Reducer|Ref|Callback|Memo|Id|Transition)\b|createContext|\bon[A-Z]\w*=\{"
)
STATEFUL_PRIMITIVES = re.compile(
    r"@base-ui/react/(switch|checkbox|checkbox-group|radio|radio-group|popover|dialog|alert-dialog|menu|menubar|"
    r"context-menu|select|combobox|autocomplete|tabs|toggle|toggle-group|tooltip|accordion|collapsible|"
    r"navigation-menu|preview-card|toast|number-field|slider|scroll-area|toolbar|field|form)\b"
)


def check(path):
    src = open(path, encoding="utf-8").read()
    errors, warns = [], []

    uses_base_ui = "@base-ui/react" in src

    if "forwardRef" in src:
        errors.append("uses forwardRef; shadcn uses plain function components (ref arrives as a prop in React 19)")

    if "data-slot" not in src and 'slot: "' not in src:
        # pure re-exports/providers (direction, sonner) have no part of their own
        if re.search(r"<[a-z]+[\s>]|Primitive[.\s>]", src):
            errors.append('no data-slot found; every rendered part needs data-slot="kebab-name"')
        else:
            warns.append("no data-slot (fine for a provider or re-export)")

    functions = re.findall(r"^function ([A-Z]\w*)\s*\(", src, re.M)
    for name in functions:
        body = re.search(rf"^function {name}\s*\((.*?)^}}\s*$", src, re.M | re.S)
        if not body:
            continue
        text = body.group(1)
        renders = re.search(r"return\s*\(?\s*<", text) or "useRender" in text
        is_provider_only = re.search(r"return\s*\(?\s*<\w+\.Provider", text)
        if renders and not is_provider_only and "data-slot" not in text and 'slot: "' not in text:
            warns.append(f"{name}: no data-slot in this component")
        if "className" in text and "cn(" not in text and "Variants(" not in text:
            warns.append(f"{name}: takes className but never merges it with cn()")

    if "className" in src and "from \"@/lib/utils\"" not in src and "cn" not in re.findall(r"import \{([^}]*)\}", src).__str__():
        warns.append("cn() is not imported (expected from the project's utils alias, usually @/lib/utils)")

    for m in COLOR_LITERAL.finditer(src):
        errors.append(f"hardcoded color '{m.group(0)}…'; use theme tokens (bg-primary, text-muted-foreground, border-input…)")

    if uses_base_ui:
        # custom data-state values (collapsed, uploading…) are fine; these are Radix's
        if re.search(r"data-\[state=(checked|unchecked|open|closed|active|inactive|indeterminate)\]", src):
            errors.append("data-[state=checked|open|…] is a Radix selector; Base UI uses data-checked / data-open / data-disabled …")
        if "asChild" in src:
            errors.append("asChild is Radix; Base UI uses the render prop (useRender + mergeProps)")
        if "@radix-ui" in src or 'from "radix-ui"' in src:
            errors.append("mixes Radix and Base UI imports")

    has_client = re.match(r'\s*["\']use client["\']', src)
    if not has_client:
        if CLIENT_HINTS.search(src):
            errors.append('missing "use client" (file uses hooks, context or event handlers)')
        elif STATEFUL_PRIMITIVES.search(src):
            warns.append('consider "use client": wraps a stateful Base UI primitive (shadcn adds it for most of these)')

    if re.search(r"^export (default )?function", src, re.M) or "export default" in src:
        warns.append("use a single named `export { … }` block at the bottom instead of inline/default exports")
    elif not re.search(r"^export \{", src, re.M):
        warns.append("no `export { … }` block found")

    interactive = re.search(r"<button|role=\"(button|switch|checkbox|radio|slider|tab)\"|@base-ui/react/(button|switch|checkbox|radio|toggle|tabs|slider)\b", src)
    if interactive and "focus-visible:" not in src:
        warns.append("interactive parts but no focus-visible: styles")
    if interactive and "aria-invalid:" not in src and re.search(r"@base-ui/react/(checkbox|radio|switch|input|select|number-field|combobox)\b", src):
        warns.append("form control without aria-invalid: styles")

    print(f"== {path}")
    for e in dict.fromkeys(errors):
        print(f"  ERROR {e}")
    for w in dict.fromkeys(warns):
        print(f"  WARN  {w}")
    if not errors and not warns:
        print("  OK")
    return not errors


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(2)
    ok = all([check(p) for p in sys.argv[1:]])
    sys.exit(0 if ok else 1)
