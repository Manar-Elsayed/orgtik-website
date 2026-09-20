import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ArrowLeft,
  ArrowDown,
  Pause,
  Play,
  List,
  X,
  Check,
  CheckCircle,
  Copy,
  GridFour,
  Plus,
  Minus,
  Stack,
} from "@phosphor-icons/react";
import { directions, modules, steps } from "./content";

export const asset = (name) => `/assets/${name}`;
export const Arrow = ({ diagonal = false, ...props }) =>
  diagonal ? (
    <ArrowUpRight size={20} {...props} />
  ) : (
    <ArrowRight size={20} {...props} />
  );
export function Logo({ light = false, emblem = false, ...props }) {
  return (
    <img
      {...props}
      className={`brand-logo ${emblem ? "emblem" : ""} ${props.className || ""}`}
      src={asset(
        `${emblem ? "emblem" : "wordmark"}-${light ? "white" : "plum"}.svg`,
      )}
      alt="OrgTik"
      width={emblem ? 42 : 112}
      height={emblem ? 42 : 30}
    />
  );
}
export function Eyebrow({ children, number, className = "" }) {
  return (
    <p className={`eyebrow ${className}`}>
      {number && <span className="eyebrow-number">{number}</span>}
      {children}
    </p>
  );
}
export function Action({
  children,
  href,
  onClick,
  secondary = false,
  className = "",
  ...rest
}) {
  const cls = `action ${secondary ? "action-secondary" : ""} ${className}`;
  return href ? (
    <a className={cls} href={href} {...rest}>
      {children}
      <Arrow />
    </a>
  ) : (
    <button className={cls} onClick={onClick} {...rest}>
      {children}
      <Arrow />
    </button>
  );
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  return reduced;
}

export function VideoScene({
  kind,
  className = "",
  label = "Brand in motion",
  showLabel = true,
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const [mobile, setMobile] = useState(() => window.innerWidth < 700);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);
  const [ready, setReady] = useState(false);
  const pausedByUser = useRef(false);
  const [manual, setManual] = useState(false);
  const saveData = !!navigator.connection?.saveData;
  const canLoad = (!reduced && !saveData) || manual;
  const stem = `${kind}-${mobile ? "mobile" : "desktop"}`;
  useEffect(() => {
    const m = matchMedia("(max-width:699px)");
    const change = () => setMobile(m.matches);
    m.addEventListener("change", change);
    return () => m.removeEventListener("change", change);
  }, []);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let inside = true;
    const sync = () => {
      if (document.hidden || !inside || pausedByUser.current || !canLoad)
        el.pause();
      else el.play().catch(() => setPlaying(false));
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inside = entry.isIntersecting;
        sync();
      },
      { threshold: 0.06 },
    );
    observer.observe(el);
    document.addEventListener("visibilitychange", sync);
    sync();
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
    };
  }, [canLoad, stem]);
  function toggle() {
    const el = ref.current;
    if (!el) return;
    if (playing) {
      pausedByUser.current = true;
      el.pause();
    } else {
      pausedByUser.current = false;
      setManual(true);
      el.play().catch(() => setPlaying(false));
    }
  }
  return (
    <div className={`video-scene ${className} ${ready ? "video-ready" : ""}`}>
      <picture>
        <source
          media="(max-width:699px)"
          srcSet={asset(`${kind}-mobile.webp`)}
        />
        <img
          className="video-poster"
          src={asset(`${kind}-desktop.webp`)}
          alt=""
          fetchPriority="high"
          width="1280"
          height="720"
        />
      </picture>
      <video
        ref={ref}
        key={stem}
        className={playing ? "is-playing" : ""}
        src={canLoad ? asset(`${stem}.mp4`) : undefined}
        poster={asset(`${stem}.webp`)}
        muted
        playsInline
        loop
        preload="none"
        aria-hidden="true"
        onPlaying={() => {
          setPlaying(true);
          setReady(true);
        }}
        onPause={() => setPlaying(false)}
        onError={() => {
          setFailed(true);
          setPlaying(false);
        }}
      />
      {showLabel && <span className="scene-label">{label}</span>}
      {!failed && (
        <button
          className="video-control"
          onClick={toggle}
          aria-label={
            playing ? "Pause background video" : "Play background video"
          }
        >
          {playing ? (
            <Pause weight="fill" size={14} />
          ) : (
            <Play weight="fill" size={14} />
          )}
          <span>{playing ? "Pause motion" : "Play motion"}</span>
        </button>
      )}
    </div>
  );
}

