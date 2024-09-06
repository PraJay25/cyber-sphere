import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="left-section">
        <div className="hire-me">
          <img src="Capture 1.PNG" alt="hire me" />
        </div>
        <div className="hero-image">
          <img src="Capture.PNG" alt="Profile" />
        </div>
      </div>
      {/* right sectiom */}
      <div className="right-section">
        <div className="hero-content">
          <h1>Turning Vision Into Reality With Code And Design.</h1>
          <p>
            As a skilled full-stack developer, I am dedicated to turning ideas
            into innovative web applications. Explore my latest projects and
            articles, showcasing my expertise in React.js and web development.
          </p>
          <p>new paragraph has been added here</p>
          <div className="cta-buttons">
            <a href="#resume" className="btn">
              Resume
            </a>
            <a href="#contact" className="btn-secondary">
              Contact
            </a>
          </div>
        </div>
        <div className="idea">
          <img src="Capture3.PNG" alt="idea" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
