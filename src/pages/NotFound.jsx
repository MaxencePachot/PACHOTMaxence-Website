import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Seo from '../components/Seo';
import { useLanguage } from '../i18n/context';

const NotFound = () => {
  const { t, path } = useLanguage();

  return (
    <>
      <Seo page="notFound" />
      <Navbar />
      <main id="content" className="container section">
        <div className="panel">
          <div className="panel__header">
            <h1 className="panel__title">404 - {t.notFound.title}</h1>
          </div>
          <div className="panel__body">
            <p>{t.notFound.body}</p>
            <Link className="btn btn-dark" to={path('home')}>
              {t.notFound.cta}
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
