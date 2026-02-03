import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <div className="shell">
        <header className="header">
          <div className="brand">
            <div className="logo" />
            <div>
              <h1>ShidduchLink</h1>
              <div className="small">Marriage-focused matchmaking</div>
            </div>
          </div>
          <div className="badge">MVP</div>
        </header>

        <section className="card">
          <h2 className="title">A modest, premium space for serious shidduchim.</h2>
          <p className="subtitle">
            Built for singles (28–40), matchmakers, and family advocates — with privacy-first access and
            matchmaker-led options.
          </p>

          <div className="grid">
            <Link className="btn btnPrimary" href="/single">
              <span><strong>Single</strong><br /><span className="small">Swipe + search (hybrid)</span></span>
              <span>→</span>
            </Link>

            <Link className="btn" href="/matchmaker">
              <span><strong>Matchmaker</strong><br /><span className="small">Roster • Lists • Referrals</span></span>
              <span>→</span>
            </Link>

            <Link className="btn" href="/advocate">
              <span><strong>Parent / Sibling</strong><br /><span className="small">Contact • View shared lists</span></span>
              <span>→</span>
            </Link>
          </div>

          <div className="pillRow">
            <span className="pill">Male & Female only</span>
            <span className="pill">Marriage only</span>
            <span className="pill">Match required to message</span>
            <span className="pill">Phone verification planned</span>
          </div>
        </section>

        <div className="footer">
          ShidduchLink is in early development. Privacy and safety features will be added before launch.
        </div>
      </div>
    </main>
  );
}
