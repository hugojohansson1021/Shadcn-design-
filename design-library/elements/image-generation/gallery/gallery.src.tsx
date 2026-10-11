import * as React from "react"
import { createRoot } from "react-dom/client"
import { ImageGeneration, type ImageGenerationHandle } from "img-fx"
import { DEMO_IMAGE } from "./demo-image"

type PresetKey = "pixels-organic" | "pixels-mechanic" | "sweep-gradient"

const PRESETS: Array<[PresetKey, string, string]> = [
  ["pixels-organic", "Organisk", "Chromium Flow: en pixelmosaik med mjuka, organiska krom-åsar"],
  ["pixels-mechanic", "Mekanisk", "Nebula: en mer kantig, maskinell pixelmosaik"],
  ["sweep-gradient", "Svep", "En diagonal gradient som sveper över kortet med flimrande celler, och bilden byggs upp cell för cell"],
]

const store = {
  get<T>(k: string, d: T): T {
    try {
      const v = localStorage.getItem("imgfx:" + k)
      return v == null ? d : (JSON.parse(v) as T)
    } catch {
      return d
    }
  },
  set(k: string, v: unknown) {
    try {
      localStorage.setItem("imgfx:" + k, JSON.stringify(v))
    } catch {}
  },
}

// Abstract images generated on the fly, so the gallery works offline and
// from file:// (data URLs don't taint the WebGL upload).
function makeImage(stops: string[], seed: number): string {
  const c = document.createElement("canvas")
  c.width = c.height = 640
  const g = c.getContext("2d")!
  const lg = g.createLinearGradient(0, 0, 640, 640)
  stops.forEach((s, i) => lg.addColorStop(i / (stops.length - 1), s))
  g.fillStyle = lg
  g.fillRect(0, 0, 640, 640)
  let r = seed
  const rnd = () => ((r = (r * 9301 + 49297) % 233280), r / 233280)
  for (let i = 0; i < 7; i++) {
    const x = rnd() * 640, y = rnd() * 640, rad = 80 + rnd() * 220
    const rg = g.createRadialGradient(x, y, 0, x, y, rad)
    rg.addColorStop(0, `hsla(${Math.floor(rnd() * 360)}, 80%, 70%, 0.55)`)
    rg.addColorStop(1, "hsla(0,0%,100%,0)")
    g.fillStyle = rg
    g.fillRect(0, 0, 640, 640)
  }
  return c.toDataURL("image/jpeg", 0.9)
}

function useTheme() {
  const [theme, setTheme] = React.useState<"light" | "dark">(() => store.get("theme", "light"))
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme
    store.set("theme", theme)
  }, [theme])
  return [theme, setTheme] as const
}

function snippet(preset: PresetKey, s: Settings) {
  const props = [`preset="${preset}"`, `images={["/img/a.jpg", "/img/b.jpg"]}`]
  if (s.autoReveal) props.push("autoReveal")
  if (s.pixelScale !== 1) props.push(`pixelScale={${s.pixelScale}}`)
  if (s.strength !== 1) props.push(`strength={${s.strength}}`)
  return `import { ImageGeneration } from "img-fx"

<ImageGeneration
  ${props.join("\n  ")}
>
  <div style={{ width: 320, height: 320, borderRadius: 20 }} />
</ImageGeneration>`
}

type Settings = { autoReveal: boolean; pixelScale: number; strength: number; paused: boolean }
const DEFAULTS: Settings = { autoReveal: true, pixelScale: 1, strength: 1, paused: false }

function PresetCard({
  preset, label, desc, images, s, selected, fav, onSelect, onFav,
}: {
  preset: PresetKey; label: string; desc: string; images: string[]; s: Settings
  selected: boolean; fav: boolean; onSelect: () => void; onFav: () => void
}) {
  const ref = React.useRef<ImageGenerationHandle>(null)
  return (
    <div className="card" aria-selected={selected} onClick={onSelect}>
      <button
        className="star"
        aria-pressed={fav}
        aria-label={`Favorit: ${label}`}
        onClick={(e) => { e.stopPropagation(); onFav() }}
      >★</button>
      <div className="stage">
        <ImageGeneration
          ref={ref}
          preset={preset}
          images={images}
          autoReveal={s.autoReveal}
          pixelScale={s.pixelScale}
          strength={s.strength}
          paused={s.paused}
        >
          <div style={{ width: 240, height: 240, borderRadius: 16 }} />
        </ImageGeneration>
      </div>
      <div className="name">{label} <code>{preset}</code></div>
      <p className="desc">{desc}</p>
      <div className="actions" onClick={(e) => e.stopPropagation()}>
        <button className="btn" onClick={() => ref.current?.triggerReveal()}>Visa bild</button>
        <button className="btn" onClick={() => ref.current?.triggerRegenerate?.({ durationMs: 3000 })}>Generera om</button>
      </div>
    </div>
  )
}

