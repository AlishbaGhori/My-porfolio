import { Link, Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

const Root = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a
            className="navbar-brand"
            href="#"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <div>
              <img
                src="https://cdn.freebiesupply.com/images/thumbs/1x/apex-legends-symbol.png"
                style={{
                  marginLeft: '4px',
                  width: '40%',
                  height: '40%',
                  marginRight: '10px',
                }}
                alt="Navbar Logo"
              />

              <p style={{ marginLeft: '2px' }}>
                <h4>Alishba Ghori</h4>
              </p>
            </div>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/aboutme">
                  About Me
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Outlet />

        <img
          src="./project img 3.jpeg"
          className="card-img-top"
          alt="image"
          style={{ width: '80vh', height: '50%' }}
        />
        <div className="card-body">
          <h5 className="card-title">About project</h5>
          <p className="card-text">Daraz App</p>
          <Link to="https://cmsblogfrontend.vercel.app/">View Project</Link>
        </div>
      </div>
      );
      <footer className="footer">
        <p>&copy; 2023 AlishbaGhori. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/">GitHub</a>
          <br />
          <a href="https://www.linkedin.com/feed/">LinkedIn</a>
        </div>
      </footer>
      {/* Existing navigation */}
      {/* Outlet */}
      <BottomNav />
      {/* </> */}
      );
    </>
  );
};

export default Root;
