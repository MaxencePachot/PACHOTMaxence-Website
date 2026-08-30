import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/context';

const LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'fr', label: 'Français', short: 'FR' },
];

/**
 * Language picker. A bare "FR" link was ambiguous: on an English page it read
 * as a label of the current language rather than a way out of it. The menu
 * names both languages and marks the active one, so there is nothing to guess.
 */
const LanguageMenu = ({ onNavigate }) => {
  const { lang, pathsByLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const current = LANGUAGES.find((l) => l.code === lang);

  // Tab moves focus out of the panel without a click, so the pointer handler
  // above never fires and the panel used to stay open over the page.
  const onBlur = (e) => {
    if (wrapRef.current && !wrapRef.current.contains(e.relatedTarget)) setOpen(false);
  };

  return (
    <div className="lang" ref={wrapRef} onBlur={onBlur}>
      <button
        ref={buttonRef}
        type="button"
        className="lang__button"
        aria-expanded={open}
        aria-haspopup="menu"
        // The visible label comes first so that the accessible name contains it
        // (voice control matches on it), and so screen readers announce which
        // language is active - the whole point of replacing the bare "FR" link.
        aria-label={`${current.short}, ${current.label} - ${t.nav.language}`}
        onClick={() => setOpen((v) => !v)}
      >
        <svg className="lang__globe" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9s1.3-6.4 3.8-9z" />
        </svg>
        <span className="lang__code">{current.short}</span>
        <svg className="lang__caret" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
          <path d="M2 4.5 6 8.5 10 4.5" />
        </svg>
      </button>

      {open ? (
        <ul className="lang__menu" role="menu">
          {LANGUAGES.map((l) => (
            <li key={l.code} role="none">
              <Link
                role="menuitem"
                className={`lang__item${l.code === lang ? ' is-current' : ''}`}
                to={pathsByLang[l.code]}
                hrefLang={l.code}
                lang={l.code}
                aria-current={l.code === lang ? 'true' : undefined}
                onClick={() => {
                  setOpen(false);
                  onNavigate?.();
                }}
              >
                <span className="lang__item-short">{l.short}</span>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default LanguageMenu;
