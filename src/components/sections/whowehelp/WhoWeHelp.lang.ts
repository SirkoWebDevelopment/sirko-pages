import type { LanguageName } from '../../../lang/language'

export type WhoWeHelpTranslations = {
  kicker: string
  title: string
  intro: string
  items: { title: string; body: string }[]
}

export const WHOWEHELP_TRANSLATIONS: Record<LanguageName, WhoWeHelpTranslations> = {
  en: {
    kicker: 'Who we help',
    title: "A good website shouldn't be a luxury.",
    intro: "We work with the people who'd benefit most from being online — and can least afford it.",
    items: [
      {
        title: 'Non‑profits & community groups',
        body: "Food banks, shelters, rescues, youth programs — the people doing good who shouldn't have to choose between a website and their mission.",
      },
      {
        title: 'Small businesses on a tight budget',
        body: "The corner shop, the new freelancer, the family café. If a professional site is out of reach right now, that's exactly who we're here for.",
      },
    ],
  },
  uk: {
    kicker: 'Кому ми допомагаємо',
    title: 'Хороший сайт не повинен бути розкішшю.',
    intro: 'Ми працюємо з тими, кому присутність в інтернеті потрібна найбільше — і хто найменше може собі це дозволити.',
    items: [
      {
        title: 'Неприбуткові організації та спільноти',
        body: 'Продовольчі банки, притулки, центри порятунку тварин, молодіжні програми — люди, які роблять добру справу і не повинні обирати між сайтом і своєю місією.',
      },
      {
        title: 'Малий бізнес з обмеженим бюджетом',
        body: 'Магазинчик за рогом, новий фрилансер, сімейне кафе. Якщо професійний сайт зараз не по кишені — це саме ті, кому ми готові допомогти.',
      },
    ],
  },
  ro: {
    kicker: 'Pe cine ajutăm',
    title: 'Un site bun nu ar trebui să fie un lux.',
    intro: 'Lucrăm cu cei care ar avea cel mai mult de câștigat fiind online — și care își permit cel mai puțin acest lucru.',
    items: [
      {
        title: 'ONG-uri și grupuri comunitare',
        body: 'Bănci de alimente, adăposturi, centre de salvare a animalelor, programe pentru tineret — oamenii care fac bine și nu ar trebui să aleagă între un site și misiunea lor.',
      },
      {
        title: 'Afaceri mici cu buget redus',
        body: 'Magazinul de la colț, noul freelancer, cafeneaua de familie. Dacă un site profesionist nu e la îndemână acum, exact pentru ei suntem aici.',
      },
    ],
  },
}
