import { COUNTRIES } from '../../lib/data';
import { Frame } from '../../components/Blueprint';
import PageHero from '../../components/PageHero';

const VALUES = [
  { title: 'Authentic products', desc: 'Quality validated pre-shipping — what you specified is what arrives.' },
  { title: 'Transparent pricing', desc: 'Clear, competitive pricing with no hidden mark-ups.' },
  { title: 'Made to order', desc: 'Custom and à-la-carte supply, sized and finished to your drawings.' },
  { title: 'Delivered to site', desc: 'Direct-to-site logistics with after-sales support.' },
];

export default function About() {
  return (
    <>
      <PageHero field="var(--color-accent-900)" kicker="About us" pad="64px 24px 70px"
                title="Specified abroad. Delivered to your site."
                blurb="PREMIUM Building Materials is the construction-supply division of Premier HQ Limited — importing quality finishes and fittings from Turkey, China and Europe for Nigeria’s contractors and developers." />

      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '60px 24px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 22 }}>
        <Frame style={{ padding: '30px 28px' }}>
          <span className="tag tag-accent">Mission</span>
          <p style={{ fontSize: 17, margin: '16px 0 0', lineHeight: 1.5 }}>To supply authentic, high-quality imported building materials on specification and on schedule — so projects finish to the standard they were drawn to.</p>
        </Frame>
        <Frame style={{ padding: '30px 28px' }}>
          <span className="tag tag-accent">Vision</span>
          <p style={{ fontSize: 17, margin: '16px 0 0', lineHeight: 1.5 }}>To be the supplier Nigeria’s architects, contractors and developers specify by name for imported finishes and fittings.</p>
        </Frame>
      </div>

      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '44px 24px 20px' }}>
        <div className="card-kicker" style={{ fontSize: 12 }}>Value proposition</div>
        <h2 style={{ fontSize: 32, margin: '6px 0 26px' }}>Why builders choose us</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 18 }}>
          {VALUES.map(v => (
            <Frame key={v.title} style={{ padding: '24px 22px' }}>
              <div style={{ width: 12, height: 12, background: 'var(--color-accent)', transform: 'rotate(45deg)', marginBottom: 16 }} />
              <h3 style={{ fontSize: 19, margin: '0 0 8px' }}>{v.title}</h3>
              <p className="text-muted" style={{ fontSize: 14, margin: 0 }}>{v.desc}</p>
            </Frame>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '44px 24px 76px' }}>
        <div className="card-kicker" style={{ fontSize: 12 }}>Sourcing network</div>
        <h2 style={{ fontSize: 32, margin: '6px 0 26px' }}>Where we source</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 18 }}>
          {COUNTRIES.map(c => (
            <Frame key={c.name} style={{ padding: '24px 22px' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 24, color: 'var(--color-accent-800)' }}>{c.name}</div>
              <p className="text-muted" style={{ fontSize: 14, margin: '8px 0 0' }}>{c.note}</p>
            </Frame>
          ))}
        </div>
      </div>
    </>
  );
}
