"use client"

import * as React from "react"
import {
  FileTextIcon,
  GlobeIcon,
  ImageIcon,
  MoonIcon,
  PaperclipIcon,
  SearchIcon,
  SunIcon,
  XIcon,
} from "lucide-react"

import { AgentStatus, type AgentStatusState } from "@/components/ui/agent-status"
import {
  Attachment,
  AttachmentAction,
  AttachmentActions,
  AttachmentContent,
  AttachmentDescription,
  AttachmentGroup,
  AttachmentMedia,
  AttachmentTitle,
} from "@/components/ui/attachment"
import { Badge } from "@/components/ui/badge"
import { BorderBeam } from "@/components/ui/border-beam"
import { BotAvatar } from "@/components/ui/bot-avatar"
import { Bubble, BubbleContent } from "@/components/ui/bubble"
import { Button } from "@/components/ui/button"
import { Marker, MarkerContent, MarkerIcon } from "@/components/ui/marker"
import {
  Message,
  MessageAvatar,
  MessageContent,
  MessageFooter,
  MessageGroup,
} from "@/components/ui/message"
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller"
import {
  PromptInput,
  PromptInputAttachments,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
  type PromptInputStatus,
} from "@/components/ui/prompt-input"

type File = { name: string; kind: "pdf" | "image"; size: string }

type ChatItem =
  | { id: string; type: "marker"; text: string; icon?: "search" | "globe" }
  | { id: string; type: "user"; text: string; files?: File[]; time: string }
  | { id: string; type: "assistant"; text: string; time: string; streaming?: boolean }

const AGENT = { name: "Klöver", type: "clover" as const }

const INITIAL: ChatItem[] = [
  { id: "m0", type: "marker", text: "I dag" },
  {
    id: "u1",
    type: "user",
    time: "09:12",
    text: "Kan du sammanfatta rapporten och lyfta fram det viktigaste?",
    files: [{ name: "kvartalsrapport-q3.pdf", kind: "pdf", size: "2,4 MB" }],
  },
  { id: "k1", type: "marker", text: "Läste 1 fil och sökte i 3 källor", icon: "search" },
  {
    id: "a1",
    type: "assistant",
    time: "09:12",
    text: "Absolut. Intäkterna ökade med 18 % jämfört med förra kvartalet, främst tack vare nya kunder i Norden. Kostnaderna låg stilla, så marginalen förbättrades till 24 %. Den största risken är längre ledtider från en leverantör, som rapporten flaggar inför Q4.",
  },
]

const REPLIES = [
  "Bra fråga! Jag har tittat igenom underlaget. Kort sagt: fokusera på de tre största kunderna först, de står för nästan hälften av tillväxten. Vill du att jag tar fram en plan för nästa kvartal?",
  "Här är mitt förslag: börja med en snabb prototyp, testa den med fem användare och iterera sedan. Det ger mest lärande på kortast tid.",
  "Jag hittade två saker som sticker ut. Dels att supportärendena minskat med 30 %, dels att onboarding-tiden halverats sedan den nya guiden lanserades.",
]

// The steps the fake agent goes through before it answers.
const STEPS: Array<[AgentStatusState, string, number]> = [
  ["searching", "Söker i dina dokument…", 1400],
  ["solving", "Analyserar…", 1300],
  ["composing", "Skriver svar…", 500],
]

const now = () =>
  new Date().toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" })

function FileAttachment({ file, onRemove }: { file: File; onRemove?: () => void }) {
  return (
    <Attachment size="sm">
      <AttachmentMedia>{file.kind === "pdf" ? <FileTextIcon /> : <ImageIcon />}</AttachmentMedia>
      <AttachmentContent>
        <AttachmentTitle>{file.name}</AttachmentTitle>
        <AttachmentDescription>{file.kind === "pdf" ? "PDF" : "Bild"} · {file.size}</AttachmentDescription>
      </AttachmentContent>
      {onRemove && (
        <AttachmentActions>
          <AttachmentAction aria-label={`Ta bort ${file.name}`} onClick={onRemove}>
            <XIcon />
          </AttachmentAction>
        </AttachmentActions>
      )}
    </Attachment>
  )
}

function useThemeToggle() {
  const [dark, setDark] = React.useState(() => {
    try {
      return localStorage.getItem("ai-chat:theme") !== "light"
    } catch {
      return true
    }
  })
  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    try {
      localStorage.setItem("ai-chat:theme", dark ? "dark" : "light")
    } catch {}
  }, [dark])
  return [dark, setDark] as const
}

