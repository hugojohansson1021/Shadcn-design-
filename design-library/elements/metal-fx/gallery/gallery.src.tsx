import * as React from "react"
import { createRoot } from "react-dom/client"
import { MetalBadge, MetalFx, MetalText, isMetalFxSupported, useMetalBend } from "metal-fx"
import {
  Code, FavList, Range, Star, ThemeToggle, jsxProps, useFavs, useStored, useTheme,
} from "../../../shared/gallery-kit"

const NS = "metal"
type Preset = "chromatic" | "silver" | "gold"
type Variant = "button" | "circle"

const PRESETS: Array<[Preset, string, string]> = [
  ["chromatic", "Kromatisk", "Skimrande regnbågsmetall. Standard."],
  ["silver", "Silver", "Kallt, rent stål."],
  ["gold", "Guld", "Varmt guld."],
]

type Shared = { theme: "light" | "dark"; strength: number; innerShadow: boolean; paused: boolean; bend: boolean }

// Mounted after the MetalFx sibling so its canvas exists when the hook attaches.
function Bend({ target }: { target: React.RefObject<HTMLDivElement> }) {
  useMetalBend(target)
  return null
}

function Bendable({ preset, variant, s }: { preset: Preset; variant: Variant; s: Shared }) {
  const ref = React.useRef<HTMLDivElement>(null)
  return (
    <>
    <MetalFx
      ref={ref}
      preset={preset}
      variant={variant}
      theme={s.theme}
      strength={s.strength}
      innerShadow={s.innerShadow}
      paused={s.paused}
    >
      {variant === "button" ? (
        <button className="demo-pill">Uppgradera till Pro</button>
      ) : (
        <button className="demo-circle" aria-label="Skicka">↑</button>
      )}
    </MetalFx>
    {s.bend && <Bend target={ref} />}
    </>
  )
}

function App() {
  const [theme, setTheme] = useTheme(NS)
  const [strength, setStrength] = useStored(NS, "strength", 1)
  const [innerShadow, setInnerShadow] = useStored(NS, "innerShadow", true)
  const [paused, setPaused] = useStored(NS, "paused", false)
  const [bend, setBend] = useStored(NS, "bend", true)
  const [selected, setSelected] = useStored<Preset>(NS, "selected", "chromatic")
  const [favs, toggleFav] = useFavs(NS)
  const s: Shared = { theme, strength, innerShadow, paused, bend }
  const supported = React.useMemo(() => isMetalFxSupported(), [])

  const props = jsxProps({ preset: selected, theme, strength, innerShadow, paused }, { strength: 1, innerShadow: false, paused: false })
  const code = `import { MetalFx, MetalText, MetalBadge, useMetalBend } from "metal-fx"

<MetalFx ${props}>
  <button>Uppgradera till Pro</button>
</MetalFx>

// cirkel med "bucklan" som följer pekaren
const ref = useRef<HTMLDivElement>(null)
useMetalBend(ref)
<MetalFx ref={ref} variant="circle" ${props}>
  <button aria-label="Skicka"><ArrowUpIcon /></button>
</MetalFx>

<MetalText font="600 40px/1.1 Inter" color="#E2E2E2">Pro</MetalText>
<MetalBadge>New</MetalBadge>`

  return (
    <main>
      <header>
        <h1>Metal (metal-fx v2)</h1>
        <p>Flytande metall i realtid (WebGL2) runt knappar, ikoner, text och badges, med en glöd som vandrar. Håll pekaren över cirklarna för att se bucklan.</p>
        {!supported && <p style={{ color: "#ef4444" }}>Din webbläsare saknar WebGL2. Effekten visar bara de vanliga elementen.</p>}
      </header>

      <div className="toolbar" role="toolbar" aria-label="Inställningar">
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <Range label="Styrka" min={0} max={1} step={0.05} value={strength} onChange={setStrength} />
        <button className="btn" aria-pressed={innerShadow} onClick={() => setInnerShadow(!innerShadow)}>Inre skugga</button>
        <button className="btn" aria-pressed={bend} onClick={() => setBend(!bend)}>Buckla vid pekare</button>
        <button className="btn" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Spela" : "Pausa"}</button>
      </div>

      <h2 className="section">MetalFx: presets × varianter</h2>
      <div className="grid" style={{ "--card-min": "300px", "--stage-h": "120px" } as React.CSSProperties}>
        {PRESETS.map(([preset, label, desc]) => (
          <div key={preset + theme} className="card" aria-selected={selected === preset} onClick={() => setSelected(preset)}>
            <Star on={favs.includes(preset)} label={label} onToggle={() => toggleFav(preset)} />
            <div className="stage" style={{ gap: 28 }}>
              <Bendable preset={preset} variant="button" s={s} />
              <Bendable preset={preset} variant="circle" s={s} />
            </div>
            <div className="name">{label} <code>preset="{preset}"</code></div>
            <p className="desc">{desc} Pill: <code>variant="button"</code>, cirkel: <code>variant="circle"</code>.</p>
          </div>
        ))}
      </div>

      <h2 className="section">MetalText och MetalBadge</h2>
      <div className="grid" style={{ "--card-min": "300px", "--stage-h": "120px" } as React.CSSProperties}>
        <div key={"text" + theme} className="card" onClick={() => {}}>
          <Star on={favs.includes("MetalText")} label="MetalText" onToggle={() => toggleFav("MetalText")} />
          <div className="stage">
            <MetalText font="600 48px/1.1 ui-sans-serif, system-ui" color={theme === "dark" ? "#E2E2E2" : "#3a3a3a"} theme={theme} strength={strength}>
              Pro
            </MetalText>
          </div>
          <div className="name">MetalText <code>&lt;MetalText font color&gt;</code></div>
          <p className="desc">Metall inuti bokstäverna, med en ljus inre kant.</p>
        </div>
        <div key={"badge" + theme} className="card">
          <Star on={favs.includes("MetalBadge")} label="MetalBadge" onToggle={() => toggleFav("MetalBadge")} />
          <div className="stage">
            <MetalBadge theme={theme} strength={strength}>New</MetalBadge>
            <MetalBadge theme={theme} strength={strength}>Beta</MetalBadge>
          </div>
          <div className="name">MetalBadge <code>&lt;MetalBadge&gt;</code></div>
          <p className="desc">En "New"-pill med vit fyllning och metallkant.</p>
        </div>
      </div>
      <FavList favs={favs} />

      <Code title="React: npm install metal-fx" code={code} />

      <footer>
        metal-fx © Jakub Antalik, MIT-licens. Metall-shadern kommer från Paper Shaders © Paper Design, Inc. (Apache-2.0, se <code>../source/NOTICE</code>).{" "}
        <a href="https://libraries.dev/metal.html">libraries.dev/metal</a>. Byggd lokalt från <code>../source</code>.
      </footer>
    </main>
  )
}

createRoot(document.getElementById("root")!).render(<App />)
