import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import AppWrap from '../../wrapper/AppWrap';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: 1.9 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">HEY, MY NAME IS </p>
              <p className="p-text">
                <span style={{ color: 'red', fontSize: '18px' }}>
                  RABIU SAIDU
                </span>
                , I'M A
              </p>
              <p className="p-text">
                WEB DEVELOPER. I LOVE BUILDING NICE EXPERIENCES FOR STARTUPS &
                AGENCIES.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile-bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          all="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variant={{ scaleVariants }}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.typescript, images.next].map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, 'home');
