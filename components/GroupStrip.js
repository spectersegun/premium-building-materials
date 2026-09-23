import { SIBLINGS } from '../lib/data';

export default function GroupStrip({ field, accent }) {
  return (
    <div style={{ background: field, color: 'color-mix(in srgb,#fff 62%,transparent)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase' }}>
      <div className="groupstrip" style={{ maxWidth: 1220, margin: '0 auto', padding: '7px 24px', display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <span style={{ color: accent }}>Part of the PREMIUM group</span>
        {SIBLINGS.map(s => (
          <a key={s.name} className="revlink" href={s.url} style={{ fontSize: 11, letterSpacing: '.14em' }}>{s.name}</a>
        ))}
      </div>
    </div>
  );
}
