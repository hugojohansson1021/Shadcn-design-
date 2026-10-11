"use client"

// shadcn-style wrapper around thinking-orbs (MIT © Jakub Antalik).
// Install: npm install thinking-orbs
// Copy to: components/ui/thinking-orb.tsx

import * as React from "react"
import {
  ThinkingOrb as ThinkingOrbPrimitive,
  type ThinkingOrbProps as ThinkingOrbPrimitiveProps,
} from "thinking-orbs"

import { cn } from "@/lib/utils"

const sizes = {
  sm: 20,
  md: 32,
  default: 64,
} as const

type ThinkingOrbProps = Omit<ThinkingOrbPrimitiveProps, "size"> & {
  size?: keyof typeof sizes | ThinkingOrbPrimitiveProps["size"]
}

function ThinkingOrb({
  className,
  state = "working",
  size = "default",
  ...props
}: ThinkingOrbProps) {
  const px = typeof size === "number" ? size : sizes[size]

  return (
    <ThinkingOrbPrimitive
      data-slot="thinking-orb"
      data-state={state}
      data-size={px}
      state={state}
      size={px}
      className={cn("shrink-0", className)}
      {...props}
    />
  )
}

export { ThinkingOrb, type ThinkingOrbProps }
