import type { LanguageName } from '../../../lang/language'

export type ContactTranslations = {
  kicker: string
  title: string
  intro: string
  rows: { label: string; value: string }[]
  form: {
    nameLabel: string
    emailLabel: string
    orgLabel: string
    messageLabel: string
    submitLabel: string
  }
  errors: {
    name: string
    email: string
    msg: string
  }
  success: {
    title: string
    body: string
  }
}

export const CONTACT_TRANSLATIONS: Record<LanguageName, ContactTranslations> = {
  en: {
    kicker: 'Contact',
    title: "Run a non-profit or small business? Let's build.",
    intro: "Tell us what you do and what you need. If we're a fit, your website costs nothing.",
    rows: [
      { label: 'Email', value: 'hello@sirko.dev' }, // literal email address, not translated
      { label: 'Based in', value: 'Remote · working with non-profits anywhere' },
      { label: 'Response time', value: "Usually within a few days (it's a side project — with heart)" },
    ],
    form: {
      nameLabel: 'Your name',
      emailLabel: 'Email',
      orgLabel: 'Organization (optional)',
      messageLabel: 'What do you need?',
      submitLabel: 'Send message',
    },
    errors: {
      name: 'Please add your name.',
      email: 'Enter a valid email.',
      msg: 'Tell us a little about your project.',
    },
    success: {
      title: 'Message sent — thank you!',
      body: "We'll be in touch soon. Sirko sends his regards. 🐾",
    },
  },
  uk: {
    kicker: 'Контакти',
    title: 'Керуєте неприбутковою організацією чи малим бізнесом? Зробімо це разом.',
    intro: 'Розкажіть, чим ви займаєтесь і що вам потрібно. Якщо ми підходимо один одному — ваш сайт коштуватиме нуль.',
    rows: [
      { label: 'Пошта', value: 'hello@sirko.dev' }, // literal email address, not translated
      { label: 'Розташування', value: 'Віддалено · працюємо з неприбутковими організаціями будь-де' },
      { label: 'Час відповіді', value: 'Зазвичай протягом кількох днів (це проєкт для душі — з турботою)' },
    ],
    form: {
      nameLabel: "Ваше ім'я",
      emailLabel: 'Email',
      orgLabel: "Організація (необов'язково)",
      messageLabel: 'Що вам потрібно?',
      submitLabel: 'Надіслати повідомлення',
    },
    errors: {
      name: "Будь ласка, вкажіть ваше ім'я.",
      email: 'Введіть коректну електронну адресу.',
      msg: 'Розкажіть трохи про ваш проєкт.',
    },
    success: {
      title: 'Повідомлення надіслано — дякуємо!',
      body: 'Ми зв\'яжемося з вами найближчим часом. Сірко передає вітання. 🐾',
    },
  },
  ro: {
    kicker: 'Contact',
    title: 'Conduci un ONG sau o afacere mică? Hai să construim.',
    intro: 'Spune-ne ce faci și de ce ai nevoie. Dacă ni se potrivește, site-ul tău nu costă nimic.',
    rows: [
      { label: 'Email', value: 'hello@sirko.dev' }, // literal email address, not translated
      { label: 'Locație', value: 'La distanță · lucrăm cu ONG-uri de oriunde' },
      { label: 'Timp de răspuns', value: 'De obicei în câteva zile (e un proiect de suflet — cu inimă)' },
    ],
    form: {
      nameLabel: 'Numele tău',
      emailLabel: 'Email',
      orgLabel: 'Organizație (opțional)',
      messageLabel: 'De ce ai nevoie?',
      submitLabel: 'Trimite mesajul',
    },
    errors: {
      name: 'Te rugăm să adaugi numele tău.',
      email: 'Introdu o adresă de email validă.',
      msg: 'Spune-ne puțin despre proiectul tău.',
    },
    success: {
      title: 'Mesaj trimis — mulțumim!',
      body: 'Te vom contacta în curând. Sirko transmite salutări. 🐾',
    },
  },
}
