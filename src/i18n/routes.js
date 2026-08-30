// Every page exists at one URL per language. The URL is the single source of
// truth for the active language - there is no toggle state to get out of sync.
export const SITE_URL = 'https://pachotmaxence.com';

export const LANGS = ['en', 'fr'];

export const ROUTES = {
  home: { en: '/', fr: '/fr' },
  projects: { en: '/projects', fr: '/fr/projets' },
};

export const langFromPath = (pathname) =>
  pathname === '/fr' || pathname.startsWith('/fr/') ? 'fr' : 'en';

export const pageFromPath = (pathname) => {
  const hit = Object.entries(ROUTES).find(([, paths]) =>
    Object.values(paths).includes(pathname)
  );
  return hit ? hit[0] : null;
};
