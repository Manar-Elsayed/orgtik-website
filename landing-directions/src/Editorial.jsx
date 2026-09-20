import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  ArrowBendDownRight,
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

export default function Editorial({ onContact, onAccount, onPlan }) {
  return (
    <div className="landing editorial" id="top">
      <Header
        theme="light"
        onContact={onContact}
        onAccount={onAccount}
        onPlan={onPlan}
      />
      <main id="main-content">
        <section className="editorial-hero wrap" aria-labelledby="hero-title">
          <div className="editorial-hero-top">
            <Eyebrow>Independent thinking. Connected execution.</Eyebrow>
            <span className="editorial-edition">
              OrgTik / A new perspective
            </span>
          </div>
          <div className="editorial-title-row">
            <h1 id="hero-title">
              Good things <br />
              happen when <br />
              <em>it all connects.</em>
            </h1>
            <div className="editorial-hero-aside">
              <ArrowBendDownRight size={56} weight="thin" />
              <p>
                Expert digital services. <br />
                Thoughtful business software. <br />
                One partner for what’s next.
              </p>
              <Action onClick={onContact}>Let’s build something</Action>
            </div>
          </div>
          <div className="editorial-media-row">
            <div className="editorial-side-note">
              <span>01 — Made to matter</span>
              <p>
                A clear identity. <br />A considered experience. <br />A
                business moving forward.
              </p>
              <a href="#services">
                Find your starting point <ArrowDown size={17} />
              </a>
            </div>
            <VideoScene
              kind="editorial"
              label="A study in presence / OrgTik brand identity"
            />
          </div>
        </section>
        <section className="editorial-statement section-pad">
          <div className="wrap statement-layout">
            <Eyebrow>Perspective changes everything</Eyebrow>
            <div data-reveal>
              <h2>
                Your business is <br />
                more than its parts. <br />
                <span>We help them work together.</span>
              </h2>
              <p>
                From the story you tell to the systems your team uses, every
                connection shapes the experience. OrgTik brings strategy,
                design, technology, and day-to-day tools into the same
                conversation.
              </p>
            </div>
          </div>
        </section>
        <section className="editorial-services section-pad" id="services">
          <div className="wrap">
            <div className="editorial-section-top" data-reveal>
              <Eyebrow number="01">Our expertise</Eyebrow>
              <h2>
                Big picture. <br />
                Thoughtful details.
              </h2>
              <button className="text-link" onClick={onContact}>
                Start a project <ArrowUpRight size={19} />
              </button>
            </div>
            <div className="editorial-service-list">
              {services.map((s) => (
                <article key={s.title} data-reveal>
                  <span className="service-number">{s.index}</span>
                  <div>
                    <small>{s.category}</small>
                    <h3>{s.title}</h3>
                  </div>
                  <p>{s.text}</p>
                  <button
                    className="service-round"
                    aria-label={`Discuss ${s.title}`}
                    onClick={onContact}
                  >
                    <ArrowUpRight size={22} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="editorial-brand-section" id="work">
          <div className="editorial-brand-image">
            <img
              src={asset("brand-glass.webp")}
              alt="The original OrgTik emblem on glass, lit in violet"
              loading="lazy"
              width="1920"
              height="1072"
            />
          </div>
          <div className="editorial-brand-caption" data-reveal>
            <Eyebrow>One idea. Every expression.</Eyebrow>
            <h2>
              Make a <br />
              lasting <br />
              <em>impression.</em>
            </h2>
            <p>
              Our own identity, made tangible. <br />A glimpse of the thinking
              we bring <br />
              to a brand’s world.
            </p>
            <small>From the OrgTik brand manual</small>
          </div>
        </section>
        <section className="editorial-platform section-pad" id="platform">
          <div className="wrap">
            <div className="editorial-section-top" data-reveal>
              <Eyebrow number="02">Behind the scenes</Eyebrow>
              <h2>
                A little less scattered. <br />A lot more connected.
              </h2>
              <p>
                A modular platform concept for the people, relationships, and
                work behind your business.
              </p>
            </div>
            <div data-reveal>
              <ModuleExplorer variant="editorial" onPlan={onPlan} />
            </div>
          </div>
        </section>
        <section className="editorial-approach section-pad" id="approach">
          <div className="wrap">
            <div className="editorial-section-top" data-reveal>
              <Eyebrow number="03">How we get there</Eyebrow>
              <h2>
                Curious minds. <br />
                Common direction.
              </h2>
              <p>
                Good work starts with understanding. <br />
                And gets better with collaboration.
              </p>
            </div>
            <div data-reveal>
              <Process variant="editorial" />
            </div>
          </div>
        </section>
        <section className="editorial-faq section-pad">
          <div className="wrap faq-layout">
            <div data-reveal>
              <Eyebrow>Let's make it clear</Eyebrow>
              <h2>
                A few good <br />
                questions.
              </h2>
            </div>
            <div data-reveal>
              <FAQ onContact={onContact} />
            </div>
          </div>
        </section>
        <section className="editorial-closing section-pad">
          <div className="wrap" data-reveal>
            <Eyebrow>Every good thing starts somewhere</Eyebrow>
            <div>
              <h2>
                Shall we <br />
                <em>begin?</em>
              </h2>
              <button
                className="editorial-big-arrow"
                onClick={onContact}
                aria-label="Start a conversation"
              >
                <ArrowUpRight size={96} weight="thin" />
              </button>
            </div>
            <p>Bring the ambition. We’ll bring the thinking.</p>
          </div>
        </section>
      </main>
      <Footer theme="light" onContact={onContact} onPlan={onPlan} />
    </div>
  );
}
