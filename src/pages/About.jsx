import { PageHeader } from '../components/PageHeader.jsx'
import { Reveal } from '../components/Reveal.jsx'
import { Seo } from '../components/Seo.jsx'

export function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about Just Hii—our mission, vision, and what makes our dating & social connection experience different."
      />

      <PageHeader
        kicker="About Just Hii"
        title={
          <>
            Built for <span className="gradient-text">genuine</span> connections
          </>
        }
        subtitle="Just Hii is a dating & social connection app focused on respectful conversations and premium real-time communication—chat, audio calls, and video calls."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-2">
            <Reveal className="stack-16">
              <div className="card card-pad">
                <div className="stack-16">
                  <h2 className="h2">Our mission</h2>
                  <div className="lead">
                    To help people meet with confidence by making it easy to
                    start meaningful conversations—and to keep the experience
                    safe, respectful, and enjoyable.
                  </div>
                  <div className="muted">
                    We’re building a space where you can connect in a way that
                    feels natural: start with chat, then move to audio or video
                    when you’re ready.
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal className="stack-16">
              <div className="card card-pad">
                <div className="stack-16">
                  <h2 className="h2">Our vision</h2>
                  <div className="lead">
                    A premium, modern platform where real connections are
                    easier to discover—without pressure, spam, or chaos.
                  </div>
                  <div className="muted">
                    We believe a great dating experience should be simple,
                    transparent, and centered around mutual respect.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div style={{ height: 16 }} />

          <Reveal className="card card-pad">
            <div className="grid grid-3">
              <div className="stack-12">
                <div className="kicker">What makes Just Hii different</div>
                <div className="muted">
                  We focus on quality interactions—helping you move from
                  discovery to conversation to real-time connection.
                </div>
              </div>
              <div className="card card--soft card-pad">
                <div className="stack-12">
                  <div className="kicker">Respect-first culture</div>
                  <div className="muted2">
                    Clear expectations and safety controls to encourage healthy
                    behavior.
                  </div>
                </div>
              </div>
              <div className="card card--soft card-pad">
                <div className="stack-12">
                  <div className="kicker">Real-time communication</div>
                  <div className="muted2">
                    Chat, audio, and video options so you can connect the way
                    you prefer.
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div style={{ height: 16 }} />

          <Reveal className="card card--soft card-pad">
            <div className="stack-16">
              <h2 className="h2">
                Safe, respectful, and <span className="gradient-text">genuine</span>
              </h2>
              <div className="lead">
                We’re committed to building an experience where people can be
                themselves while feeling protected. If you ever need help,
                we’re here.
              </div>
              <div className="muted">
                Support: <a href="mailto:support@justhii.com">support@justhii.com</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}


