import Link from 'next/link';
import { Frame, BpButton } from './Blueprint';

export default function Confirmed({ heading, body, reference, surface, links, uppercase }) {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '90px 24px 110px' }}>
      <Frame style={{ padding: '44px 36px', background: surface }}>
        <span className="tag tag-accent">Request received</span>
        <h1 style={{ fontSize: 36, margin: '18px 0 12px', textTransform: uppercase ? 'uppercase' : undefined }}>{heading}</h1>
        <p style={{ fontSize: 16, opacity: .85, margin: '0 0 20px' }}>{body}</p>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, padding: '16px 0', borderTop: '1px solid var(--color-divider)', borderBottom: '1px solid var(--color-divider)', marginBottom: 24 }}>
          <span className="text-muted" style={{ fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase' }}>Reference</span>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 26, color: 'var(--color-accent-700)' }}>{reference}</span>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          {links.map((l, i) => (
            <Link key={l.href} href={l.href}><BpButton primary={i === 0} style={{ padding: '11px 20px' }}>{l.label}</BpButton></Link>
          ))}
        </div>
      </Frame>
    </div>
  );
}
