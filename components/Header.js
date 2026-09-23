'use client';
import Link from 'next/link';
import { useCart } from '../lib/cart';
import { BpButton } from './Blueprint';

export default function Header({ base, division, nav, cartLabel, cta, uppercase }) {
  const { count, setOpen } = useCart();
  const linkStyle = {
    fontSize: uppercase ? 13 : 14,
    fontFamily: 'var(--font-heading)',
    fontWeight: 600,
    letterSpacing: uppercase ? '.06em' : undefined,
    textTransform: uppercase ? 'uppercase' : undefined,
    color: 'var(--color-text)',
  };
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'color-mix(in srgb,var(--color-bg) 93%,transparent)', backdropFilter: 'blur(8px)', borderBottom: uppercase ? '2px solid var(--color-accent)' : '1px solid var(--color-divider)' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 22, padding: '12px 24px', flexWrap: 'wrap' }}>
        <Link href={base} style={{ display: 'flex', alignItems: 'center', gap: 11, marginRight: 'auto', color: 'inherit' }}>
          <img src="/assets/logo.jpg" alt="Premium logo" style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover' }} />
          <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 21, letterSpacing: '.02em' }}>PREMIUM</span>
            <span style={{ fontSize: 9, letterSpacing: '.3em', color: 'var(--color-accent)', textTransform: 'uppercase', marginTop: 3, whiteSpace: 'nowrap' }}>{division}</span>
          </span>
        </Link>
        <nav style={{ display: 'flex', alignItems: 'center', gap: uppercase ? 20 : 22, flexWrap: 'wrap' }}>
          {nav.map(n => <Link key={n.href} href={n.href} style={linkStyle}>{n.label}</Link>)}
          <BpButton onClick={() => setOpen(true)} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {cartLabel}
            <span style={{ minWidth: 20, height: 20, padding: '0 5px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-accent)', color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 12 }}>{count}</span>
          </BpButton>
          <Link href={cta.href}><BpButton primary>{cta.label}</BpButton></Link>
        </nav>
      </div>
    </header>
  );
}
