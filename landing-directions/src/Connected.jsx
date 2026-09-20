import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Plus,
  Stack,
  ArrowDown,
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
  Logo,
} from "./shared";
import { modules, services } from "./content";

export default function Connected({ onContact, onAccount, onPlan }) {
  const [selected, setSelected] = useState("tasks");
  const active = modules.find((m) => m.id === selected);
  const Icon = active.icon;
  return (
    <div className="landing connected" id="top">
      <Header onContact={onContact} onAccount={onAccount} onPlan={onPlan} />
      <main id="main-content">
        <section className="connected-hero" aria-labelledby="hero-title">
          <VideoScene
            kind="connected"
            label="Your workspace. Your combination."
          />
          <div className="connected-hero-scrim" />
          <div className="wrap connected-hero-layout">
            <div className="connected-hero-copy">
              <Eyebrow>
                <span className="live-dot" /> A more connected business
              </Eyebrow>
              <h1 id="hero-title">
                Every part. <br />
                Working <br />
                <span>as one.</span>
              </h1>
              <p>
                Bring your people, relationships, and work into focus. Build the
                digital business around them.
              </p>
              <div className="hero-actions">
                <Action href="#platform">Explore your workspace</Action>
                <a className="quiet-link" href="#services">
                  Meet the services <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="connected-hero-note">
                <Stack size={19} />
                <span>Six modules. One connected idea.</span>
              </div>
            </div>
            <div className="connection-console">
              <div className="console-top">
                <span>
                  <span className="status-dot" /> ORGTIK / WORKSPACE EXPLORER
                </span>
                <small>01—06</small>
              </div>
              <div className="connection-hub">
                <Logo light emblem />
                <div>
                  <strong>Your business</strong>
                  <span>Choose a connection below</span>
                </div>
                <ArrowDown size={19} />
              </div>
              <div
                className="connection-module-grid"
                aria-label="Choose a module"
              >
                {modules.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelected(m.id)}
                    aria-pressed={selected === m.id}
                    className={selected === m.id ? "selected" : ""}
                  >
                    <m.icon
                      size={23}
                      weight={selected === m.id ? "duotone" : "regular"}
                    />
                    <span>{m.formal}</span>
                    <span className="connection-cell-indicator">
                      {selected === m.id ? (
                        <Check size={13} />
                      ) : (
                        <Plus size={13} />
                      )}
                    </span>
                  </button>
                ))}
              </div>
              <div className="connection-detail" key={selected}>
                <div className="connection-detail-top">
                  <Icon size={20} />
                  <span>{active.category}</span>
                  <small>{active.number} / 06</small>
                </div>
                <h3>{active.short}</h3>
                <button onClick={() => onPlan(active.id)}>
                  Add {active.formal} to a combination{" "}
                  <ArrowUpRight size={16} />
                </button>
              </div>
              <div className="console-footer">
                <span>Interactive platform concept</span>
                <span>
                  Built around you <ArrowUpRight size={12} />
                </span>
              </div>
            </div>
          </div>
          <div className="wrap connected-hero-bottom">
            <a href="#platform">
              Find your connections <ArrowDown size={14} />
            </a>
            <span>PEOPLE / RELATIONSHIPS / WORK</span>
          </div>
        </section>
        <section className="connected-strip">
          <div className="wrap">
            <span>Clarity at every connection.</span>
            {[
              "People",
              "Relationships",
              "Files",
              "Work",
              "Marketing",
              "Website",
            ].map((n) => (
              <span key={n}>
                <Plus size={12} />
                {n}
              </span>
            ))}
          </div>
        </section>
        <section className="connected-platform section-pad" id="platform">
          <div className="wrap">
            <div className="section-heading heading-split" data-reveal>
              <div>
                <Eyebrow number="01">Your business has a rhythm</Eyebrow>
                <h2>
                  Give it a workspace <br />
                  that <span>keeps up.</span>
                </h2>
              </div>
              <p>
                Explore one module, then see the bigger picture. Your starting
                point doesn’t have to be your limit.
              </p>
            </div>
            <div data-reveal>
              <ModuleExplorer variant="connected" onPlan={onPlan} />
            </div>
          </div>
        </section>
        <section className="connected-combinations section-pad">
          <div className="wrap">
            <div className="section-heading" data-reveal>
              <Eyebrow number="02">A starting point, not a box</Eyebrow>
              <h2>
                Make the combination <br />
                your own.
              </h2>
            </div>
            <div className="combination-grid" data-reveal>
              <article>
                <div className="combination-icons">
                  {modules
                    .filter((m) => ["hr", "files", "tasks"].includes(m.id))
                    .map((m) => (
                      <m.icon key={m.id} size={27} />
                    ))}
                </div>
                <small>For everyday delivery</small>
                <h3>
                  Bring the work <br />
                  together.
                </h3>
                <p>
                  People, tasks, and files. A clearer place for the way your
                  team operates.
                </p>
                <button onClick={() => onPlan("tasks")} className="text-link">
                  Explore operations <ArrowRight size={18} />
                </button>
              </article>
              <article>
                <div className="combination-icons">
                  {modules
                    .filter((m) =>
                      ["crm", "marketing", "website"].includes(m.id),
                    )
                    .map((m) => (
                      <m.icon key={m.id} size={27} />
                    ))}
                </div>
                <small>For the next opportunity</small>
                <h3>
                  Connect the path <br />
                  to growth.
                </h3>
                <p>
                  Relationships, marketing, and your website. Keep the next step
                  in view.
                </p>
                <button onClick={() => onPlan("crm")} className="text-link">
                  Explore growth <ArrowRight size={18} />
                </button>
              </article>
              <article className="combination-custom">
                <Logo light emblem />
                <small>Your business, your choice</small>
                <h3>
                  Start with what <br />
                  you need.
                </h3>
                <p>
                  Choose a single module or bring your own combination together.
                </p>
                <Action onClick={() => onPlan()}>Build a combination</Action>
              </article>
            </div>
            <p className="concept-note">
              Explore the platform concept. Module availability and pricing are
              confirmed with the OrgTik team.
            </p>
          </div>
        </section>
        <section className="connected-services section-pad" id="services">
          <div className="wrap">
            <div className="section-heading heading-split" data-reveal>
              <div>
                <Eyebrow number="03">Expertise meets execution</Eyebrow>
                <h2>
                  The tools behind you. <br />
                  The team <span>beside you.</span>
                </h2>
              </div>
              <p>
                Great software is part of the picture. Our digital services help
                bring the rest together.
              </p>
            </div>
            <div className="connected-service-grid">
              {services.map((s) => (
                <article key={s.title} data-reveal>
                  <div>
                    <s.icon size={31} weight="light" />
                    <span>{s.index}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <button className="text-link" onClick={onContact}>
                    Let’s connect <ArrowUpRight size={19} />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="connected-approach section-pad" id="approach">
          <div className="wrap">
            <div className="section-heading heading-split" data-reveal>
              <div>
                <Eyebrow number="04">Connected from the beginning</Eyebrow>
                <h2>
                  One direction. <br />
                  Every step of the way.
                </h2>
              </div>
              <p>
                From the questions we ask <br />
                to the details we deliver.
              </p>
            </div>
            <div data-reveal>
              <Process variant="connected" />
            </div>
          </div>
        </section>
        <section className="connected-faq section-pad">
          <div className="wrap faq-layout">
            <div data-reveal>
              <Eyebrow>Before you connect</Eyebrow>
              <h2>
                A clearer <br />
                picture.
              </h2>
            </div>
            <div data-reveal>
              <FAQ onContact={onContact} />
            </div>
          </div>
        </section>
        <section className="connected-closing section-pad">
          <div className="wrap" data-reveal>
            <Logo light emblem />
            <Eyebrow>Make your next connection count</Eyebrow>
            <h2>
              Let’s bring <br />
              it all together.
            </h2>
            <div className="hero-actions">
              <Action onClick={() => onPlan()}>Find your combination</Action>
              <button className="quiet-link" onClick={onContact}>
                Start a project <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer onContact={onContact} onPlan={onPlan} />
    </div>
  );
}
