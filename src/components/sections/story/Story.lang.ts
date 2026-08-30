import type { LanguageName } from '../../../lang/language'

export type StoryTranslations = {
  photoAlt: string
  badgeText: string
  kicker: string
  title: string
  bio: [string, string, string]
  bylineName: string
  bylineTag: string
}

export const STORY_TRANSLATIONS: Record<LanguageName, StoryTranslations> = {
  en: {
    photoAlt: 'Sirko the corgi napping',
    badgeText: 'he supervises 🐾',
    kicker: 'Why we do this',
    title: 'Kindness is something you practice.',
    bio: [
      "We're a small team of Ukrainian software developers. By day we build software full-time — and on the side, we build websites for non-profits who can't afford one.",
      "We grew up believing kindness isn't just something you talk about; it's something you do. Sirko Dev Studio is how we practice it: real, professional websites, given freely, so the organizations doing good can be found, trusted, and supported — while we keep sharpening our craft.",
      'And yes — Sirko is part of the team. He sits in on every project review.',
    ],
    bylineName: 'Sirko Dev Studio', // proper noun
    bylineTag: 'A small team · One corgi · Many good causes',
  },
  uk: {
    photoAlt: 'Сірко-коргі спить',
    badgeText: 'він наглядає 🐾',
    kicker: 'Чому ми це робимо',
    title: 'Доброта — це те, що практикують.',
    bio: [
      'Ми — невелика команда українських розробників програмного забезпечення. Вдень ми повний робочий день створюємо софт, а у вільний час — сайти для неприбуткових організацій, які не можуть собі це дозволити.',
      'Ми виросли з переконанням, що доброта — це не просто слова, а дії. Sirko Dev Studio — це те, як ми це практикуємо: справжні, професійні сайти, віддані безкоштовно, щоб організації, які роблять добро, могли бути знайдені, отримати довіру та підтримку — а ми тим часом вдосконалюємо свою майстерність.',
      'І так — Сірко теж частина команди. Він бере участь у кожному перегляді проєкту.',
    ],
    bylineName: 'Sirko Dev Studio', // proper noun
    bylineTag: 'Невелика команда · Один коргі · Багато добрих справ',
  },
  ro: {
    photoAlt: 'Sirko, corgi-ul, tras la somn',
    badgeText: 'el supraveghează 🐾',
    kicker: 'De ce facem asta',
    title: 'Bunătatea e ceva ce se exersează.',
    bio: [
      'Suntem o mică echipă de dezvoltatori de software din Ucraina. Ziua construim software cu normă întreagă — iar în timpul liber construim site-uri pentru ONG-uri care nu-și permit unul.',
      'Am crescut crezând că bunătatea nu e doar ceva despre care vorbești, ci ceva ce faci. Sirko Dev Studio e felul nostru de a o pune în practică: site-uri reale, profesioniste, oferite gratuit, ca organizațiile care fac bine să poată fi găsite, în care să se aibă încredere și să fie susținute — în timp ce noi ne șlefuim în continuare meseria.',
      'Și da — Sirko face parte din echipă. Participă la fiecare revizuire de proiect.',
    ],
    bylineName: 'Sirko Dev Studio', // proper noun
    bylineTag: 'O echipă mică · Un corgi · Multe cauze bune',
  },
}
