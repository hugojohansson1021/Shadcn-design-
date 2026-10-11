# Designbibliotek

Här samlar vi designelement som du gillar: komponenter, animationer, effekter, layouter och mikrointeraktioner. Biblioteket är både en inspirationsbank för dig och en referens för Claude när nya komponenter designas med skillen `shadcn-component-design`.

## Struktur

```
design-library/
├── README.md          ← den här filen
├── INDEX.md           ← lista över alla element, uppdateras vid varje ny post
├── _template.md       ← mall för nya poster
└── elements/
    └── <slug>/
        ├── README.md  ← själva posten (utgå från _template.md)
        ├── gallery/   ← lokalt galleri för att jämföra varianter (öppna index.html)
        ├── source/    ← nedladdad källkod med licens, om licensen tillåter
        ├── *.tsx      ← shadcn-wrapper, klar att kopiera till components/ui/
        └── …          ← skärmdumpar, kodutdrag eller demos (valfritt)
```

När ett element har flera varianter och licensen tillåter det (t.ex. MIT) laddar vi ner källkoden och bygger ett galleri. Gallerierna byggs med `esbuild` till fristående filer, så de fungerar offline och öppnas direkt från disk.

## Lägga till ett element

Det enklaste är att skicka en länk till Claude och skriva t.ex. "lägg till den här i designbiblioteket". Claude gör då så här:

1. Läser källan: sidan, repot, README och licensen.
2. Skapar `elements/<slug>/README.md` utifrån `_template.md`.
3. Plockar ut **designprinciperna**, alltså det som gör elementet bra, så att de kan återanvändas även utan biblioteket.
4. Lägger till en rad i `INDEX.md`.
5. Frågar dig vad du gillar med elementet, om du inte redan har sagt det. Det är den viktigaste raden i posten.

Du kan också lägga till poster själv: kopiera `_template.md`, fyll i den och lägg till en rad i `INDEX.md`.

## Skript

| Skript | Vad |
|---|---|
| `scripts/fetch_source.py <owner/repo> <undermapp> <mål>` | Hämtar `LICENSE`, `NOTICE`, `README.md`, `package.json` och `src/` från GitHub. Avbryter om repot saknar licens. |
| `scripts/build_gallery.sh <slug> <paket>=<källväg>` | Bygger `elements/<slug>/gallery/gallery.src.tsx` till en fristående `gallery.js`. Kräver miljövariablerna `ESBUILD` (en esbuild-binär) och `NODE_MODULES` (med react, react-dom, scheduler och eventuella peers som three). |

Gemensam stil och gemensamma byggstenar för gallerierna finns i `shared/gallery.css` och `shared/gallery-kit.tsx`. Galleri-filerna (`gallery.js`) är redan byggda och behöver bara byggas om om du ändrar källan.

**Licenskontroll:** läs alltid både `LICENSE` och en eventuell `NOTICE`. Metal innehåller t.ex. en shader under Apache-2.0 vars `NOTICE` måste följa med.

## Kategorier

Använd en av dessa i INDEX.md, eller lägg till en ny om ingen passar:

- **Loaders**: laddning och "tänker"-tillstånd
- **Bakgrunder**: gradienter, mönster, shaders
- **Kort & ytor**: kort, paneler, glas- och metalleffekter
- **Knappar & kontroller**: knappar, switchar, sliders
- **Text & typografi**: textanimationer och rubriker
- **Mikrointeraktioner**: hover, klick, övergångar
- **Layout**: grids, sektioner, navigation
- **AI-UI**: chatt, röst och agentstatus
