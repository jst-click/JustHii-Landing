import { PageHeader } from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { Seo } from '../components/Seo.jsx'

export function RefundPolicy() {
  return (
    <>
      <Seo
        title="Refund Policy"
        description="Read the Just Hii Refund Policy for subscriptions and in-app purchases, including cancellation rules and how to request a refund."
      />

      <PageHeader
        kicker="Legal"
        title={
          <>
            Refund <span className="gradient-text">Policy</span>
          </>
        }
        subtitle="This policy explains how refunds work for digital services, subscriptions, and in-app purchases on Just Hii."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="card card-pad">
            <div className="prose">
              <p className="muted2">
                <strong>Last updated:</strong> February 5, 2026
              </p>

              <p>
                Just Hii may offer paid features such as subscriptions or in-app
                purchases (“Purchases”). Because Purchases are digital services,
                refund rules may vary depending on your location and the platform
                used to purchase (e.g., Apple App Store or Google Play).
              </p>

              <h3>1) Digital service refund rules</h3>
              <ul>
                <li>
                  Purchases may be non-refundable except where required by law or
                  platform policies.
                </li>
                <li>
                  If you purchased through a third-party store, your refund request
                  is typically handled by that store.
                </li>
              </ul>

              <h3>2) Subscription cancellation</h3>
              <ul>
                <li>
                  You can cancel a subscription at any time through your app store
                  account settings.
                </li>
                <li>
                  Cancelling stops future billing, but you may retain access until
                  the end of the current billing period (depending on the store).
                </li>
              </ul>

              <h3>3) Non-refundable items</h3>
              <p>Unless required by law, the following are generally non-refundable:</p>
              <ul>
                <li>Partially used subscription periods</li>
                <li>One-time digital items once delivered/activated</li>
                <li>Promotional or discounted purchases (unless required by law)</li>
              </ul>

              <h3>4) Special cases</h3>
              <p>
                We may consider exceptions in limited circumstances, such as:
              </p>
              <ul>
                <li>Duplicate charges</li>
                <li>Unauthorized transactions (subject to verification)</li>
                <li>Technical issues preventing delivery of a paid feature</li>
              </ul>

              <h3>5) How to request a refund</h3>
              <ul>
                <li>
                  <strong>Apple App Store:</strong> request a refund through Apple’s
                  purchase history and refund request process.
                </li>
                <li>
                  <strong>Google Play:</strong> request a refund through Google Play
                  order history or support.
                </li>
                <li>
                  <strong>Other/Direct:</strong> if applicable, contact our support team
                  with your purchase details.
                </li>
              </ul>

              <h3>6) Contact</h3>
              <p>
                For questions about refunds or billing, email{' '}
                <a href="mailto:support@justhii.com">support@justhii.com</a>.
                Please include your account email/username, purchase date, and
                transaction ID if available.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}


