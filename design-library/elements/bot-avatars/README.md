# Bot Avatars

> 18 små 3D-figurer för AI-agenter. De tittar sig omkring, hoppar, snurrar och sover, och de följer pekaren med blicken.

| | |
|---|---|
| **Kategori** | AI-UI · Avatarer |
| **Källa** | https://libraries.dev/bots.html |
| **Kod** | https://github.com/Jakubantalik/Libraries.dev (`packages/bot-avatars`) · npm `bot-avatars` (v0.2.2) |
| **Licens** | MIT © Jakub Antalik, **gratis** |
| **Teknik** | 2D-canvas med ljussatta, rundade former och en enkel 3D-rigg. Ingen WebGL, inga beroenden, React 18+. |
| **Tillagd** | 2026-10-11 |

## Varför jag gillar den

<Fyll i.>

## Designprinciper

- **En form per agent.** Varje typ har en egen silhuett *och* en egen färg, så en grupp agenter går att skilja åt direkt, även i liten storlek.
- **Tillstånd som kroppsspråk.** `default` tittar runt, `working` hoppar och skrattar, `sleeping` andas med slutna ögon. Status syns utan text.
- **Mjuka, taktila material.** `fabric` (plyschpäls) är standard, och `plastic`, `crisp`, `smooth` och `flat` finns som alternativ. Figurerna känns som leksaker, inte som ikoner.
- **Levande men inte jobbig.** Hopp och blinkningar kommer sällan, `seed` gör att en rad figurer inte blinkar i takt, och rörelserna stoppas vid `prefers-reduced-motion` och när figuren är utanför skärmen.
- **Interaktiv i små doser.** Blicken följer pekaren och ett klick ger ett hopp. Det är små belöningar som inte stör.

## Typer

`clover`, `flower`, `triangle`, `square`, `blob`, `ghost`, `circle`, `drop`, `star`, `droid`, `mech`, `alien`, `hexagon`, `cat`, `cloud`, `pill`, `pebble` och `puddle`. Du kan också rita en egen kropp med `path` (SVG-path i en 100×100-box).

## Användning

```bash
npm install bot-avatars
```

```tsx
import { BotAvatar } from "bot-avatars"

<BotAvatar type="clover" state={busy ? "working" : "default"} />
<BotAvatar type="star" size={36} />
<BotAvatar type="flower" face="mouth" state="working" hat="party" />
```

De viktigaste props:
- **Grund:** `type`, `state`, `face`, `size`, `color`, `shading`, `theme`, `speed`, `paused`, `seed` och `interactive`.
- **Tillbehör:** `hat`, `glasses`, `headphones`, `bowTie` och `accessoryColor`.
- **Rörelse:** `jump*` för hoppet och `whirl*` för snurrringen.
- **Material:** `light`, `shadow`, `highlight`, `rim` och `fur*`.

Hela listan finns i `source/README.md`.

## I ett shadcn-projekt

- `bot-avatar.tsx` i den här mappen har namngivna storlekar som matchar shadcn:s Avatar: `sm` (32), `default` (48), `lg` (64) och `xl` (96). Den har också `data-slot` och `className` via `cn()`.
- `theme="auto"` läser shadcn:s `.dark`-klass direkt.
- Använd figuren i chattbubblor bredvid assistentens meddelanden, där `state="working"` visas medan svaret strömmas. Den passar också i en agentlista där varje agent har en egen `type`.

## Filer i den här mappen

| Fil | Vad |
|---|---|
| `gallery/index.html` | Galleri med alla 18 typer. Du kan välja tillstånd, ansikte, material, hatt, glasögon, hörlurar, fluga, storlek och hastighet. Klicka på en figur så hoppar den. Öppna direkt. |
| `bot-avatar.tsx` | shadcn-wrapper |
| `source/` | Källkod och licens |
