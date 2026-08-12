import { useState, type ChangeEvent, type FormEvent } from 'react'
import { SectionHead } from './SectionHead'

type FieldProps = {
  label: string
  type?: string
  textarea?: boolean
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  error?: string
}

const Field = ({ label, type = 'text', textarea, value, onChange, error }: FieldProps) => {
  const inputClassName = `field__input${error ? ' field__input--error' : ''}`
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      {textarea ? (
        <textarea rows={4} value={value} onChange={onChange} className={inputClassName} />
      ) : (
        <input type={type} value={value} onChange={onChange} className={inputClassName} />
      )}
      {error && <span className="field__error">{error}</span>}
    </label>
  )
}

const CONTACT_ROWS = [
  { l: 'Email', v: 'hello@sirko.dev', h: 'mailto:hello@sirko.dev' },
  { l: 'Based in', v: 'Remote · working with non-profits anywhere', h: null },
  { l: 'Response time', v: "Usually within a few days (it's a side project — with heart)", h: null },
]

export const Contact = () => {
  const [f, setF] = useState({ name: '', email: '', org: '', msg: '' })
  const [errs, setErrs] = useState<{ name?: string; email?: string; msg?: string }>({})
  const [sent, setSent] = useState(false)

  const upd = (k: keyof typeof f) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF((s) => ({ ...s, [k]: e.target.value }))

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const er: typeof errs = {}
    if (!f.name.trim()) er.name = 'Please add your name.'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) er.email = 'Enter a valid email.'
    if (!f.msg.trim()) er.msg = 'Tell us a little about your project.'
    setErrs(er)
    if (Object.keys(er).length === 0) setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__grid">
        <div>
          <SectionHead
            kicker="Contact"
            title="Run a non-profit or small business? Let's build."
            intro="Tell us what you do and what you need. If we're a fit, your website costs nothing."
          />
          <div className="contact__rows">
            {CONTACT_ROWS.map((r, i) => (
              <div key={i} className="contact__row">
                <span className="contact__row-label">{r.l}</span>
                {r.h ? (
                  <a href={r.h} className="contact__row-link">
                    {r.v}
                  </a>
                ) : (
                  <span className="contact__row-value">{r.v}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="contact-card">
          {sent ? (
            <div className="contact-card__success">
              <div className="contact-card__success-icon">✓</div>
              <h3 className="contact-card__success-title">Message sent — thank you!</h3>
              <p className="contact-card__success-body">We'll be in touch soon. Sirko sends his regards. 🐾</p>
            </div>
          ) : (
            <form onSubmit={submit} className="form" noValidate>
              <div className="form__row">
                <Field label="Your name" value={f.name} onChange={upd('name')} error={errs.name} />
                <Field label="Email" type="email" value={f.email} onChange={upd('email')} error={errs.email} />
              </div>
              <Field label="Organization (optional)" value={f.org} onChange={upd('org')} />
              <Field label="What do you need?" textarea value={f.msg} onChange={upd('msg')} error={errs.msg} />
              <button type="submit" className="form__submit">
                Send message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
