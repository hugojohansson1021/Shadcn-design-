import * as React from "react"
import { createRoot } from "react-dom/client"
import { BorderBeam } from "border-beam"
import {
  Code, FavList, Range, Segmented, Star, ThemeToggle, jsxProps, useFavs, useStored, useTheme,
} from "../../../shared/gallery-kit"

const NS = "beam"
type Size = "md" | "sm" | "line" | "pulse-inner" | "pulse-outside"
type Variant = "colorful" | "mono" | "ocean" | "sunset"
const VARIANTS = ["colorful", "mono", "ocean", "sunset"] as const

const SIZES: Array<[Size, string, string, () => React.ReactElement]> = [
  ["md", "Kort", "En stråle som åker runt hela kanten. Standard.", () => (
    <div className="demo-card"><h3>Projektkort</h3><p>Strålen följer kortets radie.</p></div>
  )],
  ["sm", "Liten", "Kompakt glöd för små element som ikonknappar.", () => (
    <button className="demo-circle" aria-label="Skicka">↑</button>
  )],
  ["line", "Linje", "En stråle som bara åker längs underkanten, t.ex. under ett sökfält.", () => (
    <div className="demo-search">Fråga vad som helst…</div>
  )],
  ["pulse-inner", "Puls inåt", "En andande glöd innanför kanten, utan rotation.", () => (
    <div className="demo-card"><h3>Tänker…</h3><p>Lugn puls medan något pågår.</p></div>
  )],
  ["pulse-outside", "Puls utåt", "En halo som blommar ut runt elementet. Kräver ett ogenomskinligt barn med en 1px-kant.", () => (
    <div className="demo-card"><h3>Ny funktion</h3><p>Glöden sprider sig utanför.</p></div>
  )],
]

function App() {
  const [theme, setTheme] = useTheme(NS)
  const [variant, setVariant] = useStored<Variant>(NS, "variant", "colorful")
  const [strength, setStrength] = useStored(NS, "strength", 1)
  const [active, setActive] = useStored(NS, "active", true)
  const [staticColors, setStaticColors] = useStored(NS, "static", false)
  const [selected, setSelected] = useStored<Size>(NS, "selected", "md")
  const [favs, toggleFav] = useFavs(NS)

  const props = { size: selected, colorVariant: variant, strength, theme, staticColors, active }
  const code = `import { BorderBeam } from "border-beam"

<BorderBeam ${jsxProps(props, { size: "md", colorVariant: "colorful", strength: 1, staticColors: false, active: true })}>
  <Card>…</Card>
</BorderBeam>`

  return (
    <main>
      <header>
        <h1>Border Beam</h1>
        <p>En animerad glöd som åker runt, eller andas kring, kanten på kort, knappar och sökfält. Ren CSS, inga beroenden.</p>
      </header>

      <div className="toolbar" role="toolbar" aria-label="Inställningar">
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <Segmented label="Färg" options={VARIANTS} value={variant} onChange={setVariant} />
        <Range label="Styrka" min={0} max={1} step={0.05} value={strength} onChange={setStrength} />
        <button className="btn" aria-pressed={staticColors} onClick={() => setStaticColors(!staticColors)}>Statiska färger</button>
        <button className="btn" aria-pressed={!active} onClick={() => setActive(!active)}>{active ? "Pausa" : "Spela"}</button>
      </div>

      <div className="grid" style={{ "--card-min": "320px", "--stage-h": "160px" } as React.CSSProperties}>
        {SIZES.map(([size, label, desc, Demo]) => (
          <div key={size} className="card" aria-selected={selected === size} onClick={() => setSelected(size)}>
            <Star on={favs.includes(size)} label={label} onToggle={() => toggleFav(size)} />
            <div className="stage">
              <BorderBeam
                key={theme}
                size={size}
                colorVariant={variant}
                strength={strength}
                theme={theme}
                active={active}
                staticColors={staticColors}
              >
                <Demo />
              </BorderBeam>
            </div>
            <div className="name">{label} <code>size="{size}"</code></div>
            <p className="desc">{desc}</p>
          </div>
        ))}
      </div>
      <FavList favs={favs} />

      <Code title="React: npm install border-beam" code={code} />

      <footer>
        border-beam © Jakub Antalik, MIT-licens. <a href="https://libraries.dev/beam.html">libraries.dev/beam</a> ·{" "}
        <a href="https://github.com/Jakubantalik/Libraries.dev/tree/main/packages/border-beam">GitHub</a>. Byggd lokalt från <code>../source</code>.
      </footer>
    </main>
  )
}

createRoot(document.getElementById("root")!).render(<App />)
