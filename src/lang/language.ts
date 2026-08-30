import { createContext, useContext } from 'react'

export type LanguageName = 'en' | 'uk' | 'ro'

export const LANGUAGES: LanguageName[] = ['en', 'uk', 'ro']

export const LANGUAGE_LABELS: Record<LanguageName, string> = {
  en: 'EN',
  uk: 'UA',
  ro: 'RO',
}

const STORAGE_KEY = 'sirko-dev:language'

const isLanguageName = (value: string | null): value is LanguageName =>
  value === 'en' || value === 'uk' || value === 'ro'

export type LanguageState = { language: LanguageName }

export type LanguageAction = { type: 'SET_LANGUAGE'; payload: LanguageName }

export function languageReducer(state: LanguageState, action: LanguageAction): LanguageState {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return { language: action.payload }
    default:
      return state
  }
}

export function detectInitialLanguage(): LanguageState {
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (isLanguageName(stored)) return { language: stored }

  const browserLang = window.navigator.language.slice(0, 2).toLowerCase()
  if (isLanguageName(browserLang)) return { language: browserLang }

  return { language: 'en' }
}

export function persistLanguage(language: LanguageName): void {
  window.localStorage.setItem(STORAGE_KEY, language)
}

export type LanguageContextValue = {
  language: LanguageName
  setLanguage: (language: LanguageName) => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
