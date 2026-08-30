import type { LanguageName } from '../../../lang/language'

export type FooterTranslations = {
  brand: string
  copyright: string
}

export const FOOTER_TRANSLATIONS: Record<LanguageName, FooterTranslations> = {
  en: {
    brand: 'Sirko Dev Studio', // proper noun
    copyright: '© 2026 · Made with kindness (and a corgi) in mind.',
  },
  uk: {
    brand: 'Sirko Dev Studio', // proper noun
    copyright: '© 2026 · Зроблено з добротою (і корги) в серці.',
  },
  ro: {
    brand: 'Sirko Dev Studio', // proper noun
    copyright: '© 2026 · Făcut cu bunătate (și un corgi) la suflet.',
  },
}
