import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="stack-12">
            <div className="brand">
              <span className="brand-mark" aria-hidden="true">
                <img className="brand-logo" src={logo} alt="" />
              </span>
              <span>
                Just <span className="gradient-text">Hii</span>
              </span>
            </div>
            <div className="muted">
              Just Hii is a premium dating & social connection app designed for
              respectful, genuine conversations—chat, audio call, and video call
              from anywhere.
            </div>
          </div>

          <div className="stack-12">
            <div className="kicker">Quick Links</div>
            <div className="stack-12">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </div>
          </div>

          <div className="stack-12">
            <div className="kicker">Support</div>
            <div className="muted2">Email</div>
            <a href="mailto:support@justhii.com">support@justhii.com</a>
            <div className="muted2" style={{ marginTop: 10 }}>
              Legal
            </div>
            <div className="stack-12">
              <NavLink to="/privacy-policy">Privacy Policy</NavLink>
              <NavLink to="/terms-and-conditions">Terms & Conditions</NavLink>
              <NavLink to="/refund-policy">Refund Policy</NavLink>
            </div>
          </div>
        </div>

        <div
          className="muted2"
          style={{
            marginTop: 22,
            paddingTop: 18,
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 10,
            justifyContent: 'space-between',
          }}
        >
          <span>© {year} Just Hii. All rights reserved.</span>
          <span>Chat • Audio Call • Video Call</span>
        </div>
      </div>
    </footer>
  )
}


