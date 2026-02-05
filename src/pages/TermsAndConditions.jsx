import { PageHeader } from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { Seo } from '../components/Seo.jsx'

export function TermsAndConditions() {
  return (
    <>
      <Seo
        title="Terms and Conditions"
        description="Read the Just Hii Terms and Conditions, including eligibility, acceptable use, prohibited content, account responsibilities, and limitations."
      />

      <PageHeader
        kicker="Legal"
        title={
          <>
            Terms & <span className="gradient-text">Conditions</span>
          </>
        }
        subtitle="These Terms govern your access to and use of Just Hii."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="card card-pad">
            <div className="prose">
              <p className="muted2">
                <strong>Last updated:</strong> February 5, 2026
              </p>

              <p>
                These Terms and Conditions (“Terms”) apply to your use of the Just
                Hii app, websites, and related services (the “Services”). By
                accessing or using the Services, you agree to these Terms.
              </p>

              <h3>1) User eligibility</h3>
              <ul>
                <li>You must be at least the minimum legal age in your jurisdiction.</li>
                <li>You must be able to form a legally binding contract.</li>
                <li>
                  You may not use the Services if you are prohibited from doing so
                  under applicable law.
                </li>
              </ul>

              <h3>2) Account responsibility</h3>
              <ul>
                <li>You are responsible for maintaining the confidentiality of your account.</li>
                <li>You agree to provide accurate information and keep it updated.</li>
                <li>You are responsible for all activities that occur under your account.</li>
              </ul>

              <h3>3) Acceptable use</h3>
              <p>
                You agree to use Just Hii in a respectful, lawful manner and in
                accordance with our community expectations.
              </p>

              <h3>4) Prohibited content</h3>
              <p>You may not post, upload, transmit, or share content that:</p>
              <ul>
                <li>Is illegal, harmful, or promotes violence or self-harm</li>
                <li>Contains harassment, hate speech, or discrimination</li>
                <li>Is sexually exploitative, non-consensual, or involves minors</li>
                <li>Infringes intellectual property or privacy rights</li>
                <li>Contains malware, spam, scams, or deceptive practices</li>
              </ul>

              <h3>5) User behavior and safety</h3>
              <ul>
                <li>
                  Be respectful. Do not harass, threaten, stalk, or intimidate others.
                </li>
                <li>
                  Do not solicit money, gifts, or financial information from other users.
                </li>
                <li>
                  Use caution when meeting people. Just Hii cannot guarantee user identity.
                </li>
              </ul>

              <h3>6) Content ownership</h3>
              <p>
                You retain ownership of the content you submit, but you grant Just
                Hii a limited license to host, store, display, and process that
                content to operate and improve the Services, enforce safety, and
                comply with law.
              </p>

              <h3>7) Account termination</h3>
              <p>
                You may stop using the Services at any time. We may suspend or
                terminate accounts that violate these Terms, harm others, or pose
                security risks. We may also remove content that violates these Terms.
              </p>

              <h3>8) Limitation of liability</h3>
              <p>
                To the maximum extent permitted by law, Just Hii is provided “as
                is” without warranties of any kind. We are not liable for indirect,
                incidental, special, consequential, or punitive damages, or any
                loss of data, profits, or goodwill, arising from or related to your
                use of the Services.
              </p>

              <h3>9) Changes to terms</h3>
              <p>
                We may update these Terms from time to time. If changes are
                material, we may provide additional notice as required by law. The
                “Last updated” date indicates when these Terms were last revised.
              </p>

              <h3>10) Governing law</h3>
              <p>
                These Terms are governed by the laws applicable in the jurisdiction
                where Just Hii operates, without regard to conflict of laws rules.
              </p>

              <h3>11) Contact information</h3>
              <p>
                If you have questions about these Terms, contact us at{' '}
                <a href="mailto:support@justhii.com">support@justhii.com</a>.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}


