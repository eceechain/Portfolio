// Home.js

import React from 'react';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <h2 className="home-heading">Welcome to My Portfolio!</h2>
      <p className="home-intro">
        Hello, I'm [Ecee Chain], a passionate and creative web developer based in [Nairobi, Kenya]. I specialize in building modern and responsive web applications using technologies such as React, Node.js, and more.
      </p>
      <p className="home-description">
        In my journey as a developer, I have successfully delivered projects that focus on user experience, performance, and clean code. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
      </p>
      <div className="home-section">
        <h3 className="home-subheading">Skills</h3>
        <ul className="home-list">
          <li>React.js</li>
          <li>Node.js</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5, CSS3</li>
          <li>Responsive Web Design</li>
          <li>Git and Version Control</li>
          {/* Add more skills as needed */}
        </ul>
      </div>
      <div className="home-section">
        <h3 className="home-subheading">Projects</h3>
        <div className="home-project">
          <h4>Project 1: [React Router]</h4>
          <p>
            [Brief description of Project 1. What technologies were used? What was your role?]
          </p>
          {/* Repeat for additional projects */}
        </div>
      </div>
      <div className="home-section">
        <h3 className="home-subheading">Let's Connect!</h3>
        <p className="home-call-to-action">
          Thank you for visiting my portfolio! If you're interested in working together or have any inquiries, please feel free to reach out through the contact section.
        </p>
      </div>
    </div>
  );
}

export default Home;
