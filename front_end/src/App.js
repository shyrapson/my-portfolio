import React, { useState, useEffect } from 'react';
import { Navbar } from './components/index.js';
import {
  About,
  Skills,
  Header,
  Work,
  Testimonial,
  Footer,
} from './container/index.js';

import './App.scss';
import CustomCursor from './config.js';

const getStorageTheme = () => {
  let theme = 'dark-theme';

  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
    return theme;
  }
};

const App = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="app">
      <CustomCursor />
      <Navbar toggleTheme={toggleTheme} theme={theme} />
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
