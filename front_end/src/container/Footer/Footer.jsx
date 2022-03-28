import React, { useEffect, useState } from "react";
import "./Footer.scss";
import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";

function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { name, email, message } = formData;

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:meetshyrapson@gmail.com" className="p-text">
            meetshyrapson@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+2347033777762" className="p-text">
            +2347033777762
          </a>
        </div>
      </div>
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="your name"
            name="username"
            // value={username}
          />
        </div>
        <div className="app__flex">
          <input
            className="p-text"
            type="text"
            placeholder="Your Email"
            name="email"
            // value={email}
          />
        </div>
        <div>
          <textarea
            className="p-text"
            type="text"
            placeholder="Your Message"
            name="message"
            // value={message}
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
