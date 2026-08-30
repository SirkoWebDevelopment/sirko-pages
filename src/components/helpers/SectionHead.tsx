export type SectionHeadProps = {
  kicker: string
  title: string
  intro?: string
}

export const SectionHead = ({ kicker, title, intro }: SectionHeadProps) => {
  return (
    <div className="section-head">
      <span className="section-head__kicker">{kicker}</span>
      <h2 className="section-head__title">{title}</h2>
      {intro && <p className="section-head__intro">{intro}</p>}
    </div>
  )
}
