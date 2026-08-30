import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import { LanguageProvider } from './i18n';
import { ROUTES } from './i18n/routes';
import './styles.css';

const App = () => (
  <BrowserRouter>
    <LanguageProvider>
      <div className="app-shell">
        <Routes>
          <Route path={ROUTES.home.en} element={<Home />} />
          <Route path={ROUTES.projects.en} element={<Projects />} />
          <Route path={ROUTES.home.fr} element={<Home />} />
          <Route path={ROUTES.projects.fr} element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </LanguageProvider>
  </BrowserRouter>
);

export default App;
