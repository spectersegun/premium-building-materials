'use client';
import Link from 'next/link';
import { BUILD_CATS, COUNTRIES } from '../lib/data';
import HeroCarousel from '../components/HeroCarousel';
import { Frame, BpButton } from '../components/Blueprint';

const STATS = [
  { num: '15+', label: 'Completed projects' },
  { num: '11', label: 'Product categories' },
  { num: '3', label: 'Sourcing regions' },
  { num: '100%', label: 'Made to order' },
];

const SLIDES = [
  { src: '/assets/brochure/build-hero.jpg', label: 'Finished interior' },
  { src: '/assets/brochure/hero-house.jpg', label: 'Completed building' },
  { src: '/assets/brochure/bc-shower.jpg', label: 'Shower and bath cabin' },
  { src: '/assets/brochure/bc-cabinets.jpg', label: 'Fitted kitchen' },
];

const FEATURED = [1, 2, 3, 4, 6, 7].map(i => BUILD_CATS[i]);

export default function BuildHome() {
  return (
    <>
      <div style={{ background: 'var(--color-accent-900)', color: '#fff' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '82px 24px 90px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 52, alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: '1px solid color-mix(in srgb,#fff 26%,transparent)', padding: '5px 12px', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--color-accent-300)', marginBottom: 28 }}>
              <span style={{ width: 6, height: 6, background: 'var(--color-accent-300)', transform: 'rotate(45deg)' }} />Turkey · China · Europe
            </div>
            <h1 style={{ fontSize: 'clamp(38px,5.6vw,62px)', lineHeight: 1.02, margin: '0 0 22px', color: '#fff' }}>
              Finishes that<br />make a building<br />feel finished.
            </h1>
            <p style={{ fontSize: 18, maxWidth: '38ch', color: 'color-mix(in srgb,#fff 80%,transparent)', margin: '0 0 30px' }}>
              Custom and à-la-carte imported building materials for construction firms, contractors, architects and developers — made to order, delivered direct to site.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/products"><BpButton primary style={{ fontSize: 15, padding: '12px 22px' }}>View products</BpButton></Link>
              <Link href="/projects"><BpButton style={{ fontSize: 15, padding: '12px 22px', color: '#fff', borderColor: 'color-mix(in srgb,#fff 34%,transparent)' }}>See completed projects</BpButton></Link>
            </div>
          </div>
          <HeroCarousel slides={SLIDES} ratio="4/5" minHeight={340} interval={3800} />
        </div>
      </div>

      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '76px 24px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 34 }}>
          <div>
            <div className="card-kicker" style={{ fontSize: 12 }}>Product portfolio</div>
            <h2 style={{ fontSize: 38, margin: '6px 0 0' }}>What we supply</h2>
          </div>
          <p className="text-muted" style={{ maxWidth: '44ch', margin: 0, fontSize: 15 }}>Eleven categories, sourced to specification and delivered to site — from the sanitary ware to the staircase railing.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
          {FEATURED.map(c => (
            <Link key={c.name} href="/products" style={{ color: 'inherit' }}>
              <Frame className="card" style={{ padding: 0, overflow: 'hidden', height: '100%' }}>
                <div style={{ position: 'relative', aspectRatio: '16/10', background: 'var(--color-neutral-200)' }}>
                  {c.src && <img src={c.src} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
                </div>
                <div style={{ padding: '16px 18px 20px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div className="card-title" style={{ fontSize: 19 }}>{c.name}</div>
                  <p className="card-body" style={{ margin: 0, fontSize: 13, opacity: .75 }}>{c.desc}</p>
                </div>
              </Frame>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 26 }}>
          <Link href="/products"><BpButton style={{ padding: '11px 20px' }}>See all 11 categories</BpButton></Link>
        </div>
      </div>

      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '60px 24px' }}>
        <Frame style={{ background: 'var(--color-surface)', padding: '38px 30px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))' }}>
          {STATS.map(s => (
            <div key={s.label} style={{ padding: '6px 20px', borderLeft: '1px solid var(--color-divider)' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 44, lineHeight: 1, color: 'var(--color-accent-800)' }}>{s.num}</div>
              <div className="text-muted" style={{ fontSize: 13, marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </Frame>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', marginTop: 28 }}>
          <span style={{ fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--color-accent-700)' }}>Sourced from</span>
          {COUNTRIES.map(c => <span key={c.name} className="tag tag-outline" style={{ fontSize: 12, padding: '5px 14px' }}>{c.name}</span>)}
        </div>
      </div>
    </>
  );
}
