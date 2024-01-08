import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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
//     const newY = e.clientY //   //if user is hovering an icon, cursor locks at it- top;
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
//           opacity: 1,
//           height: 10,
//           width: 10,
//           fontSize: '16px',
//           backgroundColor: '#1e91d6',
//           zIndex: 1000,
//           transition: {
//             type: 'spring',
//             mass: 0.6,
//           },
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
//       {children}
//     </div>
//   );
// };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
