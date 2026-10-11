---
name: shadcn-component-design
description: Design and build NEW custom React components that look, feel and behave exactly like first-party shadcn/ui components on Base UI (@base-ui/react) — e.g. a rating, color picker, stepper, tag input, segmented control, kbd, timeline, stat card, loader. Use this skill whenever the user wants to create, design, sketch or code a UI component "in shadcn style", "like shadcn's Switch/Button", for components/ui/, for a shadcn/Tailwind project, or mentions Base UI primitives — even if they just say "make a component for X" in a project that has components.json. Also use when turning a design idea into a reusable shadcn-style primitive, and when the user wants to add a design element, link or inspiration to their design library ("designbibliotek", "lägg till i design-mappen").
---

# shadcn component design (Base UI)

The goal is a component that someone could drop into `components/ui/` next to shadcn's own files and nobody could tell which one was hand-made. That means matching shadcn's *conventions* (anatomy, `data-slot`, `cn`, tokens, state styling, accessibility), not just its look. Copying the look with hardcoded colors or a custom API breaks theming, dark mode, `Field` integration and the user's mental model of how shadcn components work.

The deliverable is a single `.tsx` file in the project's ui directory, plus a short usage snippet in chat.

## Workflow

### 1. Read the project first

Before designing, look at what the project actually uses — conventions drift between shadcn styles and versions, and the project's existing files are the ground truth.

- `components.json`: `style` (e.g. `base-nova`, `base-vega`), `aliases.ui` / `aliases.utils` (import paths), `iconLibrary` (lucide, tabler, …), `tailwind.css` (where tokens live).
- 2–3 existing files in the ui directory, ideally ones closest to what you're building. Match their sizing (`h-8` vs `h-9`), radius (`rounded-lg` vs `rounded-md`), and focus-ring width (`ring-3` vs `ring-[3px]`).
- `package.json`: confirm `@base-ui/react` is installed. If the project is on Radix instead (`@radix-ui/*`, `radix-ui`), see "If the project uses Radix" at the bottom.

If there is no project yet, assume the defaults shown in `references/examples/` (base-nova style, `@/lib/utils`, `@/components/ui`, lucide-react).

Also skim the user's design library — `~/Desktop/shadCN design skill/design-library/INDEX.md` — for elements related to what you're building. These are things the user has said they like; their "Designprinciper" and "Varför jag gillar den" sections tell you the taste to aim for (e.g. monochrome, dotted, reduced-motion aware). Borrow principles, not code, unless the license and the user allow it.

### 2. Pick the foundation

Decide what the component is built on, in this order of preference:

1. **A Base UI primitive** — if behavior exists in Base UI, use it. It gives you keyboard handling, focus management, ARIA and form integration for free, and those are the parts that are hard to get right. Base UI parts: Accordion, AlertDialog, Autocomplete, Avatar, Button, Checkbox, CheckboxGroup, Collapsible, Combobox, ContextMenu, Dialog, Field, Fieldset, Form, Input, Menu, Menubar, Meter, NavigationMenu, NumberField, Popover, PreviewCard, Progress, Radio/RadioGroup, ScrollArea, Select, Separator, Slider, Switch, Tabs, Toast, Toggle, ToggleGroup, Toolbar, Tooltip; utilities `useRender`, `mergeProps`. A "rating" is a RadioGroup; a "segmented control" is a ToggleGroup or Tabs; a "tag input" can lean on Combobox; a "stepper" over a NumberField.
2. **Existing shadcn components** — compose `Button`, `Badge`, `Popover`, `Field`, `InputGroup` etc. by importing them from the ui alias, the way `input-group.tsx` uses `Button`.
3. **Plain elements** — for purely presentational things (card-like layouts, kbd, timeline). Add the right semantics yourself (`role`, `aria-*`, real `<button>`s for anything clickable).

If you're unsure of a primitive's parts or props, check https://base-ui.com/react/components/<name> rather than guessing — Base UI part names differ from Radix (`Positioner`, `Popup`, `Indicator`, `Thumb`).

### 3. Design the anatomy

Split into the same kind of parts shadcn uses: a root plus named sub-parts (`Thing`, `ThingItem`, `ThingTrigger`, `ThingContent`, …). Expose a part when a user plausibly needs to style, reorder or replace it; keep it internal when it's an implementation detail (Switch keeps its thumb internal; Progress renders a default track but also exports `ProgressTrack` for custom layouts).

Then write the API before the styles: which props, which variants (`variant`, `size`, `orientation`), which defaults. Reuse shadcn's names and values — `size: "sm" | "default" | "lg"`, `variant: "default" | "outline" | "secondary" | "ghost" | "destructive"` — so the component feels familiar.

### 4. Write it — the conventions

Before writing, open `references/examples-index.md` — it lists all 62 shadcn components (real base-nova source in `references/examples/`) grouped by kind, with the Base UI primitive and npm deps each one uses — and read the one or two closest matches. A new menu-like thing → `dropdown-menu`; a panel → `sheet`/`dialog`; a chat element → `message`/`bubble`/`attachment`; a polymorphic leaf → `badge`/`marker` (useRender). `references/conventions.md` has the styling cookbook (tokens, state recipes, sizes, overlays, composition tricks). The essentials:

