import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Root from './root';
import Project1 from './project1';
import Home from './home';
import BottomNav from './BottomNav';
const routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <home />,
      },
      {
        path: 'home',
        element: <home />,
      },
      {
        path: 'aboutme',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'projects',
        element: <Projects />,
        children: [
          {
            path: 'project1',
            element: <Project1 />,
          },
        ],
      },
    ],
  },
]);






const home = () => {
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

      
        
      
    </>
  );
};

export default home;









ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
/////////////////////
