import * as React from "react"
import { createRoot } from "react-dom/client"
import { BotAvatar, botAvatarPresets, botAvatarTypes } from "bot-avatars"
import type { BotAvatarType } from "bot-avatars"
import {
  Code, FavList, Range, Segmented, Star, ThemeToggle, jsxProps, useFavs, useStored, useTheme,
} from "../../../shared/gallery-kit"

const NS = "bots"
const STATES = ["default", "working", "sleeping"] as const
const FACES = ["eyes", "mouth"] as const
const SHADINGS = ["fabric", "plastic", "crisp", "smooth", "flat"] as const
const HATS = ["none", "beret", "beanie", "party", "crown"] as const
const GLASSES = ["none", "round", "square", "shades"] as const

const STATE_SV: Record<(typeof STATES)[number], string> = {
  default: "tittar runt och hoppar ibland",
  working: "hoppar och snurrar med ett skratt",
  sleeping: "huvudet nere, slutna ögon, lugna andetag",
}

function App() {
  const [theme, setTheme] = useTheme(NS)
  const [state, setState] = useStored<(typeof STATES)[number]>(NS, "state", "default")
  const [face, setFace] = useStored<(typeof FACES)[number]>(NS, "face", "eyes")
  const [shading, setShading] = useStored<(typeof SHADINGS)[number]>(NS, "shading", "fabric")
  const [hat, setHat] = useStored<(typeof HATS)[number]>(NS, "hat", "none")
  const [glasses, setGlasses] = useStored<(typeof GLASSES)[number]>(NS, "glasses", "none")
  const [headphones, setHeadphones] = useStored(NS, "headphones", false)
  const [bowTie, setBowTie] = useStored(NS, "bowTie", false)
  const [size, setSize] = useStored(NS, "size", 72)
  const [speed, setSpeed] = useStored(NS, "speed", 1)
  const [paused, setPaused] = useStored(NS, "paused", false)
  const [selected, setSelected] = useStored<BotAvatarType>(NS, "selected", "clover")
  const [favs, toggleFav] = useFavs(NS)

  const common = {
    state, face, shading, size, speed, paused, theme,
    hat, glasses, headphones, bowTie,
  }
  const props = jsxProps(
    { type: selected, ...common },
    { state: "default", face: "eyes", shading: "fabric", size: 64, speed: 1, paused: false, hat: "none", glasses: "none", headphones: false, bowTie: false, theme: undefined }
  )
  const code = `import { BotAvatar } from "bot-avatars"

<BotAvatar ${props} />

// tillstånd efter vad agenten gör
<BotAvatar type="${selected}" state={busy ? "working" : "default"} />`

  return (
    <main>
      <header>
        <h1>Bot Avatars</h1>
        <p>18 små 3D-figurer för AI-agenter, ritade på 2D-canvas. De följer pekaren med blicken, och om du klickar på en hoppar den och snurrar.</p>
      </header>

      <div className="toolbar" role="toolbar" aria-label="Inställningar">
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <Segmented label="Tillstånd" options={STATES} value={state} onChange={setState} />
        <Segmented label="Ansikte" options={FACES} value={face} onChange={setFace} />
        <label className="ctl">Material
          <select value={shading} onChange={(e) => setShading(e.target.value as typeof shading)}>
            {SHADINGS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </label>
        <label className="ctl">Hatt
          <select value={hat} onChange={(e) => setHat(e.target.value as typeof hat)}>
            {HATS.map((s) => <option key={s}>{s}</option>)}
          </select>
        </label>
        <label className="ctl">Glasögon
          <select value={glasses} onChange={(e) => setGlasses(e.target.value as typeof glasses)}>
            {GLASSES.map((s) => <option key={s}>{s}</option>)}
          </select>
        </label>
        <button className="btn" aria-pressed={headphones} onClick={() => setHeadphones(!headphones)}>Hörlurar</button>
        <button className="btn" aria-pressed={bowTie} onClick={() => setBowTie(!bowTie)}>Fluga</button>
        <Range label="Storlek" min={32} max={120} step={4} value={size} onChange={setSize} suffix="px" />
        <Range label="Hastighet" min={0.25} max={2.5} step={0.05} value={speed} onChange={setSpeed} suffix="×" />
        <button className="btn" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Spela" : "Pausa"}</button>
      </div>

      <p className="desc" style={{ marginBottom: 12 }}>Tillstånd <code>{state}</code>: {STATE_SV[state]}.</p>

      <div className="grid" style={{ "--card-min": "170px", "--stage-h": "130px" } as React.CSSProperties}>
        {botAvatarTypes.map((type, i) => (
          <div key={type} className="card" aria-selected={selected === type} onClick={() => setSelected(type)}>
            <Star on={favs.includes(type)} label={type} onToggle={() => toggleFav(type)} />
            <div className="stage">
              <BotAvatar type={type} seed={(i * 0.137) % 1} {...common} />
            </div>
            <div className="name">{botAvatarPresets[type].label} <code>{type}</code></div>
          </div>
        ))}
      </div>
      <FavList favs={favs} />

      <Code title="React: npm install bot-avatars" code={code} />

      <footer>
        bot-avatars © Jakub Antalik, MIT-licens. <a href="https://libraries.dev/bots.html">libraries.dev/bots</a> ·{" "}
        <a href="https://github.com/Jakubantalik/Libraries.dev/tree/main/packages/bot-avatars">GitHub</a>. Byggd lokalt från <code>../source</code>.
      </footer>
    </main>
  )
}

createRoot(document.getElementById("root")!).render(<App />)
