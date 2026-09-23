'use client';
import { submitOrder } from '../../lib/order';
import PageHero from '../../components/PageHero';
import ContactPanel from '../../components/ContactPanel';
import { Field, Input, Textarea, Select } from '../../components/Field';
import { BpButton } from '../../components/Blueprint';

const CATEGORIES = ['Sanitary wares','Showers & baths','Doors','Locks & hardware','Windows','Plasterboards & POP','Cabinets','Aluminium balustrades','Canopies & awnings','Bathroom accessories','Tiles, marble & granite','Full catalogue'];

export default function Contact() {
  const onSubmit = e => {
    e.preventDefault();
    const g = n => e.target.elements[n]?.value || '';
    submitOrder({
      subject: 'Building Materials enquiry — ' + g('category'),
      body: 'Name: ' + g('name_') + '\nCompany: ' + g('company') + '\nEmail: ' + g('email')
        + '\nCategory: ' + g('category') + '\n\n' + g('message'),
    });
  };
  return (
    <>
      <PageHero field="var(--color-accent-900)" kicker="Contact" title="Send us the spec." pad="60px 24px 64px" />
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '56px 24px 60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 38 }}>
        <div>
          <h2 style={{ fontSize: 26, margin: '0 0 18px' }}>Request a catalogue or quote</h2>
          <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Field label="Name"><Input name="name_" required placeholder="Your name" /></Field>
            <Field label="Company"><Input name="company" placeholder="Firm or development" /></Field>
            <Field label="Email"><Input name="email" type="email" required placeholder="you@company.com" /></Field>
            <Field label="Category of interest"><Select name="category" options={CATEGORIES} /></Field>
            <Field label="Message"><Textarea name="message" placeholder="Quantities, specification, site location and timeline" /></Field>
            <BpButton primary style={{ padding: '12px 22px', alignSelf: 'flex-start' }}>Send enquiry</BpButton>
          </form>
        </div>
        <ContactPanel />
      </div>
    </>
  );
}
