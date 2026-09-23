'use client';
import { useState } from 'react';
import { useCart } from '../../lib/cart';
import { submitOrder, makeRef, itemLines } from '../../lib/order';
import PageHero from '../../components/PageHero';
import EmptyCart from '../../components/EmptyCart';
import Confirmed from '../../components/Confirmed';
import { Frame, BpButton } from '../../components/Blueprint';
import { Field, Input, Textarea } from '../../components/Field';

export default function Checkout() {
  const { items, count, bump, remove, clear } = useCart();
  const [ref, setRef] = useState('');

  if (ref) {
    return <Confirmed reference={ref}
      heading="Your quote request is on its way"
      body="Your email client has opened with the full list and project details. Send it and our team responds within one business day with a firm quote and lead time."
      links={[{ href: '/products', label: 'Continue browsing' }, { href: '/', label: 'Back to home' }]} />;
  }

  const onSubmit = e => {
    e.preventDefault();
    const g = n => e.target.elements[n]?.value || '';
    const r = makeRef('BM');
    submitOrder({
      subject: 'Materials quote request ' + r,
      body: 'QUOTE REFERENCE: ' + r + '\n\nCATEGORIES REQUESTED\n' + itemLines(items)
        + '\n\nPROJECT\nProject name: ' + g('project') + '\nSite address: ' + g('site') + '\nTarget date: ' + g('date_')
        + '\n\nCONTACT\nName: ' + g('name_') + '\nCompany: ' + g('company') + '\nEmail: ' + g('email') + '\nPhone: ' + g('phone')
        + '\n\nSPECIFICATION NOTES\n' + g('notes'),
    });
    clear();
    setRef(r);
  };

  return (
    <>
      <PageHero field="var(--color-accent-900)" kicker="Checkout" title="Request your quote" pad="60px 24px 64px"
                blurb="Materials are supplied made-to-order, so every quote is priced to your specification, quantities and site. Send your list and we respond with a firm quote and lead time." />

      {count === 0 ? (
        <EmptyCart heading="Your quote list is empty" body="Add categories from the product portfolio to build a quote."
                   cta={{ href: '/products', label: 'View products' }} />
      ) : (
        <div style={{ maxWidth: 1220, margin: '0 auto', padding: '56px 24px 80px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(310px,1fr))', gap: 36, alignItems: 'start' }}>
          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <h2 style={{ fontSize: 24, margin: '0 0 4px' }}>Project &amp; contact</h2>
            <Field label="Project name"><Input name="project" placeholder="e.g. Lekki Phase 1 duplex" /></Field>
            <Field label="Site address"><Input name="site" required placeholder="Street, city, state" /></Field>
            <Field label="Target delivery date"><Input name="date_" type="date" /></Field>
            <Field label="Name"><Input name="name_" required placeholder="Your name" /></Field>
            <Field label="Company"><Input name="company" placeholder="Firm or development" /></Field>
            <Field label="Email"><Input name="email" type="email" required placeholder="you@company.com" /></Field>
            <Field label="Phone"><Input name="phone" required placeholder="0803 000 0000" /></Field>
            <Field label="Specification notes"><Textarea name="notes" placeholder="Sizes, finishes, quantities, drawings available" /></Field>
            <BpButton primary style={{ padding: '13px 24px', alignSelf: 'flex-start', fontSize: 15 }}>Submit quote request</BpButton>
          </form>

          <Frame style={{ padding: '28px 26px', background: 'var(--color-surface)' }}>
            <h2 style={{ fontSize: 20, margin: '0 0 18px' }}>Quote list</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {items.map(x => (
                <div key={x.name} style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBottom: 14, borderBottom: '1px solid var(--color-divider)' }}>
                  <div style={{ flex: 1, fontSize: 15 }}>{x.name}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <button type="button" className="btn btn-ghost" onClick={() => bump(x.name, -1)} style={{ padding: '2px 9px', fontSize: 15 }}>−</button>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, minWidth: 18, textAlign: 'center' }}>{x.qty}</span>
                    <button type="button" className="btn btn-ghost" onClick={() => bump(x.name, 1)} style={{ padding: '2px 9px', fontSize: 15 }}>+</button>
                  </div>
                  <button type="button" className="btn btn-ghost" onClick={() => remove(x.name)} style={{ padding: '2px 8px', fontSize: 13, color: 'var(--color-accent-700)' }}>Remove</button>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, paddingTop: 16, borderTop: '2px solid var(--color-accent)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 14, letterSpacing: '.1em', textTransform: 'uppercase' }}>Line items</span>
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 30, color: 'var(--color-accent-800)' }}>{count}</span>
            </div>
            <p className="text-muted" style={{ fontSize: 13, margin: '16px 0 0' }}>No payment is taken on this site. We confirm specification and quantities, then issue a firm quote with lead time and payment terms.</p>
          </Frame>
        </div>
      )}
    </>
  );
}
