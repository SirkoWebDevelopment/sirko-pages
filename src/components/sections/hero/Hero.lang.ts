import type { LanguageName } from '../../../lang/language'

export type HeroTranslations = {
  kicker: string
  headlineLine1: string
  headlineLine2Prefix: string
  headlineEmphasis: string
  tagline: string
  ctaPrimary: string
  ctaSecondary: string
  heroPhotoAlt: string
  spotlightPhotoAlt: string
  badgeLabel: string
  badgeName: string
}

export const HERO_TRANSLATIONS: Record<LanguageName, HeroTranslations> = {
  en: {
    kicker: 'A non-profit web studio',
    headlineLine1: 'Honest websites for the',
    headlineLine2Prefix: 'non‑profits doing the',
    headlineEmphasis: 'real work',
    tagline: "Free & straightforward websites for the non‑profits and small businesses who can't afford one — just like us.",
    ctaPrimary: 'Get a free website',
    ctaSecondary: 'See our work',
    heroPhotoAlt: 'Sirko the corgi smiling in the grass',
    spotlightPhotoAlt: 'Sirko the corgi',
    badgeLabel: 'Chief Morale Officer',
    badgeName: 'Sirko 🐾', // proper noun
  },
  uk: {
    kicker: 'Некомерційна веб-студія',
    headlineLine1: 'Чесні сайти для',
    headlineLine2Prefix: 'організацій, які виконують',
    headlineEmphasis: 'справжню роботу',
    tagline: 'Безкоштовні та прості сайти для неприбуткових організацій і малого бізнесу, які не можуть собі це дозволити — як і ми колись.',
    ctaPrimary: 'Отримати безкоштовний сайт',
    ctaSecondary: 'Переглянути наші роботи',
    heroPhotoAlt: 'Сірко-коргі посміхається на траві',
    spotlightPhotoAlt: 'Сірко-коргі',
    badgeLabel: 'Директор з гарного настрою',
    badgeName: 'Сірко 🐾', // proper noun
  },
  ro: {
    kicker: 'Un studio web non-profit',
    headlineLine1: 'Site-uri oneste pentru',
    headlineLine2Prefix: 'ONG-urile care fac',
    headlineEmphasis: 'munca adevărată',
    tagline: 'Site-uri gratuite și simple pentru ONG-uri și afaceri mici care nu-și permit unul — la fel ca noi.',
    ctaPrimary: 'Primește un site gratuit',
    ctaSecondary: 'Vezi munca noastră',
    heroPhotoAlt: 'Sirko, corgi-ul, zâmbind în iarbă',
    spotlightPhotoAlt: 'Sirko, corgi-ul',
    badgeLabel: 'Director de bună dispoziție',
    badgeName: 'Sirko 🐾', // proper noun
  },
}
