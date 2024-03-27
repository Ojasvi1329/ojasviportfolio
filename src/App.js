import React from "react";
import ReactDOM from "react-dom";
import { Element } from "react-scroll";
import Navbar from "./component/Navbar";
import SocialLinks from "./component/SocialLinks";
import About from "./component/About";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import ParentComponent from "./component/ParentComponent";
import Experience from "./component/Experience";
import Education from "./component/Education";

function App() {
  return (
    <div>
      <Navbar />
      <Element name="home">
        <ParentComponent />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="education">
        <Education />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <SocialLinks />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));




