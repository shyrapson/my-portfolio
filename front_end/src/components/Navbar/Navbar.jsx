import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = ({toggleTheme,theme}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
       <h1>R<img src={images.my} alt="img"/>BIU</h1> 
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "contact", "work", "skills"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              {["home", "about", "contact", "work", "skills"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      <div onClick={()=>toggleTheme()} id="toggle">
            {theme==='light-theme'?<span>🌙</span>: <span>💡</span>}
      </div>
    </nav>
  );
};

export default Navbar;
