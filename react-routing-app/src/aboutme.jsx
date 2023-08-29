// const About = () => {
//   return (
//     <>
//       <h1>About me</h1>
//       <p>Hello</p>
//     </>
//   );
// };

// export default About;

import React from 'react';
import './index.css';

const About = () => {
  return (
    <div className="about">
      {/*     
      <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/170627419/original/9962050ad1cdba04cbbb57867f317d035f404e7d/do-responsive-front-end-web-development-in-react-nodejs-html-css-bootstrap.png"/ > */}

      <div className="image-container">
        <img
          src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/170627419/original/9962050ad1cdba04cbbb57867f317d035f404e7d/do-responsive-front-end-web-development-in-react-nodejs-html-css-bootstrap.png"
          alt="Centered Image"
          className="centered-image"
        />
      </div>

      {/* <p>Introduction:
Hi, I'm [Your Name], a passionate web developer with [X] years of experience in creating user-friendly and innovative websites. I'm dedicated to crafting seamless digital experiences that blend functionality, aesthetics, and cutting-edge technologies.

<h2>Skills:</h2>
<ul>
  <li>
Front-End Development: Proficient in HTML, CSS, and JavaScript, I specialize in crafting responsive and visually appealing user interfaces. I'm well-versed in modern front-end frameworks such as React and Vue.js, allowing me to build dynamic and interactive web applications.</li>
Back-End Development: I have a strong foundation in back-end technologies like Node.js and Express, enabling me to develop robust server-side logic and APIs. I'm also experienced with databases such as MongoDB and MySQL.
Full-Stack Proficiency: My comprehensive understanding of both front-end and back-end technologies enables me to create end-to-end solutions that deliver a seamless user experience.
Experience:
In my [X] years of experience, I've had the privilege to work with a diverse range of clients and projects. I've contributed to building e-commerce platforms, content management systems, and custom web applications that cater to specific business needs. I'm adept at collaborating with cross-functional teams, ensuring that projects are delivered on time and exceed client expectations.

Portfolio Highlights:

Created a responsive e-commerce website for [Client Name], resulting in a [X]% increase in online sales and improved user engagement.
Developed a real-time chat application using React and Firebase, enhancing user communication and interaction on [Project Name].
Collaborated with designers to bring intricate UI/UX designs to life for [Client Name]'s branding website, enhancing brand presence and customer engagement.
Passion and Learning:
Web development is not just my profession; it's my passion. I stay updated with the latest industry trends and emerging technologies, always eager to expand my skill set. I actively participate in online coding communities, attend tech meetups, and engage in continuous learning to ensure that my work is at the forefront of innovation.

Conclusion:
As a dedicated web developer, I'm committed to delivering exceptional web solutions that resonate with users and meet business objectives. I thrive in a dynamic and collaborative environment, where I can contribute my expertise to create impactful digital experiences.

Feel free to reach out to me at [Your Email] or [Your LinkedIn Profile] to discuss how I can help you bring your web development projects to life.

Remember to personalize this template with your own experiences, achievements, and unique qualities as a web developer. Keep it concise, showcase your strengths, and convey your enthusiasm for web development to make a strong impression on potential employers or clients. */}

      <h2>Introduction:</h2>
      <p>
        Hello, I'm [Your Name], an aspiring web developer excited about
        embarking on my journey in the world of web development. With a passion
        for creating meaningful digital experiences, I'm eager to contribute my
        skills and learn from the ever-evolving landscape of web technologies.
      </p>

      <h2>Skills and Learning:</h2>
      <ul>
        <li>
          <strong>HTML and CSS:</strong> I have a solid understanding of HTML
          and CSS, allowing me to create well-structured web pages and style
          them effectively.
        </li>
        <li>
          <strong>Basic JavaScript:</strong> I'm learning the fundamentals of
          JavaScript to enhance interactivity and functionality on my projects.
        </li>
        <li>
          <strong>Responsive Design:</strong> I'm committed to building websites
          that look and function seamlessly across various devices and screen
          sizes.
        </li>
        <li>
          <strong>Version Control:</strong> I'm familiarizing myself with Git
          and GitHub to collaborate on projects and track changes effectively.
        </li>
      </ul>

      <h2>Projects:</h2>
      <ul>
        <li>
          Created a personal portfolio website showcasing my skills, projects,
          and journey as a web developer.
        </li>
        <li>
          Developed a static landing page for a local event, incorporating
          responsive design principles for optimal user experience.
        </li>
        <li>
          Built a basic to-do list application using HTML, CSS, and JavaScript
          to practice my coding skills.
        </li>
      </ul>

      <h2>Learning Approach:</h2>
      <p>
        I believe in the power of continuous learning. I'm enrolled in online
        coding courses and tutorials to deepen my understanding of web
        development concepts. I'm excited to explore frameworks like Bootstrap
        and JavaScript libraries like jQuery to expand my skill set.
      </p>

      <h2>Collaboration and Growth:</h2>
      <p>
        While I'm still in the early stages of my web development journey, I'm
        eager to collaborate with experienced developers, designers, and fellow
        beginners to learn from their insights and feedback. I value
        constructive criticism and see it as an opportunity to improve and grow.
      </p>

      <h2>Future Goals:</h2>
      <p>
        My goal is to become a proficient full-stack web developer. I'm excited
        to delve into back-end technologies like Node.js and databases to create
        more dynamic and interactive web applications.
      </p>

      <h2>Conclusion:</h2>
      <p>
        As a beginner web developer, I'm committed to building a strong
        foundation in web development while fostering a growth mindset. I'm
        enthusiastic about the challenges and learning opportunities that lie
        ahead and look forward to contributing my creativity to the world of web
        development.
      </p>
      <p>
        Let's connect! You can reach me at [Your Email] or find me on [Your
        LinkedIn Profile] to discuss collaboration, learning opportunities, or
        any exciting web projects.
      </p>
    </div>
  );
};

export default About;
