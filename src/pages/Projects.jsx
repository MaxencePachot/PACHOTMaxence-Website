import Navbar from '../components/Navbar';
import Seo from '../components/Seo';
import { useLanguage } from '../i18n/context';
import { PROJECT_LOGOS } from '../i18n/logos';

const ProjectCard = ({ project, labels }) => {
  const logos = PROJECT_LOGOS[project.id] ?? [];

  return (
    <article className="panel project" aria-labelledby={`${project.id}-title`}>
      <div className="panel__header">
        <h2 className="panel__title" id={`${project.id}-title`}>
          {project.title}
        </h2>
        <p className="project__meta">
          <span>{project.role}</span>
          <span className="project__sep" aria-hidden="true">
            ·
          </span>
          <span>{project.sector}</span>
          <span className="project__sep" aria-hidden="true">
            ·
          </span>
          <span>{project.period}</span>
        </p>
      </div>

      <div className="panel__body">
        <p className="callout">
          <strong>{labels.outcome} - </strong>
          {project.outcome}
        </p>

        {project.sections.map((section) => (
          <div className="project__section" key={section.title}>
            <h3 className="project__section-title">{section.title}</h3>
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

        <div className="project__section">
          <h3 className="project__section-title">{labels.stack}</h3>
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
    </article>
  );
};

const Projects = () => {
  const { t } = useLanguage();

  return (
    <>
      <Seo page="projects" />
      <Navbar />

      <main id="content" className="container section">
        <header className="page-head">
          <h1 className="page-head__title">{t.projects.heading}</h1>
          <p className="page-head__intro">{t.projects.intro}</p>
        </header>

        {t.projects.items.map((project) => (
          <ProjectCard key={project.id} project={project} labels={t.projects.labels} />
        ))}
      </main>
    </>
  );
};

export default Projects;
