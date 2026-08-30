import { SectionHead } from './../../helpers/SectionHead'
import { useLanguage } from '../../../lang/language'
import { WHOWEHELP_TRANSLATIONS } from './WhoWeHelp.lang'

const HELP_META = [{ icon: '♥' }, { icon: '◇' }]

export const WhoWeHelp = () => {
  const { language } = useLanguage()
  const t = WHOWEHELP_TRANSLATIONS[language]
  const items = HELP_META.map((meta, i) => ({ ...meta, ...t.items[i] }))

  return (
    <section className="who-we-help">
      <div className="who-we-help__inner">
        <SectionHead kicker={t.kicker} title={t.title} intro={t.intro} />
        <div className="who-we-help__grid">
          {items.map((h, i) => (
            <div key={i} className="help-card">
              <span className="help-card__icon">{h.icon}</span>
              <div>
                <h3 className="help-card__title">{h.title}</h3>
                <p className="help-card__body">{h.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
