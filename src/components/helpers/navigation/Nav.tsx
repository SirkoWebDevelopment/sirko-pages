import { useEffect, useRef, useState } from 'react'
import { LANGUAGES, LANGUAGE_LABELS, useLanguage } from '../../../lang/language'
import { NAV_TRANSLATIONS } from './Nav.lang'

export const Nav = () => {
  const { language, setLanguage } = useLanguage()
  const t = NAV_TRANSLATIONS[language]
  const [open, setOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return

    const onClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [open])

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__brand">
          <span className="nav__mark">
            <span className="nav__mark-dot">
              <i className="nav__ear nav__ear--left" />
              <i className="nav__ear nav__ear--right" />
            </span>
          </span>
          <span className="nav__name">{t.brand}</span>
        </a>
        <nav className="nav__links">
          <a href="#portfolio" className="navlink">
            {t.portfolioLink}
          </a>
          <a href="#story" className="navlink">
            {t.storyLink}
          </a>
          <a href="#contact" className="navlink navlink--cta">
            {t.ctaLink}
          </a>
          <div ref={langRef} className={`nav__lang${open ? ' nav__lang--open' : ''}`}>
            <button
              type="button"
              className="nav__lang-trigger"
              aria-haspopup="listbox"
              aria-expanded={open}
              aria-label="Language"
              onClick={() => setOpen((v) => !v)}
            >
              {LANGUAGE_LABELS[language]}
              <span className="nav__lang-chevron" aria-hidden="true">
                ▾
              </span>
            </button>
            <div className="nav__lang-menu" role="listbox">
              <span
                className="nav__lang-highlight"
                style={{ transform: `translateY(${LANGUAGES.indexOf(language) * 100}%)` }}
              />
              {LANGUAGES.map((code) => (
                <button
                  key={code}
                  type="button"
                  role="option"
                  aria-selected={language === code}
                  className={`nav__lang-item${language === code ? ' nav__lang-item--active' : ''}`}
                  onClick={() => {
                    setLanguage(code)
                    setOpen(false)
                  }}
                >
                  {LANGUAGE_LABELS[code]}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}
