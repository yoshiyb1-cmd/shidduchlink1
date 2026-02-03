import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg">
      <main className="shell">
        <header className="topbar">
          <div className="brand">
            <div className="badge">SL</div>
            <div className="brandname">ShidduchLink</div>
          </div>
          <div className="tagline">Private matchmaking, built with modesty</div>
        </header>

        <section className="hero">
          <h1 className="h1">A refined, privacy-first shidduch platform.</h1>
          <p className="lede">
            ShidduchLink is built for serious singles (28–40), professional matchmakers,
            and family advocates. A respectful environment designed to support
            intentional connections — without the noise of modern dating apps.
          </p>

          <div className="cards">
            <Link href="/single" className="card cardPrimary">
              <h3>For Singles</h3>
              <p>Browse with filters or guided discovery</p>
              <div className="arrow">›</div>
            </Link>

            <Link href="/matchmaker" className="card">
              <h3>For Matchmakers</h3>
              <p>Manage rosters, resumes, and referrals</p>
              <div className="arrow">›</div>
            </Link>

            <Link href="/advocate" className="card">
              <h3>For Parents &amp; Siblings</h3>
              <p>Advocate and connect through matchmakers</p>
              <div className="arrow">›</div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
