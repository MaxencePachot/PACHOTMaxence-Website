import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/context';

/**
 * The mobile menu is driven by React state rather than Bootstrap's JS bundle,
 * so the page ships no jQuery and no third-party script.
 */
const Navbar = () => {
  const { t, path, altPath, other } = useLanguage();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const close = () => setOpen(false);

  return (
    <>
      <a className="skip-link" href="#content">
        {t.nav.skip}
      </a>

      <nav className="navbar navbar-expand-lg sticky-top site-nav">
        <div className="container">
          <Link className="navbar-brand" to={path('home')} onClick={close}>
            {t.nav.brand}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-controls="site-nav-menu"
            aria-expanded={open}
            aria-label={t.nav.menu}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            id="site-nav-menu"
            className={`collapse navbar-collapse justify-content-end${open ? ' show' : ''}`}
          >
            <ul className="navbar-nav align-items-lg-center">
              <li className="nav-item">
                <NavLink className="nav-link" to={path('home')} onClick={close} end>
                  {t.nav.home}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to={path('projects')} onClick={close}>
                  {t.nav.projects}
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href={t.cvFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                >
                  {t.nav.cv}
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link nav-lang"
                  to={altPath}
                  hrefLang={other}
                  lang={other}
                  onClick={close}
                  title={t.nav.switchTo}
                >
                  <span aria-hidden="true">{t.nav.switchShort}</span>
                  <span className="visually-hidden">{t.nav.switchTo}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
