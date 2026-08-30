import { useLanguage } from '../i18n/context';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="site-footer mt-auto">
      <div className="container">
        <p className="site-footer__line">
          © {new Date().getFullYear()} Maxence PACHOT. {t.footer.rights}
        </p>
        <p className="site-footer__line site-footer__muted">
          {t.footer.builtWith}{' '}
          <a
            href="https://github.com/MaxencePachot/mon-site-perso"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
