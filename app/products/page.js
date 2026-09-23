'use client';
import { BUILD_CATS } from '../../lib/data';
import { useCart } from '../../lib/cart';
import { Frame, BpButton } from '../../components/Blueprint';
import PageHero from '../../components/PageHero';

export default function Products() {
  const { add } = useCart();
  return (
    <>
      <PageHero field="var(--color-accent-900)" kicker="Product portfolio" title="Eleven categories" pad="60px 24px 66px"
                blurb="Everything specified, sourced and shipped to order. Tell us the drawing and the quantity — we handle the rest." />
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '60px 24px 76px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 20 }}>
          {BUILD_CATS.map(c => (
            <Frame key={c.name} className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ position: 'relative', aspectRatio: '16/10', background: 'var(--color-neutral-200)' }}>
                {c.src && <img src={c.src} alt={c.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
              </div>
              <div style={{ padding: '16px 18px 20px', display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
                <div className="card-title" style={{ fontSize: 19 }}>{c.name}</div>
                <p className="card-body" style={{ margin: 0, fontSize: 13, opacity: .75 }}>{c.desc}</p>
                <BpButton primary onClick={() => add(c.name)} style={{ padding: '8px 16px', fontSize: 13, marginTop: 2 }}>Add to quote</BpButton>
              </div>
            </Frame>
          ))}
        </div>
      </div>
    </>
  );
}
