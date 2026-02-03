import Link from "next/link";

export default function Home() {
  return (
    <main className="wrap">
      {/* Top navigation */}
      <header className="top">
        <div className="brand">
          <div className="mark" />
          <div>
            <div className="brandName">ShidduchLink</div>
            <div className="brandTag">Marriage-focused matchmaking</div>
          </div>
        </div>

        <nav className="topPills">
          <Link href="#" className="pill">Sign in</Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="heroCard">
        <h1 className="heroTitle">
          A refined, privacy-first shidduch platform.
        </h1>

        <p className="heroSub">
          ShidduchLink is built for serious singles (28–40), professional matchmakers,
          and family advocates. A respectful, marriage-only environment designed to
          support intentional matches — without the noise of modern dating apps.
        </p>

        <div className="ctaRow">
          <Link className="cta primary" href="/single">
            For Singles
            <span className="ctaHint">Browse with filters or guided discovery</span>
          </Link>

          <Link className="cta" href="/matchmaker">
            For Matchmakers
            <span className="ctaHint">Manage rosters, resumes, and referrals</span>
          </Link>

          <Link className="cta" href="/advocate">
            For Parents & Siblings
            <span className="ctaHint">Advocate and connect through matchmakers</span>
          </Link>
        </div>

        <div className="miniRow">
          <span className="mini">Marriage-only</span>
          <span className="mini">Male / Female</span>
          <span className="mini">Mutual match required to connect</span>
          <span className="mini">Matchmaker-led access available</span>
        </div>
      </section>
    </main>
  );
}

