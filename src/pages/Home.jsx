import { NavLink } from 'react-router-dom'
import { Reveal } from '../components/Reveal.jsx'
import { Seo } from '../components/Seo.jsx'

function FeatureCard({ title, description }) {
  return (
    <div className="card card-pad">
      <div className="stack-12">
        <div className="kicker">{title}</div>
        <div className="muted">{description}</div>
      </div>
    </div>
  )
}

function InfoCard({ title, points }) {
  return (
    <div className="card card--soft card-pad">
      <div className="stack-12">
        <div className="kicker">{title}</div>
        <ul className="muted" style={{ margin: '6px 0 0 18px' }}>
          {points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function Home() {
  return (
    <>
      <Seo
        title="Meet, Chat & Connect Instantly"
        description="Just Hii is a premium dating & social connection app built for real conversations—chat, audio calls, and video calls in a secure, respectful environment."
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: 18 }}>
            <Reveal className="stack-20">
              <div className="chip">
                Premium dating & social connection • Built for respectful matches
              </div>
              <h1 className="h1">
                Just Hii – <span className="gradient-text">Meet, Chat</span> &{' '}
                <span className="gradient-text">Connect</span> Instantly
              </h1>
              <div className="lead">
                Connect with real people through chat, audio calls, and video
                calls. Just Hii helps you discover new connections anytime,
                anywhere.
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <NavLink className="btn btn--primary" to="/contact">
                  Contact Us
                </NavLink>
                <NavLink className="btn btn--ghost" to="/privacy-policy">
                  Safety & Privacy
                </NavLink>
              </div>
              <div className="muted2" style={{ fontSize: 13 }}>
                This website is for information and legal pages (not the app).
              </div>
            </Reveal>

            <Reveal>
              <div className="card card-pad">
                <div className="stack-16">
                  <div className="kicker">What you can do on Just Hii</div>
                  <div className="grid grid-3">
                    <div className="card card--soft card-pad">
                      <div className="stack-12">
                        <div className="kicker">Chat</div>
                        <div className="muted2">Fast, real-time messaging.</div>
                      </div>
                    </div>
                    <div className="card card--soft card-pad">
                      <div className="stack-12">
                        <div className="kicker">Audio Call</div>
                        <div className="muted2">
                          Hear the vibe instantly.
                        </div>
                      </div>
                    </div>
                    <div className="card card--soft card-pad">
                      <div className="stack-12">
                        <div className="kicker">Video Call</div>
                        <div className="muted2">
                          Face-to-face connection.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="muted">
                    A clean, premium experience designed to help you connect
                    comfortably and confidently.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <Reveal className="stack-16">
            <h2 className="h2">
              App <span className="gradient-text">Features</span>
            </h2>
            <div className="grid grid-3">
              <FeatureCard
                title="Chat"
                description="Start conversations instantly with fast, reliable messaging built for real connections."
              />
              <FeatureCard
                title="Audio Call"
                description="Move beyond text when you're ready—clear audio calling for natural, comfortable chats."
              />
              <FeatureCard
                title="Video Call"
                description="See who you're talking to and build trust with secure video calling."
              />
              <FeatureCard
                title="Smart Matching"
                description="Discover compatible people with a matching experience designed to reduce noise and boost quality."
              />
              <FeatureCard
                title="Secure Platform"
                description="We work to keep the community safe with privacy-first design and safety controls."
              />
              <FeatureCard
                title="Premium Experience"
                description="A modern, high-contrast UI with a smooth, premium feel across devices."
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-2">
            <Reveal className="stack-16">
              <h2 className="h2">
                Why Choose <span className="gradient-text">Just Hii</span>
              </h2>
              <div className="lead">
                Just Hii is designed for people who want genuine, respectful
                conversations—without friction.
              </div>
              <div className="grid grid-2">
                <InfoCard
                  title="Built for real connections"
                  points={[
                    'Clear profiles and meaningful conversations',
                    'Chat-first flow with optional audio/video escalation',
                    'Premium feel that keeps the experience focused',
                  ]}
                />
                <InfoCard
                  title="Fast & intuitive"
                  points={[
                    'Mobile-first responsive design',
                    'Simple navigation and clean UI',
                    'Smooth transitions and modern visuals',
                  ]}
                />
              </div>
            </Reveal>

            <Reveal className="stack-16">
              <h2 className="h2">
                Safety & <span className="gradient-text">Privacy</span>
              </h2>
              <div className="lead">
                Your experience should feel safe and comfortable. We emphasize
                respectful behavior and privacy-aware features.
              </div>
              <div className="grid">
                <InfoCard
                  title="Privacy highlights"
                  points={[
                    'We collect only what we need to provide and improve the service',
                    'We use security measures to protect your data',
                    'You control your account and can request support anytime',
                  ]}
                />
                <div className="card card--soft card-pad">
                  <div className="stack-12">
                    <div className="kicker">Need help?</div>
                    <div className="muted">
                      Contact our support team at{' '}
                      <a href="mailto:support@justhii.com">
                        support@justhii.com
                      </a>
                      .
                    </div>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                      <NavLink className="btn btn--primary" to="/contact">
                        Contact Support
                      </NavLink>
                      <NavLink className="btn btn--ghost" to="/terms-and-conditions">
                        Read Terms
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}


