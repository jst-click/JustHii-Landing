import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact Us' },
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms-and-conditions', label: 'Terms & Conditions' },
  { to: '/refund-policy', label: 'Refund Policy' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <NavLink to="/" className="brand" aria-label="Just Hii Home">
            <span className="brand-mark" aria-hidden="true">
              <img className="brand-logo" src={logo} alt="" />
            </span>
            <span>
              Just <span className="gradient-text">Hii</span>
            </span>
          </NavLink>

          <nav className="nav" aria-label="Primary">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end}>
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <button
              className="btn btn--ghost menu-btn"
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        {open ? (
          <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        ) : null}
      </div>
    </header>
  )
}


