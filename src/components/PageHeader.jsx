import { Reveal } from './Reveal.jsx'

export function PageHeader({ title, subtitle, kicker }) {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="stack-16">
          {kicker ? <div className="chip">{kicker}</div> : null}
          <h1 className="h2" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
            {title}
          </h1>
          {subtitle ? <div className="lead">{subtitle}</div> : null}
        </Reveal>
      </div>
    </section>
  )
}


