import { SectionHead } from '../../helpers/SectionHead'
import { Placeholder } from '../../helpers/Placeholder'
import { useLanguage } from '../../../lang/language'
import { PORTFOLIO_TRANSLATIONS } from './Portfolio.lang'
import korshakLogo from '../../../assets/korshak-logo.png'

const PROJECTS_META = [
  { url: 'https://uzd-rivne-korshak.rv.ua/', logo: korshakLogo },
  { url: '#top' },
]

export const Portfolio = () => {
  const { language } = useLanguage()
  const t = PORTFOLIO_TRANSLATIONS[language]
  const projects = PROJECTS_META.map((meta, i) => ({ ...meta, ...t.projects[i] }))

  return (
    <section id="portfolio" className="portfolio">
      <SectionHead kicker={t.kicker} title={t.title} intro={t.intro} />
      <div className="portfolio__grid">
        {projects.map((p, i) => (
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
                {t.viewCaseLabel} <span className="project-card__arrow">→</span>
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
            <div className="project-card__tag">{t.comingSoonTag}</div>
            <h3 className="project-card__name">{t.comingSoonTitle}</h3>
            <p className="project-card__blurb">{t.comingSoonBlurb}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
