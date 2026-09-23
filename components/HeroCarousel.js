'use client';
import { useEffect, useState } from 'react';
import { Corners } from './Blueprint';

export default function HeroCarousel({ slides, interval = 3400, ratio = '4/3', minHeight = 300 }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI(n => (n + 1) % slides.length), interval);
    return () => clearInterval(t);
  }, [slides.length, interval]);
  return (
    <div className="blueprint" style={{ position: 'relative', aspectRatio: ratio, minHeight, overflow: 'hidden', borderColor: 'color-mix(in srgb,#fff 30%,transparent)' }}>
      <Corners color="#fff" />
      {slides.map((s, n) => (
        <img key={s.src} src={s.src} alt={s.label || ''} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 1.1s ease', opacity: n === i ? 1 : 0 }} />
      ))}
    </div>
  );
}
