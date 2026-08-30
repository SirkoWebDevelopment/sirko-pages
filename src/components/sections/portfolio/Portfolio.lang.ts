import type { LanguageName } from '../../../lang/language'

export type PortfolioTranslations = {
  kicker: string
  title: string
  intro: string
  viewCaseLabel: string
  projects: { name: string; tag: string; blurb: string }[]
  comingSoonTag: string
  comingSoonTitle: string
  comingSoonBlurb: string
}

export const PORTFOLIO_TRANSLATIONS: Record<LanguageName, PortfolioTranslations> = {
  en: {
    kicker: 'Portfolio',
    title: "Sites we've built, given freely.",
    intro: "A few of the non-profits and small businesses we've helped get online. Every site is fast, accessible, and theirs to keep.",
    viewCaseLabel: 'View case',
    projects: [
      {
        name: 'Dr. Korshak Ultrasound Diagnostics', // proper noun
        tag: 'Healthcare · 2025',
        blurb: 'A clear, trustworthy site for a solo ultrasound practice in Rivne, so patients can find services and get in touch at a glance.',
      },
      {
        name: 'Sirko Dev Studio', // proper noun
        tag: 'Our own site · 2026',
        blurb: "This very site — designed and built freely, to show what's possible on a non-profit budget.",
      },
    ],
    comingSoonTag: 'Coming soon',
    comingSoonTitle: 'More projects on the way',
    comingSoonBlurb: "We're just getting started — new non-profits and small businesses will land here as we go.",
  },
  uk: {
    kicker: 'Портфоліо',
    title: 'Сайти, які ми створили безкоштовно.',
    intro: "Кілька неприбуткових організацій і малих підприємств, яким ми допомогли вийти в інтернет. Кожен сайт швидкий, доступний і залишається їхнім назавжди.",
    viewCaseLabel: 'Переглянути кейс',
    projects: [
      {
        name: 'Dr. Korshak Ultrasound Diagnostics', // proper noun
        tag: 'Медицина · 2025',
        blurb: "Зрозумілий і надійний сайт для приватного кабінету УЗД-діагностики в Рівному, щоб пацієнти могли легко знайти послуги та зв'язатися.",
      },
      {
        name: 'Sirko Dev Studio', // proper noun
        tag: 'Наш власний сайт · 2026',
        blurb: 'Це саме той сайт — створений безкоштовно, щоб показати, що можливо навіть з некомерційним бюджетом.',
      },
    ],
    comingSoonTag: 'Скоро',
    comingSoonTitle: 'Більше проєктів попереду',
    comingSoonBlurb: "Ми тільки починаємо — нові неприбуткові організації та малий бізнес з'являтимуться тут згодом.",
  },
  ro: {
    kicker: 'Portofoliu',
    title: 'Site-uri pe care le-am construit, oferite gratuit.',
    intro: 'Câteva dintre ONG-urile și afacerile mici pe care le-am ajutat să ajungă online. Fiecare site e rapid, accesibil și rămâne al lor.',
    viewCaseLabel: 'Vezi studiul de caz',
    projects: [
      {
        name: 'Dr. Korshak Ultrasound Diagnostics', // proper noun
        tag: 'Sănătate · 2025',
        blurb: 'Un site clar și de încredere pentru un cabinet individual de ecografie din Rivne, ca pacienții să găsească rapid serviciile și să ia legătura.',
      },
      {
        name: 'Sirko Dev Studio', // proper noun
        tag: 'Site-ul nostru · 2026',
        blurb: 'Chiar acesta este site-ul — proiectat și construit gratuit, ca să arătăm ce e posibil cu un buget non-profit.',
      },
    ],
    comingSoonTag: 'În curând',
    comingSoonTitle: 'Mai multe proiecte pe drum',
    comingSoonBlurb: 'Abia am început — noi ONG-uri și afaceri mici vor apărea aici pe măsură ce mergem înainte.',
  },
}
