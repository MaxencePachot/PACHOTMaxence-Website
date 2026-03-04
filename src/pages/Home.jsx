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
              <img className="img" src="/diplome.jpg" alt="ProfilePicture" style={{ display: 'block', margin: '0 auto', width: '40%' }} />
            </div>
            <div className="card-body text-center">
              <h6 className="card-category text-gray">Data Engineer & DBA Oracle</h6>
              <h4 className="card-title">Maxence PACHOT</h4>
              <p className="card-description text-left">
                I&apos;m a 25-year-old data engineer with a passion for data. Specialising in the design and optimisation of data pipelines, I work with large volumes of data and the integration of various sources.
                Outside of work, I&apos;m a keen football fan, enjoying both the game and analysing team performance data.
              </p>
              <a href="/maxence_pachot_cv.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-round">My CV</a>
              <span> </span>
              <a href="mailto:pachot.maxence@gmail.com" className="btn btn-primary btn-round">Email Me!</a>
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
              <div className="mb-3">
                <img src="/gmail.svg" alt="GMail" style={{ width: '24px', height: '24px', verticalAlign: 'middle', marginRight: '4px' }} />
                <a href="mailto:pachot.maxence@gmail.com" target="_blank" rel="noopener noreferrer">
                  pachot.maxence@gmail.com
                </a>
              </div>
              <div className="mb-3">
                <img src="/linkedin.svg" alt="LinkedIn" style={{ width: '24px', height: '24px', verticalAlign: 'middle', marginRight: '4px' }} />
                <a href="https://www.linkedin.com/in/maxence-pachot-6801761b7" target="_blank" rel="noopener noreferrer">
                  LinkedIn @MaxencePachot
                </a>
              </div>
              <div>
                <img src="/github.svg" alt="GitHub" style={{ width: '24px', height: '24px', verticalAlign: 'middle', marginRight: '4px' }} />
                <a href="https://github.com/MaxencePachot" target="_blank" rel="noopener noreferrer">
                  GitHub @MaxencePachot
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
