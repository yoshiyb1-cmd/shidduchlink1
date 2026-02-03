import Link from "next/link";

export default function Home() {
  return (
    <main className="desktopShell">
      <header className="topbar">
        <div className="brand">
          <div className="logo" />
          <div>
            <h1 style={{ margin: 0 }}>ShidduchLink</h1>
            <div className="small">Marriage-focused matchmaking (Desktop MVP)</div>
          </div>
        </div>

        <div className="navRow">
          <span className="kbd">Cream · Premium · Modest</span>
          <span className="kbd">Male/Female · Marriage only</span>
        </div>
      </header>

      <section className="card">
        <h2 className="title" style={{ fontSize: 40 }}>
          A refined, privacy-first shidduch platform.
        </h2>
        <p className="subtitle" style={{ maxWidth: 760 }}>
          Built for singles (28–40), matchmakers, and family advocates. Singles can browse in swipe mode
          or search with filters. Advocates contact matchmakers. Matchmakers manage rosters, resumes,
          and referrals.
        </p>

        <div className="grid" style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}>
          <Link className="btn btnPrimary" href="/single/desktop">
            <span>
              <strong>Singles</strong>
              <br />
              <span className="small">Discover · Search · Matches</span>
            </span>
            <span>→</span>
          </Link>

          <Link className="btn" href="/matchmaker">
            <span>
              <strong>Matchmakers</strong>
              <br />
              <span className="small">Roster · Lists · Referrals</span>
            </span>
            <span>→</span>
          </Link>

          <Link className="btn" href="/advocate">
            <span>
              <strong>Parents / Siblings</strong>
              <br />
              <span className="small">Contact · Shared lists</span>
            </span>
            <span>→</span>
          </Link>
        </div>

        <div className="pillRow">
          <span className="pill">Mutual match required to message</span>
          <span className="pill">Phone verification planned</span>
          <span className="pill">Matchmaker-gated access available</span>
        </div>
      </section>

      <div className="footer">
        Next: desktop dating layout (filters + cards + matches panel), then we’ll add real logins & data.
      </div>
    </main>
  );
}

