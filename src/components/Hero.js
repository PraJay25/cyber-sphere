import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Turning Vision Into Reality With Code And Design.</h1>
        <p>
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </p>
        <div className="cta-buttons">
          <a href="#resume" className="btn">
            Resume
          </a>
          <a href="#contact" className="btn-secondary">
            Contact
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src="" alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;
