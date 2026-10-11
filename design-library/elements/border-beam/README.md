# Border Beam

> En animerad glöd som åker runt, eller andas kring, kanten på kort, knappar, inputs och sökfält.

| | |
|---|---|
| **Kategori** | Mikrointeraktioner · Kort & ytor · AI-UI |
| **Källa** | https://libraries.dev/beam.html |
| **Kod** | https://github.com/Jakubantalik/Libraries.dev (`packages/border-beam`) · npm `border-beam` (v1.4.1) |
| **Licens** | MIT © Jakub Antalik, **gratis** |
| **Teknik** | Ren CSS (conic-gradient, `@property`-animationer, pseudo-element) plus en delad rAF-loop för pulserna. React 18+, inga beroenden. |
| **Tillagd** | 2026-10-11 |

## Varför jag gillar den

<Fyll i.>

## Designprinciper

- **Två rörelsefamiljer för två budskap.** Rotation (`md`, `sm`, `line`) säger "något händer nu, titta här". Puls (`pulse-inner`, `pulse-outside`) säger "något pågår i bakgrunden, lugnt".
- **Effekten anpassar sig efter elementet.** Radien läses av från barnet automatiskt, och `pulse-outside` skalar sin halo efter elementets storlek.
- **Lager som aldrig är i vägen.** Alla effektlager har `pointer-events: none` och ligger i pseudo-element, så innehållet och tangentbordsnavigeringen påverkas inte.
- **Färg via hue-shift i stället för fasta färger.** Paletterna glider långsamt runt en bas (±30°), så glöden lever även när strålen står still.
- **Mjuk på och av.** `active` tonar in och ut i stället för att hoppa, och `onActivate`/`onDeactivate` säger till när det är klart.
- **Billig.** Animationerna går på GPU via CSS, pulserna har en gemensam loop på cirka 30 fps, och allt pausas utanför skärmen och vid `prefers-reduced-motion`.

## Typer och färger

| `size` | Användning |
|---|---|
| `md` | Kort och paneler, stråle runt hela kanten (standard) |
| `sm` | Små element: ikonknappar, chips |
| `line` | Bara underkanten, passar under sökfält och inputs |
| `pulse-inner` | Andande glöd innanför kanten, för "tänker"-tillstånd |
| `pulse-outside` | En halo som blommar ut. Kräver ett ogenomskinligt barn med 1px-kant och plats runt om. |

`colorVariant`: `colorful` (regnbåge, standard), `mono` (grå), `ocean` (blå-lila) och `sunset` (orange-röd).

## Användning

```bash
npm install border-beam
```

```tsx
import { BorderBeam } from "border-beam"

<BorderBeam size="md" colorVariant="colorful" strength={0.7}>
  <Card>…</Card>
</BorderBeam>
```

Props: `size`, `colorVariant`, `theme` ("dark" | "light" | "auto", **standard är "dark"**), `strength`, `duration`, `active`, `borderRadius`, `brightness`, `saturation`, `hueRange`, `staticColors`, `onActivate` och `onDeactivate`.

## I ett shadcn-projekt

- `border-beam.tsx` i den här mappen följer **shadcn:s `.dark`-klass**. Bibliotekets egen standard är `dark`, och dess `auto` följer bara operativsystemet, så utan wrappern får strålen fel tema när du byter tema i appen. Wrappern har också `data-slot` och `className` via `cn()`.
- Ett AI-sökfält: `<BorderBeam size="line"><InputGroup>…</InputGroup></BorderBeam>`, med `active={isStreaming}`.
- Ett kort som "tänker": `size="pulse-inner"` och `colorVariant="mono"` för ett diskret uttryck som passar shadcn:s neutrala palett.

## Filer i den här mappen

| Fil | Vad |
|---|---|
| `gallery/index.html` | Galleri med alla 5 typer × 4 färger, styrka, statiska färger och play/paus. Öppna direkt. |
| `border-beam.tsx` | shadcn-wrapper |
| `source/` | Källkod och licens |

## Anteckningar

- Glöden syns inte i headless Chrome om sidan saknar en aktiv `requestAnimationFrame`-loop. Med en sådan loop syns den, vilket jag bekräftade i `demos/ai-chat`, där den lyser runt skrivfältet medan agenten svarar.
