import { SectionHead } from './SectionHead'
import { Placeholder } from './Placeholder'
import korshakLogo from '../assets/korshak-logo.png'

const PROJECTS = [
  {
    name: 'Dr. Korshak Ultrasound Diagnostics',
    tag: 'Healthcare · 2025',
    blurb: 'A clear, trustworthy site for a solo ultrasound practice in Rivne, so patients can find services and get in touch at a glance.',
    url: 'https://uzd-rivne-korshak.rv.ua/',
    logo: korshakLogo,
  },
  {
    name: 'Sirko Dev Studio',
    tag: 'Our own site · 2026',
    blurb: "This very site — designed and built freely, to show what's possible on a non-profit budget.",
    url: '#top',
  },
]

export const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <SectionHead
        kicker="Portfolio"
        title="Sites we've built, given freely."
        intro="A few of the non-profits and small businesses we've helped get online. Every site is fast, accessible, and theirs to keep."
      />
      <div className="portfolio__grid">
        {PROJECTS.map((p, i) => (
          <a key={i} href={p.url ?? '#contact'} target={p.url ? '_blank' : undefined} rel={p.url ? 'noreferrer' : undefined} className="project-card">
            <div className="project-card__thumb">
              {p.logo ? (
                <div className="project-card__logo-tile">
                  <img className="project-card__logo" src={p.logo} alt={p.name} />
                </div>
              ) : (
                <Placeholder label={`project ${i + 1} screenshot`} ratio="16 / 11" radius={12} />
              )}
            </div>
            <div className="project-card__body">
              <div className="project-card__tag">{p.tag}</div>
              <h3 className="project-card__name">{p.name}</h3>
              <p className="project-card__blurb">{p.blurb}</p>
              <span className="project-card__link">
                View case <span className="project-card__arrow">→</span>
              </span>
            </div>
          </a>
        ))}
        <div className="project-card project-card--soon">
          <div className="project-card__thumb">
            <div className="project-card__soon-tile">
              <span className="project-card__soon-plus">+</span>
            </div>
          </div>
          <div className="project-card__body">
            <div className="project-card__tag">Coming soon</div>
            <h3 className="project-card__name">More projects on the way</h3>
            <p className="project-card__blurb">We're just getting started — new non-profits and small businesses will land here as we go.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
