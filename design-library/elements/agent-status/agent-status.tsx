"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

import { ThinkingOrb } from "@/components/ui/thinking-orb"

type AgentStatusState =
  | "working"
  | "searching"
  | "solving"
  | "listening"
  | "connecting"
  | "weaving"
  | "composing"
  | "breathing"
  | "shaping"

const defaultLabels: Record<AgentStatusState, string> = {
  working: "Working…",
  searching: "Searching…",
  solving: "Solving…",
  listening: "Listening…",
  connecting: "Connecting…",
  weaving: "Weaving…",
  composing: "Writing…",
  breathing: "Thinking…",
  shaping: "Shaping…",
}

function AgentStatus({
  className,
  state = "breathing",
  children,
  ...props
}: React.ComponentProps<"div"> & { state?: AgentStatusState }) {
  return (
    <div
      role="status"
      aria-live="polite"
      data-slot="agent-status"
      data-state={state}
      className={cn(
        "flex min-h-5 w-fit items-center gap-2 text-sm text-muted-foreground",
        className
      )}
      {...props}
    >
      {/* the label already announces the state, so the orb is decorative */}
      <ThinkingOrb state={state} size="sm" aria-hidden="true" />
      <span
        data-slot="agent-status-label"
        className="shimmer motion-reduce:shimmer-none"
      >
        {children ?? defaultLabels[state]}
      </span>
    </div>
  )
}

export { AgentStatus, type AgentStatusState }
