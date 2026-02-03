import Link from "next/link";

export default function Home() {
  return (
    <main className="wrap">
      <header className="top">
        <div className="brand">
          <div className="mark" />
          <div>
            <div className="brandName">ShidduchLink</div>
            <div className="brandTag">Marriage-focused matchmaking</div>
          </div>
        </div>

        <div className="topPills">
          <span className="pill">Cream • Premium • Modest</span>
          <span className="pill">Male/Female • Marriage only</span>
        </div>
      </header>

      <section className="heroCard">
        <h1 className="heroTitle">A refined, privacy-first shidduch platform.</h1>
        <p className="heroSub">
          Built for singles (28–40), matchmakers, and family advocates. Browse in a respectful,
          marriage-minded environment—designed to feel trustworthy and presentable from day one.
        </p>

        <div className="ctaRow">
          <Link className="cta primary" href="/single/desktop">
            Singles <span className="ctaHint">Browse profiles</span>
          </Link>

          <Link className="cta" href="/matchmaker">
            Matchmakers <span className="ctaHint">Roster • Referrals</span>
          </Link>

          <Link className="cta" href="/advocate">
            Parents / Siblings <span className="ctaHint">Contact • Shared lists</span>
          </Link>
        </div>

        <div className="miniRow">
          <span className="mini">✓ Mutual match required to message</span>
          <span className="mini">✓ Privacy-first access controls</span>
          <span className="mini">✓ Matchmaker-gated access available</span>
        </div>
      </section>
    </main>
  );
}