function App() {
  const [theme, setTheme] = useTheme()
  const [s, setS] = React.useState<Settings>(() => ({ ...DEFAULTS, ...store.get("settings", {}) }))
  const [selected, setSelected] = React.useState<PresetKey>(() => store.get("selected", "pixels-organic"))
  const [favs, setFavs] = React.useState<PresetKey[]>(() => store.get("favs", []))
  const [userImages, setUserImages] = React.useState<string[]>([])
  const [copied, setCopied] = React.useState(false)

  const builtIn = React.useMemo(
    () => [
      DEMO_IMAGE,
      makeImage(["#1e1b4b", "#7c3aed", "#f472b6"], 7),
      makeImage(["#022c22", "#0ea5e9", "#fde68a"], 42),
    ],
    []
  )
  const images = userImages.length ? userImages : builtIn

  React.useEffect(() => store.set("settings", s), [s])
  React.useEffect(() => store.set("selected", selected), [selected])
  React.useEffect(() => store.set("favs", favs), [favs])

  const set = <K extends keyof Settings>(k: K, v: Settings[K]) => setS((p) => ({ ...p, [k]: v }))
  const code = snippet(selected, s)

  return (
    <main>
      <header>
        <h1>Image generation (img-fx)</h1>
        <p>Tre WebGL-effekter som "genererar" och sedan visar en bild. Klicka på ett kort för att se koden, och stjärnmärk dina favoriter.</p>
      </header>

      <div className="toolbar" role="toolbar" aria-label="Inställningar">
        <div className="seg" role="group" aria-label="Tema">
          <button className="btn" aria-pressed={theme === "light"} onClick={() => setTheme("light")}>Ljust</button>
          <button className="btn" aria-pressed={theme === "dark"} onClick={() => setTheme("dark")}>Mörkt</button>
        </div>
        <label className="ctl">Pixelstorlek
          <input type="range" min={0.5} max={2.5} step={0.05} value={s.pixelScale} onChange={(e) => set("pixelScale", +e.target.value)} />
          <output>{s.pixelScale}×</output>
        </label>
        <label className="ctl">Styrka
          <input type="range" min={0.2} max={1} step={0.05} value={s.strength} onChange={(e) => set("strength", +e.target.value)} />
          <output>{s.strength}</output>
        </label>
        <button className="btn" aria-pressed={s.autoReveal} onClick={() => set("autoReveal", !s.autoReveal)}>Auto-visa</button>
        <button className="btn" aria-pressed={s.paused} onClick={() => set("paused", !s.paused)}>{s.paused ? "Spela" : "Pausa"}</button>
        <label className="btn file">
          Egna bilder…
          <input
            type="file" accept="image/*" multiple
            onChange={(e) => {
              const files = Array.from(e.target.files ?? [])
              if (files.length) setUserImages(files.map((f) => URL.createObjectURL(f)))
            }}
          />
        </label>
        {userImages.length > 0 && <button className="btn" onClick={() => setUserImages([])}>Standardbilder</button>}
        <button className="btn" onClick={() => setS(DEFAULTS)}>Återställ</button>
      </div>

      <div className="grid">
        {PRESETS.map(([key, label, desc]) => (
          <PresetCard
            key={key + images.length + images[0].slice(-16)}
            preset={key} label={label} desc={desc} images={images} s={s}
            selected={selected === key}
            fav={favs.includes(key)}
            onSelect={() => setSelected(key)}
            onFav={() => setFavs((f) => (f.includes(key) ? f.filter((x) => x !== key) : [...f, key]))}
          />
        ))}
      </div>
      <p className="favs">{favs.length ? "Favoriter: " + favs.join(", ") : "Inga favoriter än. Klicka på ★ på ett kort."}</p>

      <section className="detail">
        <div className="code-head">
          <span>React: npm install img-fx three</span>
          <button
            className="btn"
            onClick={async () => {
              try { await navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 1500) } catch {}
            }}
          >{copied ? "Kopierat!" : "Kopiera"}</button>
        </div>
        <pre><code>{code}</code></pre>
      </section>

      <footer>
        img-fx © Jakub Antalik, MIT-licens. <a href="https://libraries.dev/image.html">libraries.dev/image</a> ·{" "}
        <a href="https://github.com/Jakubantalik/img-fx">GitHub</a>. Byggd lokalt från <code>../source</code> med React 18 och three.js.
      </footer>
    </main>
  )
}

createRoot(document.getElementById("root")!).render(<App />)
