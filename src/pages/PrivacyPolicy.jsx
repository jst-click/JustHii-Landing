import { PageHeader } from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { Seo } from '../components/Seo.jsx'

export function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Read the Just Hii Privacy Policy, including information we collect, how we use it, how we protect it, and your rights."
      />

      <PageHeader
        kicker="Legal"
        title={
          <>
            Privacy <span className="gradient-text">Policy</span>
          </>
        }
        subtitle="This Privacy Policy explains how Just Hii collects, uses, shares, and protects information when you use our services."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="card card-pad">
            <div className="prose">
              <p className="muted2">
                <strong>Last updated:</strong> February 5, 2026
              </p>

              <p>
                Welcome to <strong>Just Hii</strong> (“Just Hii”, “we”, “our”,
                or “us”). This Privacy Policy describes how we collect and use
                information when you access our mobile application, websites,
                and related services (collectively, the “Services”).
              </p>

              <h3>1) Information we collect</h3>
              <p>We may collect the following categories of information:</p>
              <ul>
                <li>
                  <strong>Account and profile information:</strong> such as your
                  name, username, date of birth/age confirmation, gender, photos,
                  bio, preferences, and other information you choose to add to
                  your profile.
                </li>
                <li>
                  <strong>Contact information:</strong> such as email address (for
                  support and account management).
                </li>
                <li>
                  <strong>Chat and call usage data:</strong> information about
                  your interactions on the platform, including message metadata
                  (e.g., timestamps, delivery status) and call metadata (e.g.,
                  call duration, call type). We do not aim to read your private
                  messages for advertising; however, we may process content for
                  safety, abuse prevention, and to comply with law.
                </li>
                <li>
                  <strong>Device and log information:</strong> such as device
                  identifiers, IP address, operating system, app version, crash
                  logs, and diagnostic data.
                </li>
                <li>
                  <strong>Cookies and similar technologies:</strong> our websites
                  may use cookies or similar technologies to remember preferences
                  and improve performance.
                </li>
              </ul>

              <h3>2) How we use information</h3>
              <p>We use information to:</p>
              <ul>
                <li>Provide, operate, and improve the Services</li>
                <li>Enable core features such as matching, chat, audio/video calls</li>
                <li>Personalize user experience and recommend relevant matches</li>
                <li>Maintain safety, prevent fraud, and enforce our policies</li>
                <li>Respond to support requests and communicate service updates</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>

              <h3>3) Data sharing</h3>
              <p>We may share information in the following circumstances:</p>
              <ul>
                <li>
                  <strong>With service providers:</strong> vendors that help us
                  host, secure, and operate the Services (e.g., infrastructure,
                  analytics, customer support tools). They may access data only
                  to perform services on our behalf.
                </li>
                <li>
                  <strong>For legal and safety reasons:</strong> if we believe in
                  good faith that disclosure is necessary to comply with law,
                  respond to lawful requests, protect users, prevent abuse, or
                  investigate violations.
                </li>
                <li>
                  <strong>Business transfers:</strong> in connection with a
                  merger, acquisition, financing, or sale of assets, where user
                  information may be transferred as part of that transaction.
                </li>
              </ul>

              <h3>4) Data security</h3>
              <p>
                We use reasonable administrative, technical, and physical
                safeguards designed to protect your information. No system is
                100% secure, so we cannot guarantee absolute security.
              </p>

              <h3>5) Cookies</h3>
              <p>
                Cookies are small files stored on your device that help websites
                function and remember preferences. You can typically control
                cookie settings through your browser. Disabling cookies may
                affect certain website features.
              </p>

              <h3>6) Your rights and choices</h3>
              <p>
                Depending on your location, you may have rights to access,
                update, delete, or object to certain processing of your personal
                information. You can also request account assistance via our
                support email.
              </p>

              <h3>7) Children’s privacy</h3>
              <p>
                Just Hii is not intended for children. You must meet the minimum
                legal age requirement in your jurisdiction to use the Services.
                If you believe a minor has provided personal information, please
                contact us so we can take appropriate action.
              </p>

              <h3>8) Policy updates</h3>
              <p>
                We may update this Privacy Policy from time to time. We will
                revise the “Last updated” date and may provide additional notice
                when required by law.
              </p>

              <h3>9) Contact us</h3>
              <p>
                If you have questions about this Privacy Policy, contact us at{' '}
                <a href="mailto:support@justhii.com">support@justhii.com</a>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}


