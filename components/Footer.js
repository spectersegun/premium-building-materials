import Link from 'next/link';
import { CONTACT, TAGLINE, SIBLINGS } from '../lib/data';

export default function Footer({ base, division, blurb, nav, footerBg }) {
  const head = { fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: '#fff', marginBottom: 14 };
  const col = { display: 'flex', flexDirection: 'column', gap: 9, fontSize: 14 };
  return (
    <footer style={{ background: footerBg, color: 'color-mix(in srgb,#fff 78%,transparent)', marginTop: 'auto' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '50px 24px 28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 34 }}>
        <div>
          <Link href={base} style={{ display: 'flex', alignItems: 'center', gap: 11, marginBottom: 14, color: 'inherit' }}>
            <img src="/assets/logo.jpg" alt="Premium logo" style={{ width: 42, height: 42, borderRadius: '50%', objectFit: 'cover' }} />
            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 22, color: '#fff' }}>PREMIUM</span>
              <span style={{ fontSize: 9, letterSpacing: '.3em', color: 'var(--color-accent-300)', textTransform: 'uppercase', marginTop: 3 }}>{division}</span>
            </span>
          </Link>
          <p style={{ fontSize: 13, maxWidth: '34ch', margin: '0 0 12px' }}>{blurb}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--color-accent-300)' }}>
            {TAGLINE.map((t, i) => <span key={t}>{t}{i < TAGLINE.length - 1 ? ' ·' : ''}</span>)}
          </div>
        </div>
        <div>
          <div style={head}>Navigate</div>
          <div style={col}>{nav.map(n => <Link key={n.href} className="revlink" href={n.href}>{n.label}</Link>)}</div>
        </div>
        <div>
          <div style={head}>PREMIUM group</div>
          <div style={col}>
            {SIBLINGS.map(s => <a key={s.name} className="revlink" href={s.url}>{s.name}</a>)}
            <a className="revlink" href={'https://instagram.com/' + CONTACT.instagram} target="_blank" rel="noreferrer">@{CONTACT.instagram}</a>
          </div>
        </div>
        <div>
          <div style={head}>Contact</div>
          <div style={{ ...col, fontSize: 13 }}>
            <span>{CONTACT.address}</span>
            <a className="revlink" href={'mailto:' + CONTACT.emails[0]}>{CONTACT.emails[0]}</a>
            <span>0909-773-6486 · 0809-773-6486</span>
            <a className="revlink" href={'https://' + CONTACT.site} target="_blank" rel="noreferrer">{CONTACT.site}</a>
          </div>
        </div>
      </div>
      <div style={{ borderTop: '1px solid color-mix(in srgb,#fff 12%,transparent)' }}>
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '16px 24px', fontSize: 12, color: 'color-mix(in srgb,#fff 50%,transparent)' }}>
          © 2026 Premier HQ Limited · PREMIUM {division}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
