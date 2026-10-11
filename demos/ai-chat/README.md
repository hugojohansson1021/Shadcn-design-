# AI-chatt demo

Ett test av skillen `shadcn-component-design`: ett chattgränssnitt byggt av shadcn:s nya AI-komponenter, designbibliotekets element och två nya komponenter som skillen har skrivit.

**Öppna:** dubbelklicka på `index.html`. Ingen installation behövs och den fungerar offline.

Skriv ett meddelande och tryck Enter. Agenten går igenom stegen söka → analysera → skriva och strömmar sedan fram svaret. Stoppknappen avbryter, gemet lägger till en låtsasbilaga och sol/måne byter tema.

## Vad som används

| Del | Från |
|---|---|
| `message`, `bubble`, `attachment`, `marker`, `message-scroller`, `button`, `badge`, `input-group` | shadcn/ui (base-nova), oförändrade |
| `bot-avatar`, `thinking-orb`, `border-beam` | wrappers från `design-library/` |
| **`prompt-input`** | **Ny.** Skrivfält byggt på `InputGroup` och `Textarea`. Enter skickar, Shift+Enter ger ny rad, IME-säker, bilagor överst och verktyg plus skicka/stopp nederst. |
| **`agent-status`** | **Ny.** Statusrad med Thinking Orb och skimrande etikett (`role="status"`), i 9 tillstånd. |

## Nya komponenter

```tsx
<PromptInput status={status} onStop={stop} onSubmit={send}>
  <PromptInputAttachments>{/* AttachmentGroup */}</PromptInputAttachments>
  <PromptInputTextarea value={draft} onChange={…} />
  <PromptInputFooter>
    <PromptInputTools>{/* knappar */}</PromptInputTools>
    <PromptInputSubmit />
  </PromptInputFooter>
</PromptInput>

<AgentStatus state="searching">Söker i dina dokument…</AgentStatus>
```

- `PromptInput`: `status` är `"idle" | "submitted" | "streaming" | "error"`. Medan agenten arbetar blir skickaknappen en stoppknapp som anropar `onStop`.
- `AgentStatus`: `state` är något av orb-tillstånden (`searching`, `solving`, `composing`, `breathing` …). Utan barn visas en standardetikett.

## Bygga om

```bash
ESBUILD=… TAILWIND=… NODE_MODULES=… ./build.sh
```

Skriptet kräver en esbuild-binär, en fristående Tailwind v4-binär och en `node_modules` med react 19, @base-ui/react, @shadcn/react, class-variance-authority, clsx, tailwind-merge, lucide-react, tw-animate-css och shadcn. Node behövs inte. `dist/` är redan byggd.

I ett riktigt Next- eller Vite-projekt kopierar du `components/ui/*` och kör `npm install thinking-orbs border-beam bot-avatars @shadcn/react` plus shadcn:s vanliga beroenden.
