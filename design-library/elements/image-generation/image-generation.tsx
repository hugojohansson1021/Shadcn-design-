"use client"

// shadcn-style wrapper around img-fx (MIT © Jakub Antalik).
// Install: npm install img-fx three
// Copy to: components/ui/image-generation.tsx

import * as React from "react"
import {
  ImageGeneration as ImageGenerationPrimitive,
  type ImageGenerationHandle,
  type ImageGenerationProps as ImageGenerationPrimitiveProps,
} from "img-fx"

import { cn } from "@/lib/utils"

type ImageGenerationProps = Omit<ImageGenerationPrimitiveProps, "children"> & {
  className?: string
  children?: React.ReactNode
  ref?: React.Ref<ImageGenerationHandle>
}

// The effect sizes itself from its child and auto-detects the child's
// corner radius, so the default surface is a token-styled square card.
// className styles that default card; with custom children it goes on the
// wrapper root instead. `ref` (the handle) needs React 19, like shadcn.
function ImageGeneration({
  className,
  preset = "pixels-organic",
  children,
  ...props
}: ImageGenerationProps) {
  return (
    <ImageGenerationPrimitive
      preset={preset}
      className={children ? className : undefined}
      {...props}
    >
      {children ?? (
        <div
          data-slot="image-generation"
          data-preset={preset}
          className={cn("aspect-square w-80 rounded-xl bg-muted", className)}
        />
      )}
    </ImageGenerationPrimitive>
  )
}

export { ImageGeneration, type ImageGenerationProps, type ImageGenerationHandle }
