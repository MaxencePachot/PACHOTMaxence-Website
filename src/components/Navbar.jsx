import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">Maxence PACHOT</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" data-toggle="collapse" data-target="#navbarNavDropdown">Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/maxence_pachot_cv.pdf" target="_blank" rel="noopener noreferrer">CV</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects" data-toggle="collapse" data-target="#navbarNavDropdown">Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
