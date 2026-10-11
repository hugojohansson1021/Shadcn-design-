// Shared building blocks for the design-library galleries: persisted state,
// theme toggle, favourites, copyable code. Bundled into each gallery by
// scripts/build_gallery.sh.

import * as React from "react"

function read<T>(ns: string, key: string, fallback: T): T {
  try {
    const v = localStorage.getItem(`${ns}:${key}`)
    return v == null ? fallback : (JSON.parse(v) as T)
  } catch {
    return fallback
  }
}

function write(ns: string, key: string, value: unknown) {
  try {
    localStorage.setItem(`${ns}:${key}`, JSON.stringify(value))
  } catch {}
}

export function useStored<T>(ns: string, key: string, fallback: T) {
  const [value, setValue] = React.useState<T>(() => read(ns, key, fallback))
  React.useEffect(() => write(ns, key, value), [ns, key, value])
  return [value, setValue] as const
}

export type Theme = "light" | "dark"

export function useTheme(ns: string) {
  const [theme, setTheme] = useStored<Theme>(ns, "theme", "dark")
  React.useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])
  return [theme, setTheme] as const
}

export function ThemeToggle({ theme, setTheme }: { theme: Theme; setTheme: (t: Theme) => void }) {
  return (
    <div className="seg" role="group" aria-label="Tema">
      <button className="btn" aria-pressed={theme === "light"} onClick={() => setTheme("light")}>Ljust</button>
      <button className="btn" aria-pressed={theme === "dark"} onClick={() => setTheme("dark")}>Mörkt</button>
    </div>
  )
}

export function Segmented<T extends string>({
  label, options, value, onChange,
}: { label: string; options: readonly T[]; value: T; onChange: (v: T) => void }) {
  return (
    <div className="ctl">
      {label}
      <div className="seg" role="group" aria-label={label}>
        {options.map((o) => (
          <button key={o} className="btn" aria-pressed={value === o} onClick={() => onChange(o)}>{o}</button>
        ))}
      </div>
    </div>
  )
}

export function Range({
  label, min, max, step, value, onChange, suffix = "",
}: { label: string; min: number; max: number; step: number; value: number; onChange: (v: number) => void; suffix?: string }) {
  return (
    <label className="ctl">
      {label}
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(+e.target.value)} />
      <output>{+value.toFixed(2)}{suffix}</output>
    </label>
  )
}

export function useFavs(ns: string) {
  const [favs, setFavs] = useStored<string[]>(ns, "favs", [])
  const toggle = (k: string) => setFavs((f) => (f.includes(k) ? f.filter((x) => x !== k) : [...f, k]))
  return [favs, toggle] as const
}

export function Star({ on, label, onToggle }: { on: boolean; label: string; onToggle: () => void }) {
  return (
    <button
      className="star"
      aria-pressed={on}
      aria-label={`Favorit: ${label}`}
      onClick={(e) => { e.stopPropagation(); onToggle() }}
    >★</button>
  )
}

export function FavList({ favs }: { favs: string[] }) {
  return <p className="favs">{favs.length ? "Favoriter: " + favs.join(", ") : "Inga favoriter än. Klicka på ★ på ett kort."}</p>
}

export function Code({ title, code }: { title: string; code: string }) {
  const [copied, setCopied] = React.useState(false)
  return (
    <section className="detail">
      <div className="code-head">
        <span>{title}</span>
        <button
          className="btn"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(code)
              setCopied(true)
              setTimeout(() => setCopied(false), 1500)
            } catch {}
          }}
        >{copied ? "Kopierat!" : "Kopiera"}</button>
      </div>
      <pre><code>{code}</code></pre>
    </section>
  )
}

/** Render JSX props as a code string, skipping defaults. */
export function jsxProps(props: Record<string, unknown>, defaults: Record<string, unknown> = {}) {
  return Object.entries(props)
    .filter(([k, v]) => v !== undefined && defaults[k] !== v)
    .map(([k, v]) =>
      v === true ? k : typeof v === "string" ? `${k}="${v}"` : `${k}={${JSON.stringify(v)}}`
    )
    .join(" ")
}
