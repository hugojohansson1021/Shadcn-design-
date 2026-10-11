"use client"

import * as React from "react"
import { ArrowUpIcon, SquareIcon } from "lucide-react"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupTextarea,
} from "@/components/ui/input-group"

type PromptInputStatus = "idle" | "submitted" | "streaming" | "error"

const PromptInputContext = React.createContext<{
  status: PromptInputStatus
  onStop?: () => void
}>({ status: "idle" })

function PromptInput({
  className,
  status = "idle",
  onStop,
  children,
  ...props
}: React.ComponentProps<"form"> & {
  status?: PromptInputStatus
  onStop?: () => void
}) {
  return (
    <form
      data-slot="prompt-input"
      data-status={status}
      className={cn("group/prompt-input w-full", className)}
      {...props}
    >
      <PromptInputContext.Provider value={{ status, onStop }}>
        <InputGroup className="h-auto flex-col rounded-xl bg-background shadow-xs dark:bg-input/30">
          {children}
        </InputGroup>
      </PromptInputContext.Provider>
    </form>
  )
}

function PromptInputTextarea({
  className,
  onKeyDown,
  rows = 1,
  ...props
}: React.ComponentProps<typeof InputGroupTextarea>) {
  return (
    <InputGroupTextarea
      data-slot="prompt-input-textarea"
      rows={rows}
      className={cn("max-h-48 min-h-16 px-3 pt-3", className)}
      onKeyDown={(event) => {
        onKeyDown?.(event)
        if (event.defaultPrevented) return
        // Enter sends, Shift+Enter adds a line; never while an IME is composing.
        if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
          event.preventDefault()
          event.currentTarget.form?.requestSubmit()
        }
      }}
      {...props}
    />
  )
}

function PromptInputAttachments({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <InputGroupAddon
      data-slot="prompt-input-attachments"
      align="block-start"
      className={cn("cursor-default empty:hidden", className)}
      {...props}
    />
  )
}

function PromptInputFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <InputGroupAddon
      data-slot="prompt-input-footer"
      align="block-end"
      className={cn("cursor-default justify-between gap-1 px-2 pb-2", className)}
      {...props}
    />
  )
}

function PromptInputTools({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="prompt-input-tools"
      className={cn("flex min-w-0 items-center gap-1", className)}
      {...props}
    />
  )
}

function PromptInputSubmit({
  className,
  variant = "default",
  size = "icon-sm",
  children,
  disabled,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { status, onStop } = React.useContext(PromptInputContext)
  const busy = status === "submitted" || status === "streaming"

  return (
    <Button
      data-slot="prompt-input-submit"
      data-status={status}
      // While busy the button stops the response instead of submitting.
      type={busy && onStop ? "button" : "submit"}
      variant={variant}
      size={size}
      disabled={busy ? !onStop : disabled}
      aria-label={busy ? "Stop" : "Send"}
      onClick={busy && onStop ? () => onStop() : undefined}
      className={cn("rounded-full", className)}
      {...props}
    >
      {children ?? (busy ? <SquareIcon className="size-3 fill-current" /> : <ArrowUpIcon />)}
    </Button>
  )
}

export {
  PromptInput,
  PromptInputTextarea,
  PromptInputAttachments,
  PromptInputFooter,
  PromptInputTools,
  PromptInputSubmit,
  type PromptInputStatus,
}
