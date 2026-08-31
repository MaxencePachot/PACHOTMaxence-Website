import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Seo from '../components/Seo';
import { useLanguage } from '../i18n/context';
import { PROJECT_LOGOS } from '../i18n/projectConfig';

const ProjectRow = ({ project, labels, open, onToggle }) => {
  const logos = PROJECT_LOGOS[project.id] ?? [];
  const panelId = `${project.id}-panel`;
  const buttonId = `${project.id}-button`;

  return (
    <article id={project.id} className={`pj${open ? ' is-open' : ''}`}>
      <h2 className="pj__heading">
        <button
          type="button"
          id={buttonId}
          className="pj__button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span className="pj__text">
            <span className="pj__title">{project.title}</span>
            <span className="pj__meta">
              {project.role}
              <span className="pj__sep" aria-hidden="true">
                ·
              </span>
              {project.sector}
            </span>
          </span>
          <span className="pj__period">{project.period}</span>
          <span className="pj__mark" aria-hidden="true">
            <svg viewBox="0 0 16 16" focusable="false">
              <path d="M3 8h10" />
              <path className="pj__mark-bar" d="M8 3v10" />
            </svg>
          </span>
        </button>
      </h2>

      <div className="pj__panel" id={panelId} role="region" aria-labelledby={buttonId}>
        <div className="pj__panel-clip">
          <div className="pj__body">
            <p className="pj__outcome">
              <strong>{labels.outcome} </strong>
              {project.outcome}
            </p>

            {project.sections.map((section) => (
              <div className="pj__section" key={section.title}>
                <h3 className="pj__section-title">{section.title}</h3>
                {section.body ? <p>{section.body}</p> : null}
                {section.items ? (
                  <ul className="ticks">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

            <div className="pj__section">
              <h3 className="pj__section-title">{labels.stack}</h3>
              <ul className="chips">
                {project.stack.map((item) => (
                  <li className="chip chip--stack" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {logos.length ? (
              <div className="logos" aria-hidden="true">
                {logos.map((logo) => (
                  <img
                    key={logo.src + logo.alt}
                    className={`logo${logo.variant ? ` logo--${logo.variant}` : ''}`}
                    src={logo.src}
                    alt=""
                    loading="lazy"
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
};

// Run `action` once the panel of `id` has finished its height animation.
// Both the deep link and a plain click need this: until the panels settle,
// every position on the page is still moving. The panel may already be at its
// final height, in which case no transition fires at all, hence the timeout.
// Returns a cancel function.
const afterPanelSettles = (id, action) => {
  const panel = document.querySelector(`#${CSS.escape(id)} .pj__panel`);
  if (!panel) {
    action();
    return () => {};
  }

  let fallback;
  const done = (event) => {
    if (event && event.propertyName !== 'grid-template-rows') return;
    panel.removeEventListener('transitionend', done);
    window.clearTimeout(fallback);
    action();
  };

  panel.addEventListener('transitionend', done);
  // Comfortably clear of the 0.28s transition declared in styles.css. Whichever
  // of the two fires first removes the other, so `action` runs exactly once.
  fallback = window.setTimeout(done, 400);

  return () => {
    panel.removeEventListener('transitionend', done);
    window.clearTimeout(fallback);
  };
};

const Projects = () => {
  const { t } = useLanguage();
  const { hash } = useLocation();

  // The first project opens by default: a page of six closed rows does not
  // show that they open at all, and this is the one worth reading first.
  const [openId, setOpenId] = useState(t.projects.items[0].id);

  // Cancels a scroll that is still waiting on a panel transition, so a second
  // click does not get overruled by the first one landing late.
  const pending = useRef(null);

  // A shared link like /fr/projets#oracle-dba must open the project it points
  // at, and land on it.
  //
  // Two things move the target after the initial render, and scrolling before
  // either has settled lands hundreds of pixels off:
  //   - the web fonts apply after first paint and shorten the page,
  //   - the panel itself grows, since we just opened it.
  // So: wait for the fonts, open the panel, wait for its height transition,
  // and only then scroll.
  useEffect(() => {
    const id = decodeURIComponent(hash.slice(1));
    if (!id || !t.projects.items.some((item) => item.id === id)) return undefined;

    setOpenId(id);

    let cancelled = false;

    const afterPanelOpens = () => {
      if (cancelled) return;
      pending.current = afterPanelSettles(id, () => {
        pending.current = null;
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ block: 'start' });
      });
    };

    if (document.fonts && document.fonts.status !== 'loaded') {
      document.fonts.ready.then(() => window.requestAnimationFrame(afterPanelOpens));
    } else {
      window.requestAnimationFrame(afterPanelOpens);
    }

    return () => {
      cancelled = true;
      if (pending.current) {
        pending.current();
        pending.current = null;
      }
    };
  }, [hash, t]);

  // Opening a row collapses the one above it, and those panels are tall. The
  // page shrinks under the visitor, so the row they just clicked slides off the
  // top of the screen: measured at -796px on #dpaas, which left the click
  // showing the tail of a panel and no heading at all. Once the panels have
  // settled, pull the row back if it ended up above the viewport.
  const handleToggle = (id) => {
    const willOpen = openId !== id;
    setOpenId(willOpen ? id : null);
    if (!willOpen) return;

    if (pending.current) {
      pending.current();
      pending.current = null;
    }

    // One frame, so React has committed and the transition has actually begun.
    window.requestAnimationFrame(() => {
      pending.current = afterPanelSettles(id, () => {
        pending.current = null;
        const el = document.getElementById(id);
        if (!el) return;
        // scroll-margin-top on .pj is what keeps a row clear of the fixed
        // navbar; read it rather than repeating the number here.
        const clearance = parseFloat(window.getComputedStyle(el).scrollMarginTop) || 0;
        if (el.getBoundingClientRect().top < clearance) el.scrollIntoView({ block: 'start' });
      });
    });
  };

  return (
    <>
      <Seo page="projects" />
      <Navbar />

      <main id="content" className="container section">
        <header className="page-head">
          <h1 className="page-head__title">{t.projects.heading}</h1>
          <p className="page-head__intro">{t.projects.intro}</p>
        </header>

        <div className="pj-list">
          {t.projects.items.map((project) => (
            <ProjectRow
              key={project.id}
              project={project}
              labels={t.projects.labels}
              open={openId === project.id}
              onToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default Projects;
