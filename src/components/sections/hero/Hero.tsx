import type { HeroVariant } from '../../../theme'
import { useLanguage } from '../../../lang/language'
import { Photo } from '../../helpers/Photo'
import { HERO_TRANSLATIONS } from './Hero.lang'
import sirkoHeroWide from '../../../assets/sirko-hero-wide.jpg'
import sirkoRound from '../../../assets/sirko-round.jpg'

export type HeroProps = {
  variant: HeroVariant
}

export const Hero = ({ variant }: HeroProps) => {
  const { language } = useLanguage()
  const t = HERO_TRANSLATIONS[language]

  const kicker = (
    <span className="hero__kicker">
      <span className="hero__kicker-dot" />
      {t.kicker}
    </span>
  )

  const heroCTAs = (
    <div className="hero__ctas">
      <a href="#contact" className="hero__cta hero__cta--primary">
        {t.ctaPrimary}
      </a>
      <a href="#portfolio" className="hero__cta hero__cta--secondary">
        {t.ctaSecondary}
      </a>
    </div>
  )

  const headline = (
    <h1 className="hero__headline">
      {t.headlineLine1}
      <br />
      {t.headlineLine2Prefix} <em className="hero__headline-em">{t.headlineEmphasis}</em>
    </h1>
  )

  const sub = <p className="hero__sub">{t.tagline}</p>

  if (variant === 'split') {
    return (
      <section className="hero hero--split">
        <div className="hero__grid">
          <div>
            {kicker}
            <div className="hero__headline-wrap">{headline}</div>
            {sub}
            {heroCTAs}
          </div>
          <div className="hero__photo-wrap">
            <Photo src={sirkoHeroWide} alt={t.heroPhotoAlt} ratio="4 / 5" radius={24} pos="center 56%" />
            <div className="hero__badge">
              <div className="hero__badge-label">{t.badgeLabel}</div>
              <div className="hero__badge-name">{t.badgeName}</div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (variant === 'spotlight') {
    return (
      <section className="hero hero--spotlight">
        <div className="hero__spotlight-photo">
          <Photo src={sirkoRound} alt={t.spotlightPhotoAlt} round pos="center 36%" />
        </div>
        <div className="hero__kicker-row">
          {kicker}
        </div>
        {headline}
        <div className="hero__center">{sub}</div>
        <div className="hero__center">
          {heroCTAs}
        </div>
      </section>
    )
  }

  return (
    <section className="hero hero--centered">
      <div className="hero__kicker-row">
        {kicker}
      </div>
      {headline}
      <div className="hero__center">{sub}</div>
      <div className="hero__center">
        {heroCTAs}
      </div>
      <div className="hero__photo-block">
        <Photo src={sirkoHeroWide} alt={t.heroPhotoAlt} ratio="16 / 9" radius={24} pos="center 56%" />
      </div>
    </section>
  )
}
