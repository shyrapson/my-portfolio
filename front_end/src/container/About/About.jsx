import React from 'react'
import {motion} from 'framer-motion'
import { images } from "../../constants";

import './About.scss'
const abouts = [
  {title:'Web Development', description:'Based on a project created by me or another one, sent by you, I can program the website to be fully functional and responsive.', imageUrl:images.about01,},
  {title:'Frontend Development', description:'I am a good frontend developer',imageUrl:images.about03},
  {title:'Maintainace', description:'In case of any problems or the need for changes, I can introduce new functionalities and solutions.',imageUrl:images.about04},
  {title:'Web Animations', description:'I am good at web animation',imageUrl:images.about02},
]

function About() {
  return (
   <>
   <h2 className='head-text'>
 I Know That  <span>Good Apps</span><br/> means <span>Good Business</span>
     </h2>
     <div className="app__profiles">
{abouts.map((about,index)=>(
  <motion.div 
  whileInView={{opacity:1}}
  whileHover={{scale:1.1}}
  transition={{duration:0.5, type:'tween'}}
  className="app__profile-item"
  key={about.title + index}
  >
    <img src={about.imageUrl} alt={about.title}/>
    <h2 className='bold-text' style={{marginTop:20}}>{about.title}</h2>
    <p className='p-text' style={{marginTop:10}}>{about.description}</p>

  </motion.div>
))}
     </div>
     </>
  )
}

export default About