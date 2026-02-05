import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop.jsx'
import { SiteLayout } from './layouts/SiteLayout.jsx'
import { About } from './pages/About.jsx'
import { Contact } from './pages/Contact.jsx'
import { Home } from './pages/Home.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { PrivacyPolicy } from './pages/PrivacyPolicy.jsx'
import { RefundPolicy } from './pages/RefundPolicy.jsx'
import { TermsAndConditions } from './pages/TermsAndConditions.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
