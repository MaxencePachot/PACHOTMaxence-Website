import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navbarCollapseRef = useRef(null);

  const closeMenu = () => {
    const nav = navbarCollapseRef.current;
    if (nav && nav.classList.contains('show')) {
      nav.classList.remove('show');
    }
  };

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Maxence PACHOT</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown" ref={navbarCollapseRef}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/maxence_pachot_cv.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>CV</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" onClick={closeMenu}>Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
