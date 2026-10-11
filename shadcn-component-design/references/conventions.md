# shadcn styling cookbook (Base UI / base-nova)

All snippets are taken from shadcn's own base-nova components (see `examples/`). If the project's existing files differ (another style), follow the project.

## Contents
1. Tokens
2. State recipes
3. Sizes and shape
4. Base UI state attributes
5. Composition tricks (groups, has-, in-, slots)
6. Overlays (Popover, Tooltip, Menu …)
7. Variants: cva vs data-attributes
8. Polymorphism with useRender
9. Compound components with context
10. Field integration
11. Accessibility checklist

## 1. Tokens

| Purpose | Classes |
|---|---|
| Page / surfaces | `bg-background text-foreground`, `bg-card text-card-foreground`, `bg-popover text-popover-foreground` |
| Primary action / "on" state | `bg-primary text-primary-foreground`, hover `hover:bg-primary/80` |
| Secondary | `bg-secondary text-secondary-foreground` |
| Subtle fills, hover on ghost | `bg-muted`, `hover:bg-muted`, `dark:hover:bg-muted/50` |
| Secondary text | `text-muted-foreground` |
| Borders of inputs / "off" state | `border-input`, `bg-input`, `dark:bg-input/30` (input fill in dark) |
| General borders | `border-border`, or `ring-1 ring-foreground/10` for cards/popovers |
| Focus | `border-ring`, `ring-ring/50` |
| Errors / destructive | `text-destructive`, `bg-destructive/10`, `border-destructive`, `ring-destructive/20` |
| Charts / accents | `bg-chart-1` … `bg-chart-5` |
| Sidebar | `bg-sidebar`, `text-sidebar-foreground`, `bg-sidebar-accent` … |

Opacity modifiers (`/50`, `/80`) on tokens are the idiomatic way to get shades. `color-mix` is used for hover on secondary: `hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]`.

If a component genuinely needs a new token (rare), add it to the CSS file from `components.json` in both `:root` and `.dark`, and register it in `@theme inline` as `--color-<name>: var(--<name>)`. Mention this in the reply.

## 2. State recipes

Copy these verbatim; consistency with neighbouring controls is the point.

**Focus** (interactive surfaces):
```
outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50
```

**Invalid** (anything that can be in a form):
```
aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40
```

**Disabled**:
- native element: `disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50`
- Base UI primitive: `data-disabled:cursor-not-allowed data-disabled:opacity-50`
- container with a disabled child: `has-disabled:opacity-50`

**Input surface** (text-entry-like boxes):
```
h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base md:text-sm transition-colors placeholder:text-muted-foreground dark:bg-input/30
```

**Larger hit area for small controls** (Switch, Checkbox):
```
relative after:absolute after:-inset-x-3 after:-inset-y-2
```

**Press feedback** (buttons): `active:not-aria-[haspopup]:translate-y-px`

## 3. Sizes and shape (base-nova)

| Size | Control height | Text | Icon |
|---|---|---|---|
| xs | `h-6` | `text-xs` | `size-3` |
| sm | `h-7` | `text-[0.8rem]` | `size-3.5` |
| default | `h-8` | `text-sm` | `size-4` |
| lg | `h-9` | `text-sm` | `size-4` |

Icon-only buttons: `size-6/7/8/9`. Default radius `rounded-lg`; smaller sizes clamp: `rounded-[min(var(--radius-md),10px)]`. Pills: `rounded-full` / `rounded-4xl` (badge). Cards `rounded-xl`, checkbox `rounded-[4px]`. Gaps inside controls: `gap-1.5` (default), `gap-1` (small). Transitions: `transition-all` or `transition-colors`; thumbs `transition-transform`.

Default icon sizing that users can override:
```
[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4
```

Icon-aware padding: `has-data-[icon=inline-start]:pl-2 has-data-[icon=inline-end]:pr-2` (users mark icons with `data-icon="inline-start"`).

## 4. Base UI state attributes

Tailwind v4 lets you write boolean data attributes directly:

