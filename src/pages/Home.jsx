import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Resume from "../components/Resume";          // New Component
import Blog from "../components/Blog";              // New Component
import Certifications from "../components/Certifications";  // New Component
import Testimonials from "../components/Testimonials";      // New Component

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />        {/* Add the new Resume section */}
      <Blog />          {/* Add the new Blog section */}
      <Certifications />{/* Add Certifications section */}
      <Testimonials />  {/* Add Testimonials section */}
      <Contact />
    </div>
  );
};

export default Home;
