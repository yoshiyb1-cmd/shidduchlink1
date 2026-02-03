"use client";
import Link from "next/link";
import { useMemo, useState } from "react";

type Profile = {
  name: string;
  age: number;
  location: string;
  denomination: string;
  headline: string;
};

const seed: Profile[] = [
  { name: "Leah", age: 31, location: "New York, NY", denomination: "Modern Orthodox", headline: "Warm, grounded, family-minded." },
  { name: "Rivka", age: 29, location: "Teaneck, NJ", denomination: "Orthodox", headline: "Thoughtful, growth-focused, kind." },
  { name: "Miriam", age: 34, location: "Jerusalem, IL", denomination: "Orthodox", headline: "Serious about building a bayis ne’eman." },
  { name: "Sarah", age: 32, location: "Miami, FL", denomination: "Conservative", headline: "Positive, loyal, and intentional." },
  { name: "Chaya", age: 30, location: "Lakewood, NJ", denomination: "Orthodox", headline: "Simple, sincere, and values-driven." },
  { name: "Esther", age: 35, location: "Toronto, ON", denomination: "Modern Orthodox", headline: "Open-hearted, mature, and steady." },
];

export default function SingleDesktop() {
  const profiles = useMemo(() => seed, []);
  const [active, setActive] = useState(0);

  // Mock filters (visual only)
  const [mode, setMode] = useState<"hybrid" | "swipe" | "search">("hybrid");
  const [ageMin, setAgeMin] = useState(28);
  const [ageMax, setAgeMax] = useState(40);
  const [denom, setDenom] = useState("Any");
  const [location, setLocation] = useState("");

  const current = profiles[active % profiles.length];

  return (
    <main className="desktopShell">
      <header className="topbar">
        <div className="brand">
          <div className="logo" />
          <div>
            <h1 style={{ margin: 0 }}>Singles</h1>
            <div className="small">Desktop experience · Hybrid discovery</div>
          </div>
        </div>
        <div className="navRow">
          <Link className="badge" href="/">Home</Link>
          <span className="badge">MVP (mock data)</span>
        </div>
      </header>

      <div className="layout3">
        {/* Left: Filters */}
        <aside className="card">
          <div className="panelTitle">Discovery settings</div>

          <div className="field">
            <div className="label">Mode</div>
            <select className="select" value={mode} onChange={(e) => setMode(e.target.value as any)}>
              <option value="hybrid">Hybrid (recommended)</option>
              <option value="swipe">Swipe only</option>
              <option value="search">Search only</option>
            </select>
          </div>

          <div className="field">
            <div className="label">Age range</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <input className="input" type="number" value={ageMin} onChange={(e) => setAgeMin(Number(e.target.value))} />
              <input className="input" type="number" value={ageMax} onChange={(e) => setAgeMax(Number(e.target.value))} />
            </div>
            <div className="small">Default focus: 28–40</div>
          </div>

          <div className="field">
            <div className="label">Denomination</div>
            <select className="select" value={denom} onChange={(e) => setDenom(e.target.value)}>
              <option>Any</option>
              <option>Orthodox</option>
              <option>Modern Orthodox</option>
              <option>Conservative</option>
              <option>Reform</option>
              <option>Other</option>
            </select>
          </div>

          <div className="field">
            <div className="label">Location</div>
            <input className="input" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="City, State / Country" />
          </div>

          <div className="pillRow">
            <span className="pill">Marriage only</span>
            <span className="pill">Modest profiles</span>
          </div>

          <div className="footer" style={{ marginTop: 12 }}>
            Filters are visual now — we’ll wire them to real profiles after login/database.
          </div>
        </aside>

        {/* Center: Profiles */}
        <section className="card">
          <div className="panelTitle">Browse profiles</div>

          <div className="gridCards">
            {profiles.map((p, idx) => (
              <button
                key={p.name}
                className="profileMini"
                onClick={() => setActive(idx)}
                style={{
                  textAlign: "left",
                  outline: idx === active ? "2px solid rgba(21,18,13,.25)" : "none",
                }}
              >
                <h3>{p.name}</h3>
                <p>{p.age} • {p.location}</p>
                <p style={{ marginTop: 10 }}>{p.denomination}</p>
                <p style={{ marginTop: 10 }}>{p.headline}</p>
              </button>
            ))}
          </div>
        </section>

        {/* Right: Selected + actions */}
        <aside className="card">
          <div className="panelTitle">Selected</div>

          <h2 style={{ margin: "4px 0 0" }}>{current.name}</h2>
          <div className="small" style={{ marginTop: 6 }}>
            {current.age} • {current.location}
          </div>

          <div className="pillRow">
            <span className="pill">{current.denomination}</span>
            <span className="pill">Marriage intent</span>
          </div>

          <p className="subtitle" style={{ marginTop: 12 }}>
            {current.headline}
          </p>

          <div className="rowButtons">
            <button className="btn btnGhost">Pass</button>
            <button className="btn btnPrimary">Like</button>
          </div>

          <div className="footer" style={{ marginTop: 12 }}>
            Chat appears after a mutual match (we’ll add this once logins exist).
          </div>
        </aside>
      </div>
    </main>
  );
}
