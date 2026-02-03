import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600"],
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function Home() {
  return (
    <main className={`wrap ${sans.className}`}>
      <header className="header">
        <div className="brand">
          <div className="logoBox">SL</div>
          <div>
            <div className="brandName">ShidduchLink</div>
          </div>
        </div>

        <div className="centerTag">Private matchmaking, built with modesty</div>

        <Link className="signin" href="/signin">
          Sign in <span style={{ opacity: 0.6 }}>⌄</span>
        </Link>
      </header>

      <section className="hero">
        <h1 className={`h1 ${serif.className}`}>
          A refined, privacy-first shidduch platform.
        </h1>

        <p className="lead">
          ShidduchLink is built for serious singles (28–40), professional matchmakers, and family
          advocates. A respectful environment designed to support intentional connections — without
          the noise of modern dating apps.
        </p>

        <div className="cardRow">
          <Link className="card" href="/single">
            <h3 className={`cardTitle ${serif.className}`}>For Singles</h3>
            <div className="cardSub">Browse with filters or guided discovery</div>
            <div className="cardArrow">›</div>
          </Link>

          <Link className="card" href="/matchmaker">
            <h3 className={`cardTitle ${serif.className}`}>For Matchmakers</h3>
            <div className="cardSub">Manage rosters, resumes, and referrals</div>
            <div className="cardArrow">›</div>
          </Link>

          <Link className="card" href="/advocate">
            <h3 className={`cardTitle ${serif.className}`}>For Parents &amp; Siblings</h3>
            <div className="cardSub">Advocate and connect through matchmakers</div>
            <div className="cardArrow">›</div>
          </Link>
        </div>

        {/* Optional line like the generated mock.
           If you want to remove these items, delete this block. */}
        <div className="bottomLine">
          <span>Privacy-first</span>
          <span>•</span>
          <span>Mutual match required to connect</span>
          <span>•</span>
          <span>Matchmaker-led access available</span>
        </div>
      </section>
    </main>
  );
}
