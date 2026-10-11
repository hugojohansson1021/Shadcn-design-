# Image generation (img-fx)

> En WebGL-laddare för bildkort: en levande pixelmosaik som "genererar" och sedan löses upp till den riktiga bilden, som när en AI skapar en bild.

| | |
|---|---|
| **Kategori** | Loaders · AI-UI · Kort & ytor |
| **Källa** | https://libraries.dev/image.html · demo: https://image.jakubantalik.com |
| **Kod** | https://github.com/Jakubantalik/img-fx · npm `img-fx` (v0.5.1) |
| **Licens** | MIT © Jakub Antalik, **gratis**, även för kommersiella projekt. Licenstexten ska följa med. |
| **Teknik** | WebGL-shader via three.js (peer dependency), React 18+ |
| **Tillagd** | 2026-10-11 |

## Varför jag gillar den

<Fyll i.>

## Designprinciper

- **Laddningen är en del av upplevelsen.** I stället för en spinner eller ett grått skelett visas ett levande "genererande" tillstånd som sedan löses upp till bilden. Väntan känns som att något skapas.
- **Övergången bygger på samma rutnät som effekten.** Bilden växer fram cell för cell i samma rutnät som shadern, så det finns inget hopp mellan laddning och resultat.
- **Cellerna har fast fysisk storlek.** Storleken räknas i CSS-pixlar, så ett stort kort får fler celler, inte större. Inga grova pixlar på stora ytor.
- **"Generera om" använder bildens egna färger.** Paletten hämtas från bilden som visas, så mosaiken ser ut att komma ur bilden.
- **Temat följer projektet:** `data-theme`, `.dark`/`.light` eller `prefers-color-scheme`.
- **Snål med resurser.** En gemensam WebGL-kontext för hela sidan, 10 fps som standard (räcker för långsam rörelse), paus när kortet är utanför skärmen, och bilder cachas per URL.

## Presets

| Preset | Utseende |
|---|---|
| `pixels-organic` | Chromium Flow: en pixelmosaik med mjuka, organiska krom-åsar (standard) |
| `pixels-mechanic` | Nebula: en mer kantig, maskinell mosaik |
| `sweep-gradient` | En diagonal gradient som sveper från övre vänstra hörnet, med flimrande celler. Bilden byggs upp längs bandet. |

## Användning

```bash
npm install img-fx three
```

```tsx
import { ImageGeneration } from "img-fx"

<ImageGeneration preset="pixels-organic" images={["/img/a.jpg", "/img/b.jpg"]} autoReveal>
  <div style={{ width: 320, height: 320, borderRadius: 20 }} />
</ImageGeneration>
```

Viktiga props: `preset`, `images` (bildpool, slumpas utan upprepning), `autoReveal`, `theme`, `pixelScale` (0.5 ger finare och 2 grövre celler), `strength` (opacitet), `cardBg`, `colors` (upp till 7 egna färger), `revealDelayRange`, `revealHoldMs`, `revealFadeOutMs`, `borderRadius`, `paused` och `onCycle`.

Styrning via ref (`ImageGenerationHandle`): `triggerReveal({ hold: "auto" | "manual" })`, `triggerHide()`, `isImageActive()` och `triggerRegenerate({ durationMs, tintFromImage, autoReveal })`.

## I ett shadcn-projekt

- `image-generation.tsx` i den här mappen är en wrapper för `components/ui/`. Utan barn-element ritar den ett kort med `bg-muted` och `rounded-xl`, och den tar `className` via `cn()`.
- Passar bra som platshållare medan en AI-bild genereras. Visa effekten under väntan och anropa sedan `triggerReveal({ hold: "manual" })` när den riktiga bilden-URL:en är klar.
- Ge `cardBg` samma färg som kortets bakgrund, t.ex. `var(--muted)` uträknad till hex, om shaderns kantblandning ska smälta in i temat.
- Bilderna måste komma från samma domän, eller ha CORS påslaget, för att "generera om" ska kunna hämta färger från bilden.

## Filer i den här mappen

| Fil | Vad |
|---|---|
| `gallery/index.html` | **Galleri med alla 3 presets.** Här kan du ställa in tema, pixelstorlek, styrka och auto-visning, köra "Visa bild" och "Generera om", ladda upp egna bilder, stjärnmärka favoriter och kopiera kod. Öppna filen direkt, den fungerar offline. |
| `gallery/gallery.js` | Galleriet byggt från `source/` med React 18 och three.js (745 kB). |
| `image-generation.tsx` | shadcn-wrapper. |
| `source/` | Komplett källkod från GitHub med licens. |
