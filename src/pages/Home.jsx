import React from 'react';
import Navbar from '../components/Navbar';
import '../styles.css';

const Home = () => {
  return (
    <div style={{ fontFamily: 'Poppins, Arial, sans-serif' }}>
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="card card-profile">
            <div className="card-avatar">
              <center><img className="img" src="/diplome.jpg" alt="ProfilePicture" width="40%" /></center>
            </div>
              <div className="card-body">
                <center>
                  <h6 className="card-category text-gray">Data Engineer & DBA Oracle</h6>
                  <h4 className="card-title">Maxence PACHOT</h4>
                </center>
                <p className="card-description">
                  I'm a 23-year-old data engineer with a passion for data. Specialising in the design and optimisation of data pipelines, I work with large volumes of data and the integration of various sources.
                  Outside of work, I'm a keen football fan, enjoying both the game and analysing team performance data.
                </p>
                <center><a href="mailto:pachot.maxence@gmail.com" className="btn btn-primary btn-round">Email Me!</a></center>
              </div>
            </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="card">
            <div className="card-header card-header-primary">
              <h4 className="card-title">Contact</h4>
            </div>
              <div className="card-body">
                <p className="card-description">
                  <img src="/gmail.svg" alt="GMail" style={{ width: '24px', height: '24px', verticalAlign: 'middle', marginRight: '4px' }} />
                  <a href="mailto:pachot.maxence@gmail.com" target="_blank" rel="noopener noreferrer">
                    : pachot.maxence@gmail.com
                  </a>
                  <br/>
                  <p></p>
                  <img src="/linkedin.svg" alt="LinkedIn" style={{ width: '24px', height: '24px', verticalAlign: 'middle', marginRight: '4px' }} />
                  <a href="https://www.linkedin.com/in/maxence-pachot-6801761b7" target="_blank" rel="noopener noreferrer">
                    : LinkedIn @MaxencePachot
                  </a>
                  <br/>
                  <p></p>
                  <img src="/github.svg" alt="GitHub" style={{ width: '24px', height: '24px', verticalAlign: 'middle', marginRight: '4px' }} />
                  <a href="https://github.com/MaxencePachot" target="_blank" rel="noopener noreferrer">
                    : GitHub @MaxencePachot
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;
