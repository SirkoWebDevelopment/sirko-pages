export type PaletteName = 'Ginger' | 'Toffee' | 'Clay'
export type FontName = 'Editorial' | 'Modern' | 'Classic'
export type HeroVariant = 'centered' | 'split' | 'spotlight'

type PaletteMode = {
  paper: string
  surface: string
  ink: string
  muted: string
  line: string
}

type Palette = {
  accent: string
  accentDeep: string
  light: PaletteMode
  dark: PaletteMode
}

type Font = {
  head: string
  body: string
  label: string
}

export const PALETTES: Record<PaletteName, Palette> = {
  Ginger: {
    accent: '#D8843E',
    accentDeep: '#B8662A',
    light: { paper: '#FBF6EE', surface: '#FFFDF9', ink: '#2B231A', muted: '#6E6253', line: '#E7DCCB' },
    dark: { paper: '#1B1711', surface: '#241F18', ink: '#F3E9DA', muted: '#A99885', line: '#37302A' },
  },
  Toffee: {
    accent: '#BE7B43',
    accentDeep: '#97602F',
    light: { paper: '#F7EFE3', surface: '#FFFBF3', ink: '#2A2018', muted: '#6B5E4D', line: '#E4D6C2' },
    dark: { paper: '#1A1510', surface: '#241E16', ink: '#F1E7D7', muted: '#A6927C', line: '#332B20' },
  },
  Clay: {
    accent: '#CB6F4E',
    accentDeep: '#A95536',
    light: { paper: '#FAF2EA', surface: '#FFFCF6', ink: '#2C211B', muted: '#6E5C50', line: '#E8D8C9' },
    dark: { paper: '#1C1611', surface: '#271D17', ink: '#F4E8DD', muted: '#AC9384', line: '#352820' },
  },
}

export const FONTS: Record<FontName, Font> = {
  Editorial: { head: "'Newsreader', serif", body: "'Mulish', sans-serif", label: 'Newsreader · Mulish' },
  Modern: { head: "'Bricolage Grotesque', sans-serif", body: "'Hanken Grotesk', sans-serif", label: 'Bricolage · Hanken' },
  Classic: { head: "'Libre Baskerville', serif", body: "'Work Sans', sans-serif", label: 'Baskerville · Work Sans' },
}

export const ACTIVE_THEME = {
  palette: 'Ginger' as PaletteName,
  font: 'Editorial' as FontName,
  hero: 'split' as HeroVariant,
  dark: false,
}
