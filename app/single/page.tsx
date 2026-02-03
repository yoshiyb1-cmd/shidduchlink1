import Link from "next/link";

export default function Single() {
  return (
    <main className="desktopShell">
      <header className="topbar">
        <div className="brand">
          <div className="logo" />
          <div>
            <h1 style={{ margin: 0 }}>Singles</h1>
            <div className="small">Choose desktop experience</div>
          </div>
        </div>
        <Link className="badge" href="/">Home</Link>
      </header>

      <section className="card">
        <h2 className="title" style={{ fontSize: 30 }}>Start browsing</h2>
        <p className="subtitle">
          Desktop-first layout: filters on the left, profiles in the center, and actions on the right.
        </p>
        <Link className="btn btnPrimary" href="/single/desktop">
          <span><strong>Open Singles Desktop</strong><br /><span className="small">Hybrid browse + filters</span></span>
          <span>→</span>
        </Link>
      </section>
    </main>
  );
}
