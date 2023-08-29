import { Link, Outlet } from 'react-router-dom';

const Projects = () => {
  return (
    <>
      <h1>My Projects</h1>

      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="card shadow-sm border-0">
            {/* <div className="col-md-6">
          <div className="card"> */}
            <img
              src="./project image 1.jpeg"
              className="card-img-top"
              alt="Project" style={{width: '40%',
              height: '40%'}}
            />
            <div className="card-body">
              <h5 className="card-title">About project</h5>
              <p className="card-text">
                calculator App
              </p>
              <Link to="https://iridescent-unicorn-f48b3a.netlify.app/">View Project</Link>
            </div>


            <img
              src="./project image 2.jpeg"
              className="card-img-top"
              alt="image"  style={{width: '40%',
              height: '40%' }}
            />
            <div className="card-body">
              <h5 className="card-title">About project</h5>
              <p className="card-text">
                Daraz App
              </p>
              <Link to="https://daraaz.netlify.app/">View Project</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Projects;
