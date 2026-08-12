import type { CSSVars } from '../lib/cssVars'

export type PhotoProps = {
  src: string
  alt: string
  ratio?: string
  radius?: number
  round?: boolean
  pos?: string
  zoom?: number
}

export const Photo = ({ src, alt, ratio = '4 / 3', radius = 18, round = false, pos = 'center', zoom = 1 }: PhotoProps) => {
  const vars: CSSVars = {
    '--ratio': round ? '1 / 1' : ratio,
    '--radius': round ? '50%' : `${radius}px`,
    '--pos': pos,
    '--zoom': zoom,
  }
  return (
    <div className="photo" style={vars}>
      <img className="photo__img" src={src} alt={alt} loading="lazy" />
    </div>
  )
}
