"use client";
import { useMemo, useState } from "react";
import Link from "next/link";

type Profile = { name: string; age: number; location: string; denom: string };

const seed: Profile[] = [
  { name: "Leah", age: 31, location: "NYC", denom: "Modern Orthodox" },
  { name: "Rivka", age: 29, location: "NJ", denom: "Orthodox" },
  { name: "Miriam", age: 34, location: "Jerusalem", denom: "Orthodox" },
];

export default function Single() {
  const profiles = useMemo(() => seed, []);
  const [i, setI] = useState(0);
  const p = profiles[i % profiles.length];

  return (
    <main className="container">
      <div className="shell">
        <header className="header">
          <div className="brand">
            <div className="logo" />
            <div>
              <h1>Discover</h1>
              <div className="small">Swipe mode (modest)</div>
            </div>
          </div>
          <Link className="badge" href="/">Home</Link>
        </header>

        <div className="stack">
          <div className="profileCard" aria-label="Profile card">
            <div>
              <div className="profileTop">
                <div>
                  <h3 className="name">{p.name}</h3>
                  <p className="meta">{p.age} • {p.location}</p>
                </div>
                <div className="badge">{p.denom}</div>
              </div>

              <div className="pillRow" style={{ marginTop: 14 }}>
                <span className="pill">Marriage only</span>
                <span className="pill">Mutual match to chat</span>
                <span className="pill">28–40 focus</span>
              </div>

              <p className="subtitle" style={{ marginTop: 14 }}>
                This is a visual demo card. Next we’ll connect real accounts, profiles, and filters.
              </p>
            </div>

            <div className="actions">
              <button className="actionBtn" onClick={() => setI(i + 1)}>Pass</button>
              <button className="actionBtn actionBtnPrimary" onClick={() => setI(i + 1)}>Like</button>
            </div>
          </div>
        </div>

        <div className="footer">
          Next: add Search/Filters toggle + real login.
        </div>
      </div>
    </main>
  );
}
