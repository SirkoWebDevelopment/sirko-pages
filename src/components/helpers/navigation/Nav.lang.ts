import type { LanguageName } from '../../../lang/language'

export type NavTranslations = {
  brand: string
  portfolioLink: string
  storyLink: string
  ctaLink: string
}

export const NAV_TRANSLATIONS: Record<LanguageName, NavTranslations> = {
  en: {
    brand: 'Sirko Dev Studio', // proper noun
    portfolioLink: 'Portfolio',
    storyLink: 'Our Story',
    ctaLink: 'Start a project',
  },
  uk: {
    brand: 'Sirko Dev Studio', // proper noun
    portfolioLink: 'Портфоліо',
    storyLink: 'Наша історія',
    ctaLink: 'Почати проєкт',
  },
  ro: {
    brand: 'Sirko Dev Studio', // proper noun
    portfolioLink: 'Portofoliu',
    storyLink: 'Povestea noastră',
    ctaLink: 'Începe un proiect',
  },
}