export function Header({ theme = "dark", onContact, onAccount, onPlan }) {
  const [open, setOpen] = useState(false);
  const dialog = useRef(null);
  const trigger = useRef(null);
  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialog.current?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const close = () => {
    setOpen(false);
    requestAnimationFrame(() => trigger.current?.focus());
  };
  const links = [
    ["Platform", "#platform"],
    ["Services", "#services"],
    ["Our approach", "#approach"],
  ];
  return (
    <header className={`site-header ${theme}`}>
      <a className="logo-link" href="#top" aria-label="OrgTik home">
        <Logo light={theme === "dark"} />
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map(([name, url]) => (
          <a key={name} href={url}>
            {name}
          </a>
        ))}
        <button onClick={onPlan}>Plans</button>
      </nav>
      <div className="header-actions">
        <button className="account-link" onClick={onAccount}>
          Sign in <ArrowUpRight size={13} />
        </button>
        <button className="header-cta" onClick={onContact}>
          Start a project <ArrowUpRight size={16} />
        </button>
      </div>
      <button
        ref={trigger}
        className="menu-trigger icon-button"
        aria-label="Open navigation"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <List size={26} />
      </button>
      <dialog
        className="mobile-nav"
        ref={dialog}
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
      >
        <div className="mobile-nav-top">
          <Logo />
          <button
            aria-label="Close navigation"
            className="icon-button"
            onClick={close}
          >
            <X size={25} />
          </button>
        </div>
        <nav aria-label="Mobile navigation">
          {links.map(([name, url], i) => (
            <a key={url} href={url} onClick={close}>
              <small>0{i + 1}</small>
              {name}
              <ArrowUpRight size={24} />
            </a>
          ))}
          <button
            onClick={() => {
              close();
              onPlan();
            }}
          >
            Plans <ArrowUpRight size={24} />
          </button>
          <button
            onClick={() => {
              close();
              onAccount();
            }}
          >
            Sign in <ArrowUpRight size={24} />
          </button>
        </nav>
        <Action
          onClick={() => {
            close();
            onContact();
          }}
        >
          Start a project
        </Action>
        <a href="/" className="mobile-compare">
          Compare all three directions
        </a>
      </dialog>
    </header>
  );
}

