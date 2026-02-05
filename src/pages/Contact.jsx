import { useMemo, useState } from 'react'
import { PageHeader } from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { Seo } from '../components/Seo.jsx'

function validateEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function Contact() {
  const [status, setStatus] = useState('idle') // idle | sent
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const errors = useMemo(() => {
    const e = {}
    if (form.name.trim().length < 2) e.name = 'Please enter your name.'
    if (!validateEmail(form.email)) e.email = 'Please enter a valid email.'
    if (form.subject.trim().length < 3) e.subject = 'Please add a subject.'
    if (form.message.trim().length < 10)
      e.message = 'Please enter a message (at least 10 characters).'
    return e
  }, [form])

  const isValid = Object.keys(errors).length === 0

  function onSubmit(e) {
    e.preventDefault()
    if (!isValid) return

    // Informational website: no backend. We provide a mailto fallback.
    setStatus('sent')
  }

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(form.subject || 'Just Hii Support')
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    return `mailto:support@justhii.com?subject=${subject}&body=${body}`
  }, [form])

  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact Just Hii support. Email support@justhii.com or send us a message using the contact form."
      />

      <PageHeader
        kicker="Contact"
        title={
          <>
            Contact <span className="gradient-text">Just Hii</span>
          </>
        }
        subtitle="For support, questions, or policy inquiries, reach us anytime."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-2">
            <Reveal className="card card-pad">
              <div className="stack-16">
                <div className="kicker">Support Email</div>
                <div className="lead">
                  <a href="mailto:support@justhii.com">support@justhii.com</a>
                </div>
                <div className="muted">
                  We aim to respond as quickly as possible. Please include as
                  much detail as you can.
                </div>
                <div className="card card--soft card-pad">
                  <div className="stack-12">
                    <div className="kicker">Safety concerns</div>
                    <div className="muted2">
                      If you’re reporting harmful behavior, please include
                      usernames, timestamps, and any relevant details.
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="card card-pad">
              <div className="stack-16">
                <div className="kicker">Contact Form</div>

                {status === 'sent' ? (
                  <div className="card card--soft card-pad">
                    <div className="stack-12">
                      <div className="kicker">Message ready</div>
                      <div className="muted">
                        This website doesn’t submit messages to a server yet.
                        Click below to email us using your mail app.
                      </div>
                      <a className="btn btn--primary" href={mailto}>
                        Email support@justhii.com
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="stack-16">
                    <div className="form-grid">
                      <div>
                        <label htmlFor="name">Name</label>
                        <input
                          id="name"
                          value={form.name}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, name: e.target.value }))
                          }
                          placeholder="Your name"
                          autoComplete="name"
                        />
                        {errors.name ? (
                          <div className="muted2" style={{ marginTop: 6 }}>
                            {errors.name}
                          </div>
                        ) : null}
                      </div>

                      <div>
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, email: e.target.value }))
                          }
                          placeholder="you@example.com"
                          autoComplete="email"
                        />
                        {errors.email ? (
                          <div className="muted2" style={{ marginTop: 6 }}>
                            {errors.email}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject">Subject</label>
                      <input
                        id="subject"
                        value={form.subject}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, subject: e.target.value }))
                        }
                        placeholder="How can we help?"
                      />
                      {errors.subject ? (
                        <div className="muted2" style={{ marginTop: 6 }}>
                          {errors.subject}
                        </div>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        value={form.message}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, message: e.target.value }))
                        }
                        placeholder="Write your message..."
                      />
                      {errors.message ? (
                        <div className="muted2" style={{ marginTop: 6 }}>
                          {errors.message}
                        </div>
                      ) : null}
                    </div>

                    <button className="btn btn--primary" type="submit" disabled={!isValid}>
                      Submit
                    </button>

                    <div className="muted2" style={{ fontSize: 13 }}>
                      By contacting us you agree to share the information you
                      provide for support purposes.
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}


