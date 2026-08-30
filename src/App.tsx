import { useEffect } from 'react'
import { LanguageProvider } from './lang/LanguageProvider'
import { Nav } from './components/helpers/navigation/Nav'
import { Hero } from './components/sections/hero/Hero'
import { WhoWeHelp } from './components/sections/whowehelp/WhoWeHelp'
import { Portfolio } from './components/sections/portfolio/Portfolio'
import { Story } from './components/sections/story/Story'
import { Contact } from './components/sections/contact/Contact'
import { Footer } from './components/helpers/footer/Footer'
import { PALETTES, FONTS, ACTIVE_THEME } from './theme'

const App = () => {
  useEffect(() => {
    const pal = PALETTES[ACTIVE_THEME.palette]
    const mode = ACTIVE_THEME.dark ? pal.dark : pal.light
    const font = FONTS[ACTIVE_THEME.font]
    const r = document.documentElement.style
    r.setProperty('--accent', pal.accent)
    r.setProperty('--accent-deep', pal.accentDeep)
    r.setProperty('--paper', mode.paper)
    r.setProperty('--surface', mode.surface)
    r.setProperty('--ink', mode.ink)
    r.setProperty('--muted', mode.muted)
    r.setProperty('--line', mode.line)
    r.setProperty('--font-head', font.head)
    r.setProperty('--font-body', font.body)
  }, [])

  return (
    <LanguageProvider>
      <div id="top">
        <Nav />
        <Hero variant={ACTIVE_THEME.hero} />
        <WhoWeHelp />
        <Portfolio />
        <Story />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
