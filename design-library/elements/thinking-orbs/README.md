# Thinking Orbs

> Prickade, animerade "tankeklot" som laddningsindikator för AI- och agentgränssnitt, med nio tillstånd som vart och ett beskriver vad agenten gör.

| | |
|---|---|
| **Kategori** | Loaders · AI-UI |
| **Källa** | https://libraries.dev/orbs |
| **Kod** | https://github.com/Jakubantalik/Libraries.dev (`packages/thinking-orbs`) · npm `thinking-orbs` (v0.3.2) |
| **Licens** | MIT © Jakub Antalik |
| **Teknik** | 2D-canvas (bara arcs, ingen WebGL och inga filter), React 18+, inga runtime-beroenden. Portar finns för React Native (Skia) och SwiftUI. |
| **Tillagd** | 2026-10-11 |

## Varför jag gillar den

<Fyll i: vad är det som tilltalar dig? Prickarna, rörelsen, att varje tillstånd har en egen animation, enkelheten?>

## Designprinciper

- **Ett verb per tillstånd.** Indikatorn visar *vad* agenten gör, inte bara att den laddar: `working`, `searching`, `solving`, `listening`, `connecting`, `weaving`, `composing`, `breathing`, `shaping`. Varje tillstånd har en egen rörelse som visuellt motsvarar verbet. `searching` har t.ex. en meridian som sveper över en prickig glob, och i `solving` rör sig banden kaotiskt och klickar sedan på plats.
- **Strikt monokromt.** Bara en bläckfärg: ljus på mörk bakgrund och mörk på ljus. Därför passar den i alla designsystem utan att krocka med en accentfärg.
- **Prickar i stället för ytor.** Allt byggs av små cirklar. Det ger ett lätt, tekniskt och "levande" uttryck, och det blir lika skarpt på alla skärmar.
- **Storlekar som egna designer, inte skalning.** `64` (chattavatar) och `20` (inline i text) har var sin uppsättning prickantal, prickstorlek och hastighet. En liten indikator som bara skalats ner blir gröt.
- **Temat följer projektet automatiskt.** Ordningen är: ett `.dark`-/`data-theme`-attribut på en förälder (samma konvention som shadcn), sedan `prefers-color-scheme`, och sist SSR-säker målning först på klienten.
- **Respektfull rörelse.** Vid `prefers-reduced-motion` visas en statisk, representativ bildruta. Animationen pausas när indikatorn är utanför skärmen eller fliken är dold, och alla instanser delar en klocka så att de håller samma fas.
- **Tillgänglig som standard.** Den har `role="img"` och en `aria-label` per tillstånd som går att skriva över.

## Användning

```bash
npm install thinking-orbs
```

```tsx
import { ThinkingOrb } from "thinking-orbs"

<ThinkingOrb state="searching" size={64} />
<ThinkingOrb state="solving" size={20} speed={1.5} aria-label="Analyserar repot…" />
```

Props: `state`, `size` (64 | 20), `theme` ("auto" | "dark" | "light"), `speed` (multiplikator), `paused`, `aria-label`, och övriga `<canvas>`-props som `className` och `style`.

## I ett shadcn-projekt

- `theme="auto"` läser shadcn:s `.dark`-klass direkt, så det behövs ingen koppling till temat.
- **Chattavatar:** `size={64}` bredvid ett assistentmeddelande medan svaret strömmas.
- **Inline-status:** `size={20}` i en `Badge`, i en `Button` med `disabled` medan något körs, eller före en text som "Söker i dokumentation…". Den matchar `size-4`/`size-5`-ikoner.
- Mappa agentens faktiska steg till tillstånden, t.ex. sökning → `searching`, kodkörning → `solving` och skrivande → `composing`, så att indikatorn säger något.
- En egen shadcn-wrapper kan exponera `data-slot="thinking-orb"` och ta emot `className` via `cn()`, enligt konventionerna i skillen.

## Filer i den här mappen

| Fil | Vad |
|---|---|
| `gallery/index.html` | **Galleri med alla 9 tillstånd** i storlek 64/32/20. Här kan du ställa in tema, hastighet, täthet, prickstorlek och färg, stjärnmärka favoriter och kopiera färdig kod. Öppna filen direkt i webbläsaren, den fungerar offline. |
| `gallery/orbs-engine.js` | Orb-motorn byggd från `source/` till en fristående fil på 14 kB. Galleriet använder den, och du kan använda den på vilken webbsida som helst utan React. |
| `thinking-orb.tsx` | shadcn-wrapper. Kopiera den till `components/ui/` och kör `npm install thinking-orbs`. Den tar `size` som `"sm"` (20), `"md"` (32) eller `"default"` (64) och har `data-slot` och `className` via `cn()`. |
| `source/` | Komplett källkod från GitHub med licens, som backup. Den är nyare än npm 0.3.2 men har samma API. |

Storlek **32** finns också. Den har inte en egen genomarbetad tuning, utan är interpolerad mellan 20 och 64. Extra props som finns i både npm och källkoden: `color` (färgton), `dots` (täthet), `dotSize`, `opts` (rå motorinställning, t.ex. `shape: 0/1/2` för att låsa `shaping` på cirkel, triangel eller kvadrat) och `gravity` (orben drar till sig muspekaren).

## Anteckningar

- Bygg om motorn efter en uppdatering av `source/`: `esbuild entry.ts --bundle --format=iife --global-name=ThinkingOrbsEngine --minify` med samma exporter som i `orbs-engine.js`.
- Samma repo innehåller fler bibliotek som kan vara värda en egen post: Border beam, Metal, Gooey, Voice, Image och Avatar bots.
