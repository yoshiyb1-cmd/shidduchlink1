'use client';
import { useState } from 'react';

const profiles = [
  { name: 'Leah', age: 31, location: 'NYC' },
  { name: 'Rivka', age: 29, location: 'NJ' },
  { name: 'Miriam', age: 34, location: 'Jerusalem' }
];

export default function Single() {
  const [i, setI] = useState(0);
  const p = profiles[i % profiles.length];

  return (
    <main className="container">
      <h2>Discover</h2>
      <div className="card">
        <h3>{p.name}</h3>
        <p>{p.age} • {p.location}</p>
        <button className="button" onClick={() => setI(i + 1)}>Pass</button>
        <button className="button" onClick={() => setI(i + 1)}>Like</button>
      </div>
    </main>
  );
}
