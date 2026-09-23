import { CONTACT } from '../lib/data';
import { Frame } from './Blueprint';

const lbl = { fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 3 };

export default function ContactPanel({ uppercase }) {
  return (
    <Frame style={{ padding: '26px 24px', background: 'var(--color-surface)' }}>
      <h3 style={{ fontSize: 20, margin: '0 0 16px', textTransform: uppercase ? 'uppercase' : undefined }}>Reach us</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 14 }}>
        <div><div className="text-muted" style={lbl}>Address</div>{CONTACT.address}</div>
        <div><div className="text-muted" style={lbl}>Email</div>
          <a href={'mailto:' + CONTACT.emails[0]}>{CONTACT.emails[0]}</a><br />
          <a href={'mailto:' + CONTACT.emails[1]}>{CONTACT.emails[1]}</a>
        </div>
        <div><div className="text-muted" style={lbl}>Phone</div>{CONTACT.phones[0]}<br />{CONTACT.phones[1]}</div>
        <div><div className="text-muted" style={lbl}>Online</div>
          <a href={'https://' + CONTACT.site} target="_blank" rel="noreferrer">{CONTACT.site}</a>
          {' · '}
          <a href={'https://instagram.com/' + CONTACT.instagram} target="_blank" rel="noreferrer">@{CONTACT.instagram}</a>
        </div>
      </div>
    </Frame>
  );
}
