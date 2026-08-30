import { useCallback, useMemo, useReducer, type ReactNode } from 'react'
import { LanguageContext, detectInitialLanguage, languageReducer, persistLanguage, type LanguageName } from './language'

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(languageReducer, undefined, detectInitialLanguage)

  const setLanguage = useCallback((language: LanguageName) => {
    persistLanguage(language)
    dispatch({ type: 'SET_LANGUAGE', payload: language })
  }, [])

  const value = useMemo(() => ({ language: state.language, setLanguage }), [state.language, setLanguage])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
