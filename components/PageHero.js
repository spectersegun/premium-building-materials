export default function PageHero({ kicker, title, blurb, field, uppercase, children, pad = '56px 24px 60px' }) {
  return (
    <div style={{ background: field, color: '#fff' }}>
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: pad }}>
        {kicker && <div style={{ fontSize: 12, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--color-accent-300)', marginBottom: 12 }}>{kicker}</div>}
        <h1 style={{ fontSize: 'clamp(34px,5vw,52px)', lineHeight: 1.03, margin: blurb ? '0 0 14px' : 0, color: '#fff', maxWidth: '20ch', textTransform: uppercase ? 'uppercase' : undefined }}>{title}</h1>
        {blurb && <p style={{ fontSize: 16, maxWidth: '56ch', color: 'color-mix(in srgb,#fff 80%,transparent)', margin: 0 }}>{blurb}</p>}
        {children}
      </div>
    </div>
  );
}
