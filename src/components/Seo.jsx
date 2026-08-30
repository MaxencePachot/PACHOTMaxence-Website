import { useEffect } from 'react';
import { useLanguage } from '../i18n/context';
import { ROUTES, SITE_URL } from '../i18n/routes';

const OG_IMAGE = `${SITE_URL}/og-image.jpg`;

const setMeta = (selector, attr, key, content) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setLink = (rel, href, extra = {}) => {
  const attrs = Object.entries(extra)
    .map(([k, v]) => `[${k}="${v}"]`)
    .join('');
  let el = document.head.querySelector(`link[rel="${rel}"]${attrs}`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    Object.entries(extra).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

/**
 * Keeps <head> in sync with the active route and language: title, description,
 * canonical, hreflang alternates and the Open Graph / Twitter cards. Done by
 * hand rather than with a helmet library - it is a handful of tags.
 */
const Seo = ({ page }) => {
  const { lang, other, t } = useLanguage();

  useEffect(() => {
    const meta = t.meta[page];
    const canonicalPath = ROUTES[page] ? ROUTES[page][lang] : '/';
    const canonical = `${SITE_URL}${canonicalPath === '/' ? '' : canonicalPath}`;

    document.documentElement.lang = lang;
    document.title = meta.title;

    setMeta('meta[name="description"]', 'name', 'description', meta.description);
    setLink('canonical', canonical);

    setMeta('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'Maxence Pachot');
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', lang === 'fr' ? 'fr_CH' : 'en_GB');
    setMeta('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', meta.description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonical);
    setMeta('meta[property="og:image"]', 'property', 'og:image', OG_IMAGE);
    setMeta('meta[property="og:image:width"]', 'property', 'og:image:width', '1200');
    setMeta('meta[property="og:image:height"]', 'property', 'og:image:height', '630');

    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', OG_IMAGE);

    if (ROUTES[page]) {
      const url = (code) => {
        const p = ROUTES[page][code];
        return `${SITE_URL}${p === '/' ? '' : p}`;
      };
      setLink('alternate', url(lang), { hreflang: lang });
      setLink('alternate', url(other), { hreflang: other });
      setLink('alternate', url('en'), { hreflang: 'x-default' });
    }
  }, [page, lang, other, t]);

  return null;
};

export default Seo;
