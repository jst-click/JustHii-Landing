import { NavLink } from 'react-router-dom'
import { Reveal } from '../components/Reveal.jsx'
import { Seo } from '../components/Seo.jsx'

export function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you requested was not found." />

      <section className="section">
        <div className="container">
          <Reveal className="card card-pad">
            <div className="stack-16">
              <div className="chip">404</div>
              <h1 className="h2" style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}>
                Page not found
              </h1>
              <div className="lead">
                The page you’re looking for doesn’t exist or may have been moved.
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <NavLink className="btn btn--primary" to="/">
                  Go to Home
                </NavLink>
                <NavLink className="btn btn--ghost" to="/contact">
                  Contact Support
                </NavLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}


