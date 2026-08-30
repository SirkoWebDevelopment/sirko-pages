import type { CSSVars } from '../../lib/cssVars'

export type PlaceholderProps = {
  label: string
  ratio?: string
  radius?: number
  round?: boolean
}

export const Placeholder = ({ label, ratio = '4 / 3', radius = 18, round = false }: PlaceholderProps) => {
  const vars: CSSVars = {
    '--ratio': round ? '1 / 1' : ratio,
    '--radius': round ? '50%' : `${radius}px`,
  }
  return (
    <div className="placeholder" style={vars}>
      <span className="placeholder__label">{label}</span>
    </div>
  )
}
