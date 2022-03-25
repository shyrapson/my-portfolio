import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrap from "../../wrapper/AppWrap";
import { urlFor, client } from "../../client";
import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFileter] = useState('All')
  const handleWorkFilter = (item)=>{
        if(item){
          setActiveFileter(item)
        }
  }
  return (
    <>
      <h2 className="head-text">
        My Creative <span>Portfolio</span>
      </h2>
      <div className="app__work-filter">
        {['web App','React js','Next Js','Vanilla Js','All'].map((item,index)=>(
          <div key={index}
          onClick={()=>handleWorkFilter(item)}
          className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active':''}`}
          
          >
{item}
          </div>
        ))}
      </div>
      <motion.div>

      </motion.div>
    </>
  );
};

export default Work;
