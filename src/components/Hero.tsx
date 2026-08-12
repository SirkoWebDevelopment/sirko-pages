import type { HeroVariant } from '../theme'
import { Photo } from './Photo'
import sirkoHeroWide from '../assets/sirko-hero-wide.jpg'
import sirkoRound from '../assets/sirko-round.jpg'

const Kicker = () => (
  <span className="hero__kicker">
    <span className="hero__kicker-dot" />
    A non-profit web studio
  </span>
)

const HeroCTAs = () => (
  <div className="hero__ctas">
    <a href="#contact" className="hero__cta hero__cta--primary">
      Get a free website
    </a>
    <a href="#portfolio" className="hero__cta hero__cta--secondary">
      See our work
    </a>
  </div>
)

export type HeroProps = {
  variant: HeroVariant
  tagline: string
}

export const Hero = ({ variant, tagline }: HeroProps) => {
  const headline = (
    <h1 className="hero__headline">
      Honest websites for the
      <br />
      non‑profits doing the <em className="hero__headline-em">real work</em>
    </h1>
  )

  const sub = <p className="hero__sub">{tagline}</p>

  if (variant === 'split') {
    return (
      <section className="hero hero--split">
        <div className="hero__grid">
          <div>
            <Kicker />
            <div className="hero__headline-wrap">{headline}</div>
            {sub}
            <HeroCTAs />
          </div>
          <div className="hero__photo-wrap">
            <Photo src={sirkoHeroWide} alt="Sirko the corgi smiling in the grass" ratio="4 / 5" radius={24} pos="center 56%" />
            <div className="hero__badge">
              <div className="hero__badge-label">Chief Morale Officer</div>
              <div className="hero__badge-name">Sirko 🐾</div>
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
          <Photo src={sirkoRound} alt="Sirko the corgi" round pos="center 36%" />
        </div>
        <div className="hero__kicker-row">
          <Kicker />
        </div>
        {headline}
        <div className="hero__center">{sub}</div>
        <div className="hero__center">
          <HeroCTAs />
        </div>
      </section>
    )
  }

  return (
    <section className="hero hero--centered">
      <div className="hero__kicker-row">
        <Kicker />
      </div>
      {headline}
      <div className="hero__center">{sub}</div>
      <div className="hero__center">
        <HeroCTAs />
      </div>
      <div className="hero__photo-block">
        <Photo src={sirkoHeroWide} alt="Sirko the corgi smiling in the grass" ratio="16 / 9" radius={24} pos="center 56%" />
      </div>
    </section>
  )
}
