import React from 'react';
import './index.css';

const Home = () => {
    return (
        <div className="home-container">
            <header>
                <h1>Hello, I'm [Your Name]</h1>
                <p>Aspiring Web Developer</p>
            </header>
            <section className="about">
                <h2>About Me</h2>
                <p>I'm a passionate web developer with a focus on creating user-friendly and visually appealing websites. My goal is to blend creativity with technical expertise to deliver impactful digital experiences.</p>
            </section>
            <section className="projects">
                <h2>Projects</h2>
                <div className="project-card">
                    <img src="project-image.jpg" alt="Project Name" />
                    <h3>Project Name</h3>
                    <p>Description of the project.</p>
                </div>
                {/* Add more project cards here */}
            </section>
            <section className="contact">
                <h2>Contact Me</h2>
                <p>Feel free to reach out to me at [Your Email] or connect on [Your LinkedIn Profile]. Let's collaborate on exciting projects!</p>
            </section>
        </div>
    );
}

export default Home;