| Attribute | Classes |
|---|---|
| checked / unchecked | `data-checked:` / `data-unchecked:` |
| open / closed | `data-open:` / `data-closed:` |
| disabled | `data-disabled:` |
| pressed (Toggle) | `data-pressed:` |
| orientation | `data-horizontal:` / `data-vertical:` |
| highlighted (menu/list items) | `data-highlighted:` |
| side of a popup | `data-[side=bottom]:` … |
| starting/ending animation | `data-starting-style:` / `data-ending-style:` |

Popups expose `--transform-origin`, use `origin-(--transform-origin)`. Positioners expose `--anchor-width` (e.g. `w-(--anchor-width)` for selects/comboboxes).

## 5. Composition tricks

- **Named groups** let children react to the root: root `group/switch`, child `group-data-[size=sm]/switch:size-3`.
- **`data-slot` selectors** let parents style children without extra props: `has-data-[slot=card-footer]:pb-0`, `*:data-[slot=field]:p-2.5`.
- **`in-data-[slot=…]`** styles a component differently when it's inside another: `in-data-[slot=button-group]:rounded-lg`.
- **CSS variables for internal spacing** so one `size` flips everything: `[--card-spacing:--spacing(4)] data-[size=sm]:[--card-spacing:--spacing(3)]` and children use `px-(--card-spacing)`.
- **Container queries** for responsive parts: `@container/field-group` + `@md/field-group:flex-row`.
- Data-driven spacing: `style={{ "--gap": spacing }}` + `gap-[--spacing(var(--gap))]`.

## 6. Overlays

Structure (from `popover.tsx`):
```tsx
<Primitive.Portal>
  <Primitive.Positioner side={side} sideOffset={4} align={align} className="isolate z-50">
    <Primitive.Popup data-slot="thing-content" className={cn("… bg-popover text-popover-foreground rounded-lg shadow-md ring-1 ring-foreground/10 origin-(--transform-origin) duration-100 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2", className)} {...props} />
  </Primitive.Positioner>
</Primitive.Portal>
```
Expose positioning props (`side`, `sideOffset`, `align`, `alignOffset`) on the Content part via `Pick<Primitive.Positioner.Props, …>`. Wrap Root and Trigger as thin pass-throughs with their own `data-slot`.

## 7. Variants: cva vs data-attributes

- `cva` when there are 3+ options, two axes (variant × size), or other components reuse the classes (`buttonVariants` is used by links, pagination, input-group). Export it.
- Data attribute when there are one or two simple options: `data-size={size}` + `data-[size=sm]:h-[14px]`. Cheaper, and children can react via groups.
- Always set `defaultVariants` / default parameter values so `<Thing />` renders the common case.

## 8. Polymorphism with useRender

```tsx
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"

function Thing({ className, variant = "default", render, ...props }:
  useRender.ComponentProps<"span"> & VariantProps<typeof thingVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">({ className: cn(thingVariants({ variant }), className) }, props),
    render,
    state: { slot: "thing", variant },
  })
}
```
`state` entries become `data-*` attributes (`data-slot="thing"`). Users write `<Thing render={<a href="/x" />} />`.

## 9. Compound components with context

When items must inherit the root's `variant`/`size` (toggle-group), create a small `React.createContext` with sensible defaults, provide it in the root, and in each item use `context.variant || variant`. Keep context private (don't export it) unless users need it.

## 10. Field integration

shadcn's `Field` wraps labels, descriptions and errors around controls. A form control should:
- accept and forward `aria-invalid` (styling comes from the invalid recipe),
- respect a disabled parent: `group-has-disabled/field:opacity-50`,
- avoid a double focus ring when wrapped in a clickable `FieldLabel` card: `group-has-[:focus-visible]/field-label:ring-0`,
- be a `peer` if siblings should react to it.

## 11. Accessibility checklist

- Every interactive element is reachable by Tab and operable by keyboard (Base UI handles this if you use its parts).
- Visible focus state (`focus-visible:` recipe).
- Icon-only controls get `aria-label` or `<span className="sr-only">`.
- Use real semantics (`button`, `role="group"`, `role="alert"` for errors, `aria-live` for changing values).
- Don't rely on color alone for state; checked/selected should also change shape/position/icon.
- Respect `prefers-reduced-motion` for anything beyond short transitions (`motion-reduce:transition-none`).
