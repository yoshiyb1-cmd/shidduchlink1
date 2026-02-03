import Link from "next/link";

export default function Home() {
  return (
    <main className="wrap">
      <header className="top">
        <div className="brand">
          <div className="mark">SL</div>
          <div>
            <div className="brandName">ShidduchLink</div>
            <div className="brandTag">Private matchmaking, built with modesty</div>
          </div>
        </div>

        <div className="topRight">
          <span className="pill">Cream • Premium • Modest</span>
          <Link className="signin" href="/signin">Sign in</Link>
        </div>
      </header>

      <section className="heroCard">
        <h1 className="heroTitle">A refined, privacy-first shidduch platform.</h1>

        <p className="heroSub">
          ShidduchLink is built for serious singles (28–40), professional matchmakers,
          and family advocates. A respectful environment designed to support intentional
          connections — without the noise of modern dating apps.
        </p>

        {/* NOTE: removed “Marriage-only” and “Male/Female” bullets */}
        <div className="subRow">
          <span>Privacy-first</span>
          <span className="dot">Mutual match required to connect</span>
          <span className="dot">Matchmaker-led access available</span>
        </div>

        <div className="ctaRow">
          <Link className="cardBtn cardBtnDark" href="/single">
            <div className="cardTitle">For Singles</div>
            <div className="cardSub">Browse with filters or guided discovery</div>
            <div className="cardAction">
              <span className="actionPill">For Singles</span>
              <span className="arrow">›</span>
            </div>
          </Link>

          <Link className="cardBtn" href="/matchmaker">
            <div className="cardTitle">For Matchmakers</div>
            <div className="cardSub">Manage rosters, resumes, and referrals</div>
            <div className="cardAction">
              <span className="actionPill">For Matchmakers</span>
              <span className="arrow">›</span>
            </div>
          </Link>

          <Link className="cardBtn" href="/advocate">
            <div className="cardTitle">For Parents &amp; Siblings</div>
            <div className="cardSub">Advocate and connect through matchmakers</div>
            <div className="cardAction">
              <span className="actionPill">For Parents &amp; Siblings</span>
              <span className="arrow">›</span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}

