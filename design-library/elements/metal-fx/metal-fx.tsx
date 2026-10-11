"use client"

// shadcn-style wrappers around metal-fx v2 (MIT © Jakub Antalik; liquidMetal
// shader © Paper Design, Inc., Apache-2.0 — keep metal-fx's NOTICE).
// Install: npm install metal-fx
// Copy to: components/ui/metal-fx.tsx

import * as React from "react"
import {
  MetalBadge as MetalBadgePrimitive,
  MetalFx as MetalFxPrimitive,
  MetalText as MetalTextPrimitive,
  useMetalBend,
  type MetalFxProps as MetalFxPrimitiveProps,
} from "metal-fx"

import { cn } from "@/lib/utils"

type Theme = "light" | "dark"

// metal-fx's "auto" follows prefers-color-scheme only. shadcn apps switch
// theme with a .dark class on <html>, so watch that instead.
function useDocumentTheme(): Theme {
  const [theme, setTheme] = React.useState<Theme>("dark")
  React.useEffect(() => {
    const root = document.documentElement
    const read = () => setTheme(root.classList.contains("dark") ? "dark" : "light")
    read()
    const observer = new MutationObserver(read)
    observer.observe(root, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])
  return theme
}

type MetalFxProps = MetalFxPrimitiveProps & {
  /** Dent the ring toward the pointer (useMetalBend). */
  bend?: boolean
  ref?: React.Ref<HTMLDivElement>
}

function Bend({ target }: { target: React.RefObject<HTMLDivElement | null> }) {
  useMetalBend(target)
  return null
}

function MetalFx({
  className,
  preset = "chromatic",
  variant = "button",
  theme,
  bend = false,
  ref,
  ...props
}: MetalFxProps) {
  const documentTheme = useDocumentTheme()
  const innerRef = React.useRef<HTMLDivElement>(null)
  React.useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

  return (
    <>
      <MetalFxPrimitive
        ref={innerRef}
        data-slot="metal-fx"
        data-variant={variant}
        preset={preset}
        variant={variant}
        theme={theme ?? documentTheme}
        className={cn(className)}
        {...props}
      />
      {bend && <Bend target={innerRef} />}
    </>
  )
}

function MetalText({ theme, ...props }: React.ComponentProps<typeof MetalTextPrimitive>) {
  const documentTheme = useDocumentTheme()
  return <MetalTextPrimitive data-slot="metal-text" theme={theme ?? documentTheme} {...props} />
}

function MetalBadge({ theme, ...props }: React.ComponentProps<typeof MetalBadgePrimitive>) {
  const documentTheme = useDocumentTheme()
  return <MetalBadgePrimitive data-slot="metal-badge" theme={theme ?? documentTheme} {...props} />
}

export { MetalFx, MetalText, MetalBadge, type MetalFxProps }