- **Function components, no `forwardRef`.** React 19 passes `ref` as a prop and shadcn dropped `forwardRef`; spreading `...props` carries it through.
- **Props type = the primitive's props** (`SwitchPrimitive.Root.Props`) or `React.ComponentProps<"div">`, intersected with `VariantProps<typeof xVariants>` or a small inline type. This keeps every native/primitive prop available.
- **`data-slot="kebab-name"` on every rendered part** (`rating`, `rating-item`). Parents and other components style children through it (`has-data-[slot=…]`, `*:data-[slot=…]`, `in-data-[slot=…]`), so it's part of the public API.
- **`className={cn(base, className)}`** with the user's `className` last so it wins. Pass `className` into `cva(...)` or `cn(...)`, never concatenate strings.
- **Variants:** use `cva` (and export `thingVariants`) when there are several variants or other components will reuse the styles; for one or two simple options, set `data-size={size}` and style with `data-[size=sm]:…` like Switch. Reflect variant/size as `data-*` attributes either way when children need to react to them.
- **Style state through data attributes Base UI sets**: `data-checked`, `data-unchecked`, `data-disabled`, `data-open`, `data-closed`, `data-pressed`, `data-horizontal`/`data-vertical`, `data-[side=…]`, `data-highlighted`. Not Radix's `data-[state=checked]`/`data-[state=open]` — those never fire on Base UI. A component's *own* state is fine as `data-state` (sidebar's `collapsed`, attachment's `uploading`).
- **Theme tokens only** (`bg-primary`, `text-muted-foreground`, `border-input`, `ring-ring/50`, `bg-popover`, `text-destructive`…). No hex/rgb/`zinc-500` — they break theming and dark mode.
- **The standard state recipe** on every interactive surface — focus-visible ring, `aria-invalid` destructive ring (with dark variants), disabled opacity/cursor. Copy it from the examples verbatim so focus and error states line up with neighbouring inputs.
- **`"use client"`** when the file uses hooks, context, event handlers or a stateful primitive (Switch, Popover, ToggleGroup). Pure render components (Button, Badge, Card, Input) omit it.
- **Polymorphism via `render`**, not `asChild`: use `useRender` + `mergeProps` (see `badge.tsx`) when the root should be swappable (`<Thing render={<a href="…" />} />`).
- **Icons** from the project's `iconLibrary`, sized by the parent with `[&_svg:not([class*='size-'])]:size-4` so users can override.
- **Exports**: one `export { … }` block at the bottom, root first, plus `thingVariants` if it exists.

### 5. Check it

Run the convention checker on the file — it catches the mechanical mistakes (missing `data-slot`, hardcoded colors, Radix state selectors, `forwardRef`, missing `"use client"`):

```bash
python3 <skill-dir>/scripts/check_component.py path/to/component.tsx
```

Fix anything it reports unless you have a concrete reason (say why in your reply). If the project has TypeScript set up, also run `npx tsc --noEmit` (or the project's typecheck script) — wrong primitive part names show up there.

Then reread the component as a user would: Does keyboard navigation work? Is there a visible focus state? Does it look right in dark mode? Does it work inside `<Field>` with `<FieldLabel>`, `data-invalid` and `data-disabled`?

### 6. Report

Reply with: the file path, a 3–8 line usage snippet, the props/variants table in one or two lines, and which Base UI primitive it's built on. Keep it short — the code is the deliverable.

## Adding to the design library

When the user shares a link or element and wants it saved, follow `~/Desktop/shadCN design skill/design-library/README.md`: read the source (page, repo README, license), create `elements/<slug>/README.md` from `_template.md`, extract concrete design principles, add a row to `INDEX.md`, and ask what they like about it if they haven't said. Write entries in Swedish, like the existing ones.

If the license allows it (MIT, Apache-2.0 — read LICENSE *and* NOTICE) and the element has variants to choose between, also vendor the source with `scripts/fetch_source.py`, write a gallery (`gallery/gallery.src.tsx` using `shared/gallery-kit.tsx`, plus an `index.html` linking `shared/gallery.css`), build it with `scripts/build_gallery.sh`, and add a shadcn wrapper `.tsx` that passes this skill's checker. Open the gallery in headless Chrome (`--virtual-time-budget`, file:// URL) and check the console before calling it done. Under virtual time, CSS animations (e.g. `@property` fades) only advance while the page has a running `requestAnimationFrame` loop — inject `<script>(function k(){requestAnimationFrame(k)})()</script>` into a temporary copy of the page before screenshotting, otherwise glows and fades look missing.

When a component you're designing could use one of these elements (a loader, avatar, glow), prefer importing the library over re-implementing it, and use the wrapper from the library folder.

## Looking up current shadcn source

shadcn's styles change over time. When you need the exact current classes of an existing component (to match it, or to extend it), fetch it instead of relying on memory:

```bash
bash <skill-dir>/scripts/fetch_reference.sh switch            # base-nova by default
bash <skill-dir>/scripts/fetch_reference.sh popover base-vega # another style
```

It prints the source with imports rewritten to normal project paths. Use the style from the project's `components.json`.

## If the project uses Radix

The same conventions apply, but swap the primitive layer: import from `radix-ui` / `@radix-ui/react-*`, use `asChild` + `Slot` instead of `render`/`useRender`, style with `data-[state=checked]`, `data-[state=open]`, `data-disabled`, and overlays use `Portal > Content` (no `Positioner`). Fetch a `new-york-v4` reference to see the exact patterns.
