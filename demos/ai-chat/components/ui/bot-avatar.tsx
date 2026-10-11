"use client"

// shadcn-style wrapper around bot-avatars (MIT © Jakub Antalik).
// Install: npm install bot-avatars
// Copy to: components/ui/bot-avatar.tsx

import * as React from "react"
import {
  BotAvatar as BotAvatarPrimitive,
  type BotAvatarProps as BotAvatarPrimitiveProps,
} from "bot-avatars"

import { cn } from "@/lib/utils"

const sizes = {
  sm: 32,
  default: 48,
  lg: 64,
  xl: 96,
} as const

type BotAvatarProps = Omit<BotAvatarPrimitiveProps, "size"> & {
  size?: keyof typeof sizes | BotAvatarPrimitiveProps["size"]
}

// Named sizes line up with shadcn's Avatar (size-8 / 12 / 16 / 24); numbers
// and CSS lengths still pass straight through.
function BotAvatar({ className, size = "default", type = "clover", ...props }: BotAvatarProps) {
  const resolved = typeof size === "string" && size in sizes ? sizes[size as keyof typeof sizes] : size

  return (
    <BotAvatarPrimitive
      data-slot="bot-avatar"
      data-type={type}
      type={type}
      size={resolved}
      className={cn("shrink-0", className)}
      {...props}
    />
  )
}

export { BotAvatar, type BotAvatarProps }
