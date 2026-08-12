import { useEffect } from 'react'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { WhoWeHelp } from './components/WhoWeHelp'
import { Portfolio } from './components/Portfolio'
import { Story } from './components/Story'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
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
    <div id="top">
      <Nav />
      <Hero
        variant={ACTIVE_THEME.hero}
        tagline="Free & straightforward websites for the non‑profits and small businesses who can't afford one — just like us."
      />
      <WhoWeHelp />
      <Portfolio />
      <Story />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
