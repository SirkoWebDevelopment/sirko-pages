import { useState, type ChangeEvent, type FormEvent } from 'react'
import { SectionHead } from '../../helpers/SectionHead'
import { useLanguage } from '../../../lang/language'
import { CONTACT_TRANSLATIONS } from './Contact.lang'

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

const CONTACT_ROWS_META: { href: string | null }[] = [{ href: 'mailto:hello@sirko.dev' }, { href: null }, { href: null }]

export const Contact = () => {
  const { language } = useLanguage()
  const t = CONTACT_TRANSLATIONS[language]
  const rows = CONTACT_ROWS_META.map((meta, i) => ({ ...meta, ...t.rows[i] }))

  const [f, setF] = useState({ name: '', email: '', org: '', msg: '' })
  const [errs, setErrs] = useState<{ name?: string; email?: string; msg?: string }>({})
  const [sent, setSent] = useState(false)

  const upd = (k: keyof typeof f) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setF((s) => ({ ...s, [k]: e.target.value }))

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const er: typeof errs = {}
    if (!f.name.trim()) er.name = t.errors.name
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(f.email)) er.email = t.errors.email
    if (!f.msg.trim()) er.msg = t.errors.msg
    setErrs(er)
    if (Object.keys(er).length === 0) setSent(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__grid">
        <div>
          <SectionHead kicker={t.kicker} title={t.title} intro={t.intro} />
          <div className="contact__rows">
            {rows.map((r, i) => (
              <div key={i} className="contact__row">
                <span className="contact__row-label">{r.label}</span>
                {r.href ? (
                  <a href={r.href} className="contact__row-link">
                    {r.value}
                  </a>
                ) : (
                  <span className="contact__row-value">{r.value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="contact-card">
          {sent ? (
            <div className="contact-card__success">
              <div className="contact-card__success-icon">✓</div>
              <h3 className="contact-card__success-title">{t.success.title}</h3>
              <p className="contact-card__success-body">{t.success.body}</p>
            </div>
          ) : (
            <form onSubmit={submit} className="form" noValidate>
              <div className="form__row">
                <Field label={t.form.nameLabel} value={f.name} onChange={upd('name')} error={errs.name} />
                <Field label={t.form.emailLabel} type="email" value={f.email} onChange={upd('email')} error={errs.email} />
              </div>
              <Field label={t.form.orgLabel} value={f.org} onChange={upd('org')} />
              <Field label={t.form.messageLabel} textarea value={f.msg} onChange={upd('msg')} error={errs.msg} />
              <button type="submit" className="form__submit">
                {t.form.submitLabel}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
