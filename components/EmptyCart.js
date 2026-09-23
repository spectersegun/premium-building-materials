import Link from 'next/link';
import { Frame, BpButton } from './Blueprint';

export default function EmptyCart({ heading, body, cta, surface, uppercase }) {
  return (
    <div style={{ maxWidth: 1220, margin: '0 auto', padding: '60px 24px 80px' }}>
      <Frame style={{ padding: '44px 32px', textAlign: 'center', background: surface }}>
        <h2 style={{ fontSize: 26, margin: '0 0 10px', textTransform: uppercase ? 'uppercase' : undefined }}>{heading}</h2>
        <p className="text-muted" style={{ fontSize: 15, margin: '0 0 22px' }}>{body}</p>
        <Link href={cta.href}><BpButton primary style={{ padding: '11px 22px' }}>{cta.label}</BpButton></Link>
      </Frame>
    </div>
  );
}
