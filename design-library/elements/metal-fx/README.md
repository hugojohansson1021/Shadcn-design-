# Metal (metal-fx v2)

> Flytande metall i realtid runt knappar, ikoner, text och badges, med en vandrande glöd, en buckla som följer pekaren och reflektioner i grannelement.

| | |
|---|---|
| **Kategori** | Knappar & kontroller · Text & typografi · Mikrointeraktioner |
| **Källa** | https://libraries.dev/metal.html · demo: https://metal.jakubantalik.com |
| **Kod** | https://github.com/Jakubantalik/Libraries.dev (`packages/metal-fx`, v2) · npm `metal-fx` (v2.0.11) |
| **Licens** | MIT © Jakub Antalik, **gratis**. Metall-shadern `liquidMetal` kommer från **Paper Shaders © Paper Design, Inc. (Apache-2.0)**, också gratis, men `NOTICE`-filen ska följa med. Den ingår i npm-paketet och i `source/NOTICE`. |
| **Teknik** | WebGL2 (en delad kontext för hela sidan), React 18+. Utan WebGL2 visas barnet som vanligt. |
| **Tillagd** | 2026-10-11 |

## Varför jag gillar den

<Fyll i.>

## Designprinciper

- **Material i stället för färg.** En premiumknapp markeras med ett *material* (metall) i stället för en starkare färg. Det står ut utan att krocka med en neutral palett.
- **Bara kanten är metall.** Ringen är 1–2 px och knappens yta är orörd, så texten förblir läsbar.
- **Fysisk respons.** Bucklan (`useMetalBend`) fjädrar mot pekaren, och grannelement fångar upp metallens reflex (`reflectionTargets`, bara i mörkt tema). Elementet känns som ett föremål.
- **Ljust och mörkt tema är separat tunade.** Varje preset har egna värden för ljust och mörkt, inte bara inverterade färger.
- **Graceful fallback.** Utan WebGL2 visas den vanliga knappen, och vid SSR renderas en genomskinlig platshållare.

## Delar och presets

| Del | Användning |
|---|---|
| `<MetalFx variant="button">` | Pillknapp, t.ex. "Uppgradera till Pro" |
| `<MetalFx variant="circle">` | Rund ikonknapp, t.ex. skicka i en chatt |
| `<MetalText font color>` | Metall i bokstäverna |
| `<MetalBadge>` | "New"-pill med metallkant |
| `useMetalBend(ref)` | En buckla som följer pekaren |
| `useMetalTextReflection(ref)` | Text bredvid som fångar metallens reflex |

Presets: `chromatic` (skimrande regnbåge, standard), `silver` och `gold`.

## Användning

```bash
npm install metal-fx
```

```tsx
import { MetalFx, MetalText, MetalBadge, useMetalBend } from "metal-fx"

<MetalFx preset="chromatic" strength={1}>
  <button className="h-10 rounded-full px-6">Uppgradera till Pro</button>
</MetalFx>

const ref = useRef<HTMLDivElement>(null)
useMetalBend(ref)
<MetalFx ref={ref} preset="chromatic" variant="circle" innerShadow>
  <button aria-label="Skicka" className="size-9 rounded-full"><ArrowUpIcon /></button>
</MetalFx>

<MetalText font="500 24px/1.2 Inter" color="#E2E2E2">Pro</MetalText>
<MetalBadge>New</MetalBadge>
```

Props för MetalFx: `preset`, `variant`, `theme`, `strength`, `innerShadow`, `reflectionTargets`, `disableGlow`, `glowGain`, `paused`, `borderRadius` och `scale`.

## I ett shadcn-projekt

- `metal-fx.tsx` i den här mappen exporterar `MetalFx`, `MetalText` och `MetalBadge`. De följer **shadcn:s `.dark`-klass**; originalet följer bara operativsystemets tema. MetalFx har också en `bend`-prop för bucklan, så du slipper hooken.
- Använd en vanlig shadcn-`Button` som barn: `<MetalFx bend><Button className="rounded-full">Pro</Button></MetalFx>`.
- Använd sparsamt, helst ett metallelement per vy. Effekten säger "premium" och tappar kraft om den finns överallt.

## Filer i den här mappen

| Fil | Vad |
|---|---|
| `gallery/index.html` | Galleri med alla 3 presets × 2 varianter, MetalText och MetalBadge, styrka, inre skugga, buckla och paus. Öppna direkt. |
| `metal-fx.tsx` | shadcn-wrappers |
| `source/` | Källkod för v2, `LICENSE` och `NOTICE` |
