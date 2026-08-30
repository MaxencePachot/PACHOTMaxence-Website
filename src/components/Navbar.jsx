import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import LanguageMenu from './LanguageMenu';
import { useLanguage } from '../i18n/context';

/**
 * The mobile menu is driven by React state rather than Bootstrap's JS bundle,
 * so the page ships no jQuery and no third-party script.
 */
const Navbar = () => {
  const { t, path } = useLanguage();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const togglerRef = useRef(null);

  useEffect(() => setOpen(false), [pathname]);

  // The open mobile menu used to answer to nothing but the toggler: tapping the
  // page behind it or pressing Escape left it sitting there, and the toggler
  // shows the same three bars open or closed, so there was no way out on offer.
  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      // The language panel lives inside this menu and closes on Escape too.
      // While it is open, Escape belongs to it.
      if (e.key !== 'Escape' || document.querySelector('.lang__menu')) return;
      setOpen(false);
      togglerRef.current?.focus();
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <a className="skip-link" href="#content">
        {t.nav.skip}
      </a>

      <nav className="navbar navbar-expand-lg sticky-top site-nav" ref={navRef}>
        <div className="container">
          <Link className="navbar-brand" to={path('home')} onClick={close}>
            {t.nav.brand}
          </Link>

          <button
            ref={togglerRef}
            className="navbar-toggler"
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-controls="site-nav-menu"
            aria-expanded={open}
            aria-label={open ? t.nav.menuClose : t.nav.menu}
          >
            <svg className="nav-toggle-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
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
                  <span className="visually-hidden"> {t.nav.newTab}</span>
                </a>
              </li>
              <li className="nav-item">
                <LanguageMenu onNavigate={close} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
