import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ArrowDown,
} from "@phosphor-icons/react";
import Cinematic from "./Cinematic";
import Editorial from "./Editorial";
import Connected from "./Connected";
import { directions } from "./content";
import {
  Logo,
  Eyebrow,
  asset,
  DirectionDock,
  Modal,
  useReveals,
} from "./shared";

function Gallery() {
  const [chosen, setChosen] = useState(() => {
    try {
      return localStorage.getItem("orgtik-direction") || "";
    } catch {
      return "";
    }
  });
  const clearChoice = () => {
    try {
      localStorage.removeItem("orgtik-direction");
    } catch {}
    setChosen("");
  };
  return (
    <div className="direction-gallery">
      <header className="gallery-header wrap">
        <Logo light />
        <span>Website design exploration / 2026</span>
        <a href="#directions">
          Explore the directions <ArrowDown size={16} />
        </a>
      </header>
      <main id="main-content">
        <section className="gallery-intro wrap">
          <Eyebrow>
            <span className="live-dot" /> One brand. Three perspectives.
          </Eyebrow>
          <h1>
            Find the right <br />
            <span>kind of different.</span>
          </h1>
          <div>
            <p>
              Three distinct visions for the next OrgTik website. <br />
              Explore each landing page, try the interactions, <br />
              and choose the direction that feels right.
            </p>
            <span className="gallery-counter">
              01 — 03 <br />
              <small>DESIGN DIRECTIONS</small>
            </span>
          </div>
        </section>
        {chosen && (
          <div className="wrap clear-choice">
            <span>
              Your current choice:{" "}
              {directions.find((d) => d.id === chosen)?.name}
            </span>
            <button onClick={clearChoice}>Clear selection</button>
          </div>
        )}
        <section
          className="gallery-cards wrap"
          id="directions"
          aria-label="Landing page directions"
        >
          {directions.map((d) => (
            <article className={`gallery-card gallery-card-${d.id}`} key={d.id}>
              <a
                href={`/${d.id}`}
                className="gallery-visual"
                aria-label={`Open ${d.name}`}
              >
                <img
                  src={asset(`${d.image}.webp`)}
                  alt={`${d.name} uses original OrgTik ${d.id === "cinematic" ? "glass emblem" : d.id === "editorial" ? "printed identity" : "device identity"} artwork`}
                  width="1920"
                  height="1072"
                />
                <span className="gallery-visual-number">{d.number}</span>
                <span className="gallery-open">
                  <ArrowUpRight size={26} />
                </span>
              </a>
              <div className="gallery-card-copy">
                <div>
                  <span className="gallery-kicker">Direction {d.number}</span>
                  {chosen === d.id && (
                    <span className="chosen-badge">
                      <Check size={12} /> Your selection
                    </span>
                  )}
                </div>
                <a href={`/${d.id}`}>
                  <h2>{d.name}</h2>
                </a>
                <h3>{d.label}</h3>
                <p>{d.description}</p>
                <div className="gallery-tags">
                  {d.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <a href={`/${d.id}`} className="gallery-link">
                  Explore the landing page <ArrowRight size={19} />
                </a>
              </div>
            </article>
          ))}
        </section>
        <section className="gallery-note wrap">
          <span>Made for a considered choice.</span>
          <p>
            Each direction includes responsive layouts, original brand assets,
            an animated video placeholder, and interactive frontend previews.
            Use the switcher on any page to compare.
          </p>
        </section>
      </main>
      <footer className="gallery-footer wrap">
        <span>OrgTik — We don’t chase attention. We attract it.</span>
        <span>Design exploration · Frontend only</span>
      </footer>
    </div>
  );
}

export function App() {
  const id = window.location.pathname.split("/").filter(Boolean)[0] || "";
  const direction = directions.find((d) => d.id === id);
  const [modal, setModal] = useState(null);
  const [initialModule, setInitialModule] = useState(undefined);
  useReveals();
  useEffect(() => {
    document.title = direction
      ? `OrgTik — ${direction.name}`
      : "OrgTik — Three design directions";
  }, [direction]);
  const open = (type, module) => {
    setInitialModule(module);
    setModal(type);
  };
  const props = {
    onContact: () => open("contact"),
    onAccount: () => open("account"),
    onPlan: (module) =>
      open("plan", typeof module === "string" ? module : undefined),
  };
  const choose = () => {
    try {
      localStorage.setItem("orgtik-direction", direction.id);
    } catch {}
    setModal("choice");
  };
  const Page =
    id === "cinematic"
      ? Cinematic
      : id === "editorial"
        ? Editorial
        : id === "connected"
          ? Connected
          : null;
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      {Page ? (
        <>
          <Page {...props} />
          <DirectionDock current={id} onChoose={choose} />
        </>
      ) : id ? (
        <main className="not-found" id="main-content">
          <Logo />
          <Eyebrow>Let's reconnect</Eyebrow>
          <h1>
            This direction <br />
            isn't here.
          </h1>
          <a className="action" href="/">
            See all three directions <ArrowRight size={20} />
          </a>
        </main>
      ) : (
        <Gallery />
      )}
      {modal && (
        <Modal
          key={`${modal}-${initialModule}`}
          type={modal}
          onClose={() => setModal(null)}
          direction={direction}
          initialModule={initialModule}
        />
      )}
    </>
  );
}
