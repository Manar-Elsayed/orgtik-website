import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Plus,
  Minus,
  Stack,
  CursorClick,
} from "@phosphor-icons/react";
import {
  Header,
  Footer,
  VideoScene,
  Eyebrow,
  Action,
  ModuleExplorer,
  Process,
  FAQ,
  asset,
} from "./shared";
import { services } from "./content";

export default function Cinematic({ onContact, onAccount, onPlan }) {
  return (
    <div className="landing cinematic" id="top">
      <Header onContact={onContact} onAccount={onAccount} onPlan={onPlan} />
      <main id="main-content">
        <section className="cinematic-hero" aria-labelledby="hero-title">
          <VideoScene kind="cinematic" label="OrgTik / Brand in motion" />
          <div className="cinematic-scrim" />
          <div className="hero-content wrap">
            <Eyebrow>
              <span className="live-dot" /> Digital services + business software
            </Eyebrow>
            <h1 id="hero-title">
              Build the <br />
              business. <br />
              <span>Run it better.</span>
            </h1>
            <p>
              Ideas, experiences, and systems. <br />
              Connected to move your business forward.
            </p>
            <div className="hero-actions">
              <Action href="#platform">Explore the platform</Action>
              <button className="quiet-link" onClick={onContact}>
                Start a project <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
          <div className="hero-bottom wrap">
            <a href="#possibilities">
              A more connected way forward <ArrowDown size={16} />
            </a>
            <span>Strategy. Design. Technology.</span>
          </div>
        </section>
        <section
          className="cinematic-gateway light-section section-pad"
          id="possibilities"
        >
          <div className="wrap">
            <div className="section-heading" data-reveal>
              <Eyebrow number="01">A clearer way forward</Eyebrow>
              <h2>
                One partner. <br />
                <span className="muted-ink">Both sides of your business.</span>
              </h2>
            </div>
            <div className="gateway-pair" data-reveal>
              <a href="#services" className="gateway-item">
                <span className="gateway-icon">
                  <CursorClick size={25} />
                </span>
                <div>
                  <small>Expert digital services</small>
                  <h3>Build & grow.</h3>
                  <p>
                    Shape your brand. Create your digital presence. <br />
                    Connect with the people who matter.
                  </p>
                </div>
                <ArrowUpRight size={29} />
              </a>
              <a href="#platform" className="gateway-item">
                <span className="gateway-icon">
                  <Stack size={25} />
                </span>
                <div>
                  <small>Modular business software</small>
                  <h3>Run it better.</h3>
                  <p>
                    Give your team a clearer way to organize <br />
                    people, relationships, and everyday work.
                  </p>
                </div>
                <ArrowUpRight size={29} />
              </a>
            </div>
          </div>
        </section>
        <section className="cinematic-platform section-pad" id="platform">
          <div className="wrap">
            <div className="section-heading heading-split" data-reveal>
              <div>
                <Eyebrow number="02">Your business, connected</Eyebrow>
                <h2>
                  Six systems. <br />
                  One bigger picture.
                </h2>
              </div>
              <p>
                The tools behind the work. <br />
                Choose a starting point and explore <br />
                what belongs in your workspace.
              </p>
            </div>
            <div data-reveal>
              <ModuleExplorer onPlan={onPlan} />
            </div>
          </div>
        </section>
        <section
          className="cinematic-services section-pad light-section"
          id="services"
        >
          <div className="wrap services-layout">
            <div className="services-intro" data-reveal>
              <Eyebrow number="03">Built around your business</Eyebrow>
              <h2>
                Good ideas <br />
                deserve <br />
                <span className="muted-ink">great execution.</span>
              </h2>
              <p>
                From the first sketch to what comes next. <br />
                The right expertise, connected.
              </p>
              <button className="text-link" onClick={onContact}>
                Tell us about your project <ArrowRight size={18} />
              </button>
            </div>
            <div className="service-accordions" data-reveal>
              {services.map((s, i) => (
                <details key={s.title} open={i === 0}>
                  <summary>
                    <span className="service-number">{s.index}</span>
                    <h3>{s.title}</h3>
                    <Plus className="faq-plus" size={22} />
                    <Minus className="faq-minus" size={22} />
                  </summary>
                  <div className="service-detail">
                    <p>{s.text}</p>
                    <small>{s.details}</small>
                    <button onClick={onContact} className="text-link">
                      Let's make it happen <ArrowUpRight size={18} />
                    </button>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
        <section className="cinematic-brand" id="work">
          <div className="wrap brand-story-heading" data-reveal>
            <Eyebrow>Our identity, in the world</Eyebrow>
            <h2>
              We don’t chase attention. <br />
              <span>We attract it.</span>
            </h2>
            <p>The OrgTik identity. From a clear idea to every touchpoint.</p>
          </div>
          <div className="brand-story-images">
            <figure className="brand-story-primary" data-reveal>
              <img
                src={asset("brand-cards.webp")}
                alt="OrgTik business cards with a metallic violet identity"
                loading="lazy"
                width="1920"
                height="1072"
              />
              <figcaption>
                <span>Identity, made tangible.</span>
                <small>OrgTik brand application</small>
              </figcaption>
            </figure>
            <figure className="brand-story-secondary" data-reveal>
              <img
                src={asset("brand-tablet.webp")}
                alt="The OrgTik identity displayed on a tablet"
                loading="lazy"
                width="1920"
                height="1072"
              />
              <figcaption>
                <span>A presence that carries through.</span>
                <small>OrgTik brand application</small>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="cinematic-process section-pad" id="approach">
          <div className="wrap">
            <div className="section-heading heading-split" data-reveal>
              <div>
                <Eyebrow number="04">From possibility to progress</Eyebrow>
                <h2>
                  A shared direction. <br />
                  At every step.
                </h2>
              </div>
              <p>
                A considered process. <br />A connected team. <br />
                Something worth building.
              </p>
            </div>
            <div data-reveal>
              <Process />
            </div>
          </div>
        </section>
        <section className="faq-section section-pad light-section">
          <div className="wrap faq-layout">
            <div data-reveal>
              <Eyebrow>A little more clarity</Eyebrow>
              <h2>
                Before we <br />
                begin.
              </h2>
            </div>
            <div data-reveal>
              <FAQ onContact={onContact} />
            </div>
          </div>
        </section>
        <section className="cinematic-closing section-pad">
          <div className="wrap" data-reveal>
            <Eyebrow>The next connection starts here</Eyebrow>
            <h2>
              What could we <br />
              build <em>together?</em>
            </h2>
            <Action onClick={onContact}>Start a conversation</Action>
          </div>
        </section>
      </main>
      <Footer onContact={onContact} onPlan={onPlan} />
    </div>
  );
}
