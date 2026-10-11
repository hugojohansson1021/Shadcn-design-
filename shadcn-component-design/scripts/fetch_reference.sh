#!/usr/bin/env bash
# Print the current source of a shadcn/ui component from the official registry,
# with registry-internal imports rewritten to normal project paths.
#
# Usage: fetch_reference.sh <component> [style]
#   component  e.g. switch, popover, toggle-group
#   style      registry style, default base-nova (see components.json "style")
set -euo pipefail

if [ $# -lt 1 ]; then
  echo "usage: $0 <component> [style]" >&2
  exit 1
fi

component="$1"
style="${2:-base-nova}"
url="https://ui.shadcn.com/r/styles/${style}/${component}.json"

json="$(curl -fsSL "$url")" || {
  echo "could not fetch $url (unknown component or style?)" >&2
  exit 1
}

printf '%s' "$json" | python3 -I -c '
import json, re, sys
d = json.load(sys.stdin)
print("// dependencies:", d.get("dependencies"), " registryDependencies:", d.get("registryDependencies"))
for f in d.get("files", []):
    c = f.get("content", "")
    c = c.replace("from \"cn\"", "from \"@/lib/utils\"")
    c = re.sub(r"@/registry/[\w-]+/ui/", "@/components/ui/", c)
    c = re.sub(r"<IconPlaceholder\s+lucide=\"(\w+)\"[^/]*/>", r"<\1 />", c, flags=re.S)
    print("// ---", f.get("path"))
    print(c)
'
