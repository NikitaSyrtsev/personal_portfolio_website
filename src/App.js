import React from 'react';
import { Routes, Route } from 'react-router-dom';

import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Hero from "./components/Hero"

import {Layout} from "./components/Layout";

function App() {
  return (
    // <div>
    //     <Header />
    //     <Hero />
    //     <About />
    //     <Services />
    //     <Skills />
    //     <Portfolio />
    //     <Contact />
    //     <Footer />
    // </div>

      <>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path="/" element={<Hero />}/>
                  <Route path="/home" element={<Hero />}/>
                  <Route path="/about" element={<About />}/>
                  <Route path="/services" element={<Services />}/>
                  <Route path="/projects" element={<Portfolio />}/>
                  <Route path="/contact" element={<Contact />}/>
              </Route>
          </Routes>
      </>
  );
}

export default App;
