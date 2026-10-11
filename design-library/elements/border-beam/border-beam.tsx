"use client"

// shadcn-style wrapper around border-beam (MIT © Jakub Antalik).
// Install: npm install border-beam
// Copy to: components/ui/border-beam.tsx

import * as React from "react"
import {
  BorderBeam as BorderBeamPrimitive,
  type BorderBeamProps as BorderBeamPrimitiveProps,
} from "border-beam"

import { cn } from "@/lib/utils"

type Theme = "light" | "dark"

// border-beam defaults to "dark", and its "auto" only follows
// prefers-color-scheme. shadcn apps switch theme with a .dark class on
// <html>, so watch that instead.
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

type BorderBeamProps = BorderBeamPrimitiveProps

function BorderBeam({ className, theme, size = "md", ...props }: BorderBeamProps) {
  const documentTheme = useDocumentTheme()

  return (
    <BorderBeamPrimitive
      data-slot="border-beam"
      data-size={size}
      size={size}
      theme={theme ?? documentTheme}
      className={cn(className)}
      {...props}
    />
  )
}

export { BorderBeam, type BorderBeamProps }
