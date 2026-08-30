import Navbar from '../components/Navbar';
import Section from '../components/Section';
import Seo from '../components/Seo';
import { useLanguage } from '../i18n/context';

const Home = () => {
  const { t } = useLanguage();

  return (
    <>
      <Seo page="home" />
      <Navbar />

      <main id="content">
        {/* Hero */}
        <header className="container section">
          <div className="hero">
            <div className="hero__photo">
              <picture>
                <source srcSet="/profile.webp" type="image/webp" />
                <img
                  src="/profile.jpg"
                  width="640"
                  height="515"
                  alt={t.hero.photoAlt}
                  fetchPriority="high"
                />
              </picture>
            </div>

            <div className="hero__text">
              <h1 className="hero__name">{t.hero.name}</h1>
              <p className="hero__role">{t.hero.role}</p>
              <p className="hero__stack">{t.hero.stack}</p>
              <p className="hero__location">{t.hero.location}</p>
              <p className="hero__pitch">{t.hero.pitch}</p>

              <div className="hero__actions">
                <a
                  className="btn btn-dark"
                  href={t.cvFile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t.hero.cv}
                  <span className="visually-hidden"> {t.nav.newTab}</span>
                </a>
                <a className="btn btn-outline" href={`mailto:${t.contact.email}`}>
                  {t.hero.contact}
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* What I do */}
        <Section id="what-i-do" title={t.whatIDo.heading}>
          <div className="grid grid--3">
            {t.whatIDo.items.map((item) => (
              <article className="tile" key={item.title}>
                <h3 className="tile__title">
                  <img className="tile__icon" src={item.icon} alt="" width="24" height="24" />
                  {item.title}
                </h3>
                <p className="tile__body">{item.body}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Current role */}
        <Section id="current-role" title={t.currentRole.heading}>
          <h3 className="role__title">{t.currentRole.title}</h3>
          <p className="role__meta">
            {t.currentRole.employer} · {t.currentRole.period}
          </p>
          <p className="role__body">{t.currentRole.body}</p>
          <p className="callout">{t.currentRole.highlight}</p>
        </Section>

        {/* Skills */}
        <Section id="skills" title={t.skills.heading} note={t.skills.note}>
          <div className="grid grid--2">
            {t.skills.items.map((item) => (
              <article className="tile" key={item.title}>
                <h3 className="tile__title">
                  <img className="tile__icon" src={item.icon} alt="" width="24" height="24" />
                  {item.title}
                  {item.level === 'daily' ? null : (
                    <span className={`chip chip--${item.level}`}>{t.skills.levels[item.level]}</span>
                  )}
                </h3>
                <p className="tile__body">{item.body}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Certifications */}
        <Section plain id="certifications" title={t.certifications.heading}>
          <ul className="plain-list">
            {t.certifications.items.map((item) => (
              <li className="cert" key={item.title}>
                <img className="cert__icon" src={item.icon} alt="" width="28" height="28" />
                <span>{item.title}</span>
                <span className="cert__date">{item.date}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Education */}
        <Section plain id="education" title={t.education.heading}>
          {t.education.items.map((item) => (
            <div className="entry" key={item.title}>
              <h3 className="entry__title">{item.title}</h3>
              <p className="entry__meta">{item.school}</p>
              {item.detail ? <p className="entry__detail">{item.detail}</p> : null}
            </div>
          ))}
        </Section>

        {/* Languages & status */}
        <Section plain id="about" title={t.about.heading}>
          <p>
            <strong>{t.about.languagesLabel}:</strong> {t.about.languages}
          </p>
          <p className="mb-0">
            <strong>{t.about.statusLabel}:</strong> {t.about.status}
          </p>
        </Section>

        {/* Contact */}
        <Section plain id="contact" title={t.contact.heading}>
          <ul className="plain-list contact-list">
            <li>
              <img src="/gmail.svg" alt="" width="24" height="24" />
              <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
            </li>
            <li>
              <img src="/linkedin.svg" alt="" width="24" height="24" />
              <a
                href="https://www.linkedin.com/in/maxence-pachot-6801761b7"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.contact.linkedin}
              </a>
            </li>
            <li>
              <img src="/github.svg" alt="" width="24" height="24" />
              <a href="https://github.com/MaxencePachot" target="_blank" rel="noopener noreferrer">
                {t.contact.github}
              </a>
            </li>
          </ul>
        </Section>
      </main>
    </>
  );
};

export default Home;
