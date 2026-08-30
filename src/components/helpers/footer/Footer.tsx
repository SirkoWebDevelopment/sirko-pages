import { useLanguage } from '../../../lang/language'
import { FOOTER_TRANSLATIONS } from './Footer.lang'

export const Footer = () => {
  const { language } = useLanguage()
  const t = FOOTER_TRANSLATIONS[language]

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__mark" />
          <span className="footer__name">{t.brand}</span>
        </div>
        <span className="footer__copy">{t.copyright}</span>
      </div>
    </footer>
  )
}
