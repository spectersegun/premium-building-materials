import { PROJECTS } from '../../lib/data';
import { Frame } from '../../components/Blueprint';
import PageHero from '../../components/PageHero';

export default function Projects() {
  return (
    <>
      <PageHero field="var(--color-accent-900)" kicker="On site" title="Completed projects" pad="60px 24px 66px"
                blurb="Doors, windows, kitchens, cabinets, staircases and full building exteriors — supplied and installed." />
      <div style={{ maxWidth: 1220, margin: '0 auto', padding: '56px 24px 76px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
          {PROJECTS.map(p => (
            <Frame key={p.label} style={{ margin: 0 }}>
              <div style={{ position: 'relative', aspectRatio: '1', background: 'var(--color-neutral-200)' }}>
                <img src={p.src} alt={p.label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="text-muted" style={{ fontSize: 12, padding: '10px 12px 12px' }}>{p.label}</div>
            </Frame>
          ))}
        </div>
      </div>
    </>
  );
}
