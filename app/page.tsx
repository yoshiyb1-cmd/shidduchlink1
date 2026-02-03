import Link from 'next/link';
export default function Home() {
  return (
    <main className="container">
      <h1>ShidduchLink</h1>
      <p>Marriage-focused matchmaking</p>
      <Link href="/single"><button className="button">Single</button></Link>
      <Link href="/matchmaker"><button className="button">Matchmaker</button></Link>
      <Link href="/advocate"><button className="button">Parent / Sibling</button></Link>
    </main>
  );
}
