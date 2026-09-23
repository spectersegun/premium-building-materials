'use client';
import { useRouter } from 'next/navigation';
import { useCart } from '../lib/cart';
import { BpButton } from './Blueprint';

export default function CartDrawer({ title, emptyText, totalLabel, totalValue, checkoutHref, scrim, showCodes }) {
  const { items, count, bump, open, setOpen } = useCart();
  const router = useRouter();
  if (!open) return null;

  const goCheckout = () => { setOpen(false); router.push(checkoutHref); };

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 90, display: 'flex', justifyContent: 'flex-end' }}>
      <div onClick={() => setOpen(false)} style={{ position: 'absolute', inset: 0, background: scrim }} />
      <aside style={{ position: 'relative', width: 'min(400px,100%)', height: '100%', background: 'var(--color-bg)', borderLeft: '2px solid var(--color-accent)', display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid var(--color-divider)' }}>
          <h2 style={{ fontSize: 20, margin: 0 }}>{title}</h2>
          <button className="btn btn-ghost" onClick={() => setOpen(false)} style={{ padding: '4px 10px', fontSize: 18 }}>×</button>
        </div>

        {count === 0 ? (
          <p className="text-muted" style={{ padding: '28px 24px', fontSize: 15, margin: 0 }}>{emptyText}</p>
        ) : (
          <>
            <div style={{ padding: '8px 24px', display: 'flex', flexDirection: 'column' }}>
              {items.map(x => (
                <div key={x.name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '16px 0', borderBottom: '1px solid var(--color-divider)' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {showCodes && x.code && <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 11, letterSpacing: '.18em', color: 'var(--color-accent)' }}>{x.code}</div>}
                    <div style={{ fontSize: 14, marginTop: showCodes && x.code ? 3 : 0 }}>{x.name}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <button className="btn btn-ghost" onClick={() => bump(x.name, -1)} style={{ padding: '2px 8px' }}>−</button>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, minWidth: 16, textAlign: 'center' }}>{x.qty}</span>
                    <button className="btn btn-ghost" onClick={() => bump(x.name, 1)} style={{ padding: '2px 8px' }}>+</button>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 'auto', padding: '20px 24px', borderTop: '1px solid var(--color-divider)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ fontSize: 13, letterSpacing: '.12em', textTransform: 'uppercase' }}>{totalLabel}</span>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 22, color: 'var(--color-accent-700)' }}>{totalValue ?? count}</span>
              </div>
              <BpButton primary onClick={goCheckout} style={{ padding: 12, width: '100%' }}>Proceed to checkout</BpButton>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
