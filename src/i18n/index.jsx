import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import en from './en';
import fr from './fr';
import { LanguageContext } from './context';
import { ROUTES, langFromPath, pageFromPath } from './routes';

const DICTIONARIES = { en, fr };

/**
 * The URL is the single source of truth for the active language, so there is
 * no toggle state that can drift away from the address bar.
 */
export const LanguageProvider = ({ children }) => {
  const { pathname } = useLocation();

  const value = useMemo(() => {
    const lang = langFromPath(pathname);
    const other = lang === 'en' ? 'fr' : 'en';
    const page = pageFromPath(pathname);

    return {
      lang,
      other,
      page,
      t: DICTIONARIES[lang],
      // A path in the active language: path('projects') -> '/fr/projets'.
      path: (key) => ROUTES[key][lang],
      // The same page in the other language; unknown pages fall back to home.
      altPath: page ? ROUTES[page][other] : ROUTES.home[other],
    };
  }, [pathname]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
