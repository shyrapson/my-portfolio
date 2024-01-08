// import React, { useState, useRef, Children } from 'react';
// import { motion } from 'framer-motion';
// import { Header } from './container';

// export const useCustomCursor = (value) => {
//   //if user is hovering an icon, cursor locks at it
//   const [hoveringIcon, setHoveringIcon] = useState(false);

//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [[rotateX, rotateY, scaleX, scaleY], setMovementAnimation] = useState([
//     0, 0, 1, 1,
//   ]);
//   const containerRef = useRef();
//   const iconRefs = useRef(new Array());
//   const onMouseMove = (e) => {
//     if (hoveringIcon) return;
//     const { left, top } = containerRef.current.getBoundingClientRect();
//     const newX = e.clientX - left;
//     const newY = e.clientY - top;
//     const absDeltaX = Math.abs(mousePosition.x - newX);
//     const absDeltaY = Math.abs(mousePosition.y - newY);
//     setMovementAnimation([
//       absDeltaX * 0.5,
//       absDeltaY * 0.5,
//       1 - absDeltaY * 0.005,
//       1 - absDeltaX * 0.005,
//     ]);
//     setMousePosition({ x: newX, y: newY });
//   };
//   const hoverIcon = (iconRef, cursorStyle) => {
//     const { left, top } = iconRef.getBoundingClientRect();
//     const { left: leftContainer, top: topContainer } =
//       containerRef.current.getBoundingClientRect();

//     setHoveringIcon(cursorStyle);
//     setRotate([0, 0]);
//     setMousePosition({
//       x: left - leftContainer + 24,
//       y: top - topContainer + 24,
//     });
//   };
//   return (
//     <div className="custom-cursor" ref={containerRef} onMouseMove={onMouseMove}>
//       <motion.div
//         className={`cursor ${hoveringIcon ? hoveringIcon : ''}`}
//         style={{
//           left: mousePosition.x,
//           top: mousePosition.y,
//         }}
//         animate={{
//           translateX: hoveringIcon ? -30 : -16,
//           translateY: hoveringIcon ? -30 : -16,
//           rotateX,
//           rotateY,
//           scaleX,
//           scaleY,
//         }}
//       />
//     </div>
//   );
// };

import useMouse from '@react-hook/mouse-position';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const ref = React.useRef(null);
  const onMouseMove = (e) => {
    const { left, top } = ref.current.getBoundingClientRect();
    const newX = e.clientX - left;
    const newY = e.clientY - top;

    setMousePosition({ x: newX, y: newY });
  };

  // let mouseXPosition = 0;
  // let mouseYPosition = 0;

  // if (mouse.x !== null) {
  //   mouseXPosition = mouse.clientX;
  // }

  // if (mouse.y !== null) {
  //   mouseYPosition = mouse.clientY;
  // }
  const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      fontSize: '16px',
      backgroundColor: '#1e91d6',
      x: mousePosition.x,
      y: mousePosition.y,
      transition: {
        type: 'spring',
        mass: 0.6,
      },
    },
  };

  const spring = {
    type: 'spring',
    stiffness: 500,
    damping: 28,
  };

  return (
    <div ref={ref} onMouseMove={onMouseMove} className="custom-cursor">
      <motion.div
        className="cursor"
        variants={variants.default}
        animate={variants.default}
        transition={spring}
      ></motion.div>
    </div>
  );
};
export default CustomCursor;
