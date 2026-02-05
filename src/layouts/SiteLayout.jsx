import { Outlet } from 'react-router-dom'
import { Footer } from '../components/Footer.jsx'
import { Header } from '../components/Header.jsx'

export function SiteLayout() {
  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}


