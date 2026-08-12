import { SectionHead } from './SectionHead'

const HELP = [
  {
    icon: '♥',
    title: 'Non‑profits & community groups',
    body: "Food banks, shelters, rescues, youth programs — the people doing good who shouldn't have to choose between a website and their mission.",
  },
  {
    icon: '◇',
    title: 'Small businesses on a tight budget',
    body: "The corner shop, the new freelancer, the family café. If a professional site is out of reach right now, that's exactly who we're here for.",
  },
]

export const WhoWeHelp = () => {
  return (
    <section className="who-we-help">
      <div className="who-we-help__inner">
        <SectionHead
          kicker="Who we help"
          title="A good website shouldn't be a luxury."
          intro="We work with the people who'd benefit most from being online — and can least afford it."
        />
        <div className="who-we-help__grid">
          {HELP.map((h, i) => (
            <div key={i} className="help-card">
              <span className="help-card__icon">{h.icon}</span>
              <div>
                <h3 className="help-card__title">{h.title}</h3>
                <p className="help-card__body">{h.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
