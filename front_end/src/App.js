import React from "react";
import { Navbar } from "./components/index.js";
import {About, Skills, Header, Work,Testimonial, Footer,} from "./container/index.js";
import './App.scss'
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
