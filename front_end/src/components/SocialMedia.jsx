import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div div className="app__social">
      <div>
      <a href="https://twitter.com/shyrapson">  <BsTwitter /></a>
      </div>
    
      
      <div>
      <a href="https://en-gb.facebook.com/rapson19">
        <FaFacebook />
      </a>
      </div>
     <div>
     <a href="https://www.instagram.com/saeedrabil/">
        <BsInstagram />
      </a>
     </div>
   
    </div>
  );
};

export default SocialMedia;