export function Chat() {
  const [dark, setDark] = useThemeToggle()
  const [items, setItems] = React.useState<ChatItem[]>(INITIAL)
  const [draft, setDraft] = React.useState("")
  const [files, setFiles] = React.useState<File[]>([])
  const [status, setStatus] = React.useState<PromptInputStatus>("idle")
  const [step, setStep] = React.useState<[AgentStatusState, string] | null>(null)
  const run = React.useRef(0)
  const replyIndex = React.useRef(0)

  const busy = status === "submitted" || status === "streaming"

  const stop = () => {
    run.current++
    setStep(null)
    setStatus("idle")
    setItems((list) => list.map((m) => (m.type === "assistant" && m.streaming ? { ...m, streaming: false } : m)))
  }

  const send = async (event: React.FormEvent) => {
    event.preventDefault()
    const text = draft.trim()
    if (!text || busy) return
    const id = ++run.current
    const alive = () => run.current === id
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms))

    setItems((list) => [...list, { id: `u${Date.now()}`, type: "user", text, files, time: now() }])
    setDraft("")
    setFiles([])
    setStatus("submitted")

    for (const [state, label, ms] of STEPS) {
      if (!alive()) return
      setStep([state, label])
      await wait(ms)
    }
    if (!alive()) return

    const reply = REPLIES[replyIndex.current++ % REPLIES.length]
    const answerId = `a${Date.now()}`
    setStep(null)
    setStatus("streaming")
    setItems((list) => [...list, { id: answerId, type: "assistant", text: "", time: now(), streaming: true }])

    const words = reply.split(" ")
    for (let i = 1; i <= words.length; i++) {
      if (!alive()) return
      const partial = words.slice(0, i).join(" ")
      setItems((list) => list.map((m) => (m.id === answerId ? { ...m, text: partial } : m)))
      await wait(45 + Math.random() * 60)
    }
    if (!alive()) return
    setItems((list) => list.map((m) => (m.id === answerId ? { ...m, streaming: false } : m)))
    setStatus("idle")
  }

  return (
    <div className="flex h-dvh flex-col bg-background">
      <header className="flex items-center gap-3 border-b px-4 py-3">
        <BotAvatar type={AGENT.type} size="sm" state={busy ? "working" : "default"} />
        <div className="flex min-w-0 flex-col leading-tight">
          <span className="font-medium">{AGENT.name}</span>
          <span className="text-xs text-muted-foreground">Din AI-assistent</span>
        </div>
        <Badge variant={busy ? "secondary" : "outline"} className="ml-1">
          {busy ? "Tänker" : "Online"}
        </Badge>
        <Button
          variant="ghost"
          size="icon-sm"
          className="ml-auto"
          aria-label={dark ? "Byt till ljust tema" : "Byt till mörkt tema"}
          onClick={() => setDark(!dark)}
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </Button>
      </header>

      <MessageScrollerProvider autoScroll defaultScrollPosition="end">
        <MessageScroller className="flex-1">
          <MessageScrollerViewport>
            <MessageScrollerContent className="mx-auto w-full max-w-2xl px-4 py-6">
              {items.map((item, i) => (
                <MessageScrollerItem key={item.id} messageId={item.id} scrollAnchor={item.type === "user"}>
                  {item.type === "marker" && (
                    <Marker variant={item.icon ? "default" : "separator"}>
                      {item.icon && (
                        <MarkerIcon>{item.icon === "search" ? <SearchIcon /> : <GlobeIcon />}</MarkerIcon>
                      )}
                      <MarkerContent>{item.text}</MarkerContent>
                    </Marker>
                  )}

                  {item.type === "user" && (
                    <Message align="end">
                      <MessageContent>
                        {item.files?.length ? (
                          <AttachmentGroup className="justify-end">
                            {item.files.map((f) => <FileAttachment key={f.name} file={f} />)}
                          </AttachmentGroup>
                        ) : null}
                        <Bubble variant="secondary" align="end">
                          <BubbleContent>{item.text}</BubbleContent>
                        </Bubble>
                        <MessageFooter>{item.time}</MessageFooter>
                      </MessageContent>
                    </Message>
                  )}

                  {item.type === "assistant" && (
                    <Message>
                      <MessageAvatar className="bg-transparent">
                        <BotAvatar
                          type={AGENT.type}
                          size="sm"
                          seed={(i * 0.37) % 1}
                          state={item.streaming ? "working" : "default"}
                          interactive={false}
                        />
                      </MessageAvatar>
                      <MessageGroup className="min-w-0 flex-1">
                        <Bubble variant="ghost">
                          <BubbleContent>
                            {item.text}
                            {item.streaming && (
                              <span aria-hidden className="ml-0.5 inline-block h-4 w-1.5 animate-pulse rounded-sm bg-foreground/60 align-text-bottom" />
                            )}
                          </BubbleContent>
                        </Bubble>
                        {!item.streaming && <MessageFooter>{AGENT.name} · {item.time}</MessageFooter>}
                      </MessageGroup>
                    </Message>
                  )}
                </MessageScrollerItem>
              ))}

              {step && (
                <MessageScrollerItem messageId="status">
                  <AgentStatus state={step[0]} className="pl-10">{step[1]}</AgentStatus>
                </MessageScrollerItem>
              )}
            </MessageScrollerContent>
          </MessageScrollerViewport>
          <MessageScrollerButton />
        </MessageScroller>
      </MessageScrollerProvider>

      <div className="mx-auto w-full max-w-2xl px-4 pb-4">
        <BorderBeam size="md" colorVariant="colorful" strength={0.8} active={busy} className="rounded-xl">
          <PromptInput status={status} onStop={stop} onSubmit={send}>
            <PromptInputAttachments>
              {files.length > 0 && (
                <AttachmentGroup>
                  {files.map((f) => (
                    <FileAttachment key={f.name} file={f} onRemove={() => setFiles((l) => l.filter((x) => x !== f))} />
                  ))}
                </AttachmentGroup>
              )}
            </PromptInputAttachments>
            <PromptInputTextarea
              placeholder={`Skriv till ${AGENT.name}…`}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              aria-label="Meddelande"
            />
            <PromptInputFooter>
              <PromptInputTools>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Bifoga fil"
                  onClick={() =>
                    setFiles((l) => [...l, { name: `skiss-${l.length + 1}.png`, kind: "image", size: "640 kB" }])
                  }
                >
                  <PaperclipIcon />
                </Button>
                <span className="px-1 text-xs text-muted-foreground">Enter skickar · Shift+Enter ny rad</span>
              </PromptInputTools>
              <PromptInputSubmit disabled={!draft.trim()} />
            </PromptInputFooter>
          </PromptInput>
        </BorderBeam>
      </div>
    </div>
  )
}