export function ModuleExplorer({ variant = "cinematic", onPlan }) {
  const [selected, setSelected] = useState("hr");
  const active = modules.find((m) => m.id === selected);
  const Icon = active.icon;
  function keyboard(e, index) {
    if (["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) {
      e.preventDefault();
      const next =
        e.key === "Home"
          ? 0
          : e.key === "End"
            ? 5
            : (index + (e.key === "ArrowRight" ? 1 : 5)) % 6;
      setSelected(modules[next].id);
      e.currentTarget.parentElement.children[next].focus();
    }
  }
  return (
    <div className={`module-explorer explorer-${variant}`}>
      <div
        className="module-tabs"
        role="tablist"
        aria-label="Explore business modules"
      >
        {modules.map((m, i) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={selected === m.id}
            aria-controls={`${variant}-module-panel`}
            id={`${variant}-tab-${m.id}`}
            tabIndex={selected === m.id ? 0 : -1}
            onKeyDown={(e) => keyboard(e, i)}
            onClick={() => setSelected(m.id)}
          >
            <m.icon size={20} />
            <span>{m.formal}</span>
            <span className="module-tab-number">{m.number}</span>
          </button>
        ))}
      </div>
      <div
        className="module-panel"
        id={`${variant}-module-panel`}
        role="tabpanel"
        aria-labelledby={`${variant}-tab-${active.id}`}
        tabIndex="0"
      >
        <div key={selected} className="module-copy">
          <div className="module-category">
            <Icon size={28} />
            <span>
              {active.category} / {active.number}
            </span>
          </div>
          <h3>{active.title}</h3>
          <p>{active.description}</p>
          <ul>
            {active.tasks.map((t) => (
              <li key={t}>
                <Check size={16} />
                {t}
              </li>
            ))}
          </ul>
          <button className="text-link" onClick={() => onPlan(active.id)}>
            Explore your combination <Arrow />
          </button>
        </div>
        <div className="module-art">
          <img
            src={asset(
              variant === "editorial" ? "brand-glass.webp" : "brand-phone.webp",
            )}
            alt="OrgTik brand application on a device"
            loading="lazy"
            width="1920"
            height="1072"
          />
          <span className="art-caption">
            Brand application · Platform concept
          </span>
          <div className="module-art-label">
            <Icon size={24} />
            <div>
              <small>One part of your workspace</small>
              <strong>{active.formal}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Process({ variant = "cinematic" }) {
  return (
    <div className={`process-grid process-${variant}`}>
      {steps.map(([name, title, text], i) => (
        <article key={name} className="process-step">
          <div className="process-top">
            <span>0{i + 1}</span>
            <ArrowRight size={18} />
          </div>
          <h3>{name}</h3>
          <h4>{title}</h4>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}

export function FAQ({ onContact }) {
  const questions = [
    [
      "Can we start with a single project?",
      "Yes. Start with the website, identity, workflow, or campaign that matters most. We can shape a focused brief and build from there.",
    ],
    [
      "How do the services and platform fit together?",
      "Our services shape your digital presence. The platform concept brings your everyday business tools together. We help you explore the combination that fits your team.",
    ],
    [
      "Can I choose only the modules I need?",
      "Explore a single module or combine several in the plan preview. Final availability, features, and pricing will be confirmed with the OrgTik team.",
    ],
  ];
  return (
    <div className="faq-list">
      {questions.map(([q, a]) => (
        <details key={q}>
          <summary>
            {q}
            <Plus size={20} className="faq-plus" />
            <Minus size={20} className="faq-minus" />
          </summary>
          <p>{a}</p>
        </details>
      ))}
      <button onClick={onContact} className="text-link">
        Have something else in mind? Let's talk <Arrow />
      </button>
    </div>
  );
}

export function Footer({ theme = "dark", onContact, onPlan }) {
  return (
    <footer className={`site-footer ${theme}`}>
      <div className="footer-main">
        <div>
          <a href="#top" aria-label="Back to top">
            <Logo light={theme === "dark"} />
          </a>
          <p>
            We don’t chase attention.
            <br />
            We attract it.
          </p>
        </div>
        <div className="footer-links">
          <a href="#platform">Platform</a>
          <a href="#services">Services</a>
          <a href="#approach">Our approach</a>
          <button onClick={onPlan}>Explore plans</button>
          <button onClick={onContact}>Contact</button>
        </div>
        <a href="#top" className="back-top" aria-label="Back to top">
          <ArrowUpRight size={24} />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 OrgTik.</span>
        <span>Strategy. Design. Technology.</span>
        <a href="/">
          View design directions <ArrowUpRight size={13} />
        </a>
      </div>
    </footer>
  );
}

export function DirectionDock({ current, onChoose }) {
  return (
    <aside className="direction-dock" aria-label="Compare design directions">
      <a href="/" className="dock-home" aria-label="All directions">
        <GridFour size={19} />
      </a>
      <div className="dock-options">
        {directions.map((d) => (
          <a
            key={d.id}
            href={`/${d.id}`}
            className={d.id === current ? "current" : ""}
            aria-current={d.id === current ? "page" : undefined}
          >
            <span>{d.number}</span>
            <b>
              {d.id === "cinematic"
                ? "Cinematic"
                : d.id === "editorial"
                  ? "Editorial"
                  : "Connected"}
            </b>
          </a>
        ))}
      </div>
      <button
        className="dock-choose"
        aria-label="Choose this direction"
        onClick={onChoose}
      >
        <Check size={16} />
        <span>Choose this direction</span>
      </button>
    </aside>
  );
}

export function Modal({ type, onClose, direction, initialModule }) {
  const ref = useRef(null);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(
    initialModule ? [initialModule] : [],
  );
  const previous = useRef(document.activeElement);
  useEffect(() => {
    ref.current.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      previous.current?.focus?.();
    };
  }, []);
  const title =
    type === "contact"
      ? "What would you like to build?"
      : type === "plan"
        ? "Make room for what matters."
        : type === "choice"
          ? `${direction.name}, selected.`
          : "Your OrgTik workspace.";
  function chooseModule(id) {
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id],
    );
  }
  function submit(e) {
    e.preventDefault();
    const f = e.currentTarget;
    const data = new FormData(f);
    if (
      !String(data.get("name")).trim() ||
      !String(data.get("message")).trim()
    ) {
      setError("Please enter your name and a short message.");
      return;
    }
    setError("");
    setSent(true);
  }
  return (
    <dialog
      className={`experience-modal modal-${type}`}
      ref={ref}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      aria-labelledby="modal-title"
    >
      <div className="modal-top">
        <Logo />
        <button
          onClick={onClose}
          className="icon-button"
          aria-label="Close dialog"
        >
          <X size={23} />
        </button>
      </div>
      <Eyebrow>
        {type === "choice" ? "Your next chapter" : "Let’s connect"}
      </Eyebrow>
      <h2 id="modal-title">{title}</h2>
      {type === "contact" &&
        (sent ? (
          <div className="form-success" role="status">
            <CheckCircle size={44} weight="light" />
            <h3>Your preview is complete.</h3>
            <p>
              No message was sent. This form demonstrates the enquiry
              experience.
            </p>
            <Action onClick={onClose}>Back to the page</Action>
          </div>
        ) : (
          <form onSubmit={submit}>
            <p className="preview-notice">
              Design preview · No message will be sent. Please use example
              details.
            </p>
            <label>
              I'm interested in
              <select
                name="interest"
                defaultValue={initialModule ? "Platform" : "A new project"}
              >
                <option>A new project</option>
                <option>Platform</option>
                <option>Brand & design</option>
                <option>Ongoing support</option>
              </select>
            </label>
            <div className="form-row">
              <label>
                Your name
                <input
                  name="name"
                  autoComplete="off"
                  placeholder="Alex Taylor"
                  required
                  maxLength="100"
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="alex@example.com"
                  required
                />
              </label>
            </div>
            <label>
              A little about your project
              <textarea
                name="message"
                rows="3"
                placeholder="Tell us what needs to work better…"
                required
                maxLength="2000"
              />
            </label>
            {error && (
              <p role="alert" className="form-error">
                {error}
              </p>
            )}
            <button type="submit" className="action">
              Preview enquiry <Arrow />
            </button>
          </form>
        ))}
      {type === "plan" && (
        <>
          <p>Start with one focus. Connect more when you’re ready.</p>
          <div className="plan-choices">
            {modules.map((m) => (
              <button
                key={m.id}
                aria-pressed={selected.includes(m.id)}
                onClick={() => chooseModule(m.id)}
                className={selected.includes(m.id) ? "selected" : ""}
              >
                <m.icon size={24} />
                {m.formal}
                {selected.includes(m.id) ? (
                  <Check size={18} />
                ) : (
                  <Plus size={18} />
                )}
              </button>
            ))}
          </div>
          <div className="plan-summary" aria-live="polite">
            <span>
              {selected.length
                ? `${selected.length} module${selected.length !== 1 ? "s" : ""} in your workspace`
                : "Choose a module to begin"}
            </span>
            <strong>Contact for pricing</strong>
          </div>
          <p className="preview-notice">
            Local concept preview. No subscription or payment is created.
            Features and availability are subject to confirmation.
          </p>
          <button
            className="action"
            disabled={!selected.length}
            onClick={() => setSent(true)}
          >
            Review this combination <Arrow />
          </button>
          {sent && (
            <p className="plan-result" role="status">
              Your combination:{" "}
              {modules
                .filter((m) => selected.includes(m.id))
                .map((m) => m.formal)
                .join(" + ")}
              . This selection is for exploration only.
            </p>
          )}
        </>
      )}
      {type === "account" && (
        <>
          <p>A focused place for your everyday business tools.</p>
          <div className="account-preview">
            <Stack size={42} weight="light" />
            <h3>Account access is a future connection.</h3>
            <p>
              This landing-page preview doesn’t authenticate users or collect
              passwords.
            </p>
          </div>
          <Action onClick={onClose}>Keep exploring</Action>
        </>
      )}
      {type === "choice" && (
        <>
          <p>
            Your preference is saved in this browser. Tell Codex which direction
            you chose to continue building the website.
          </p>
          <div className="choice-image">
            <img
              src={asset(`${direction.image}.webp`)}
              alt={`${direction.name} brand direction`}
            />
            <span>
              {direction.number} / {direction.name}
            </span>
          </div>
          <button
            className="action"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(
                  `Continue the OrgTik website with the ${direction.name} direction.`,
                );
                setCopied(true);
              } catch {
                setError(
                  `Continue the OrgTik website with the ${direction.name} direction.`,
                );
              }
            }}
          >
            {copied
              ? "Copied — paste it in the conversation"
              : "Copy my choice"}
            {copied ? <Check size={20} /> : <Copy size={20} />}
          </button>
          {error && <p role="status">{error}</p>}
        </>
      )}
    </dialog>
  );
}

export function useReveals() {
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const els = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    els.forEach((el) => {
      el.classList.add("will-reveal");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [reduced]);
}
