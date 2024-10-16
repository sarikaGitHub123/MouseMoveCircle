import React, { useState, useEffect, useCallback, useRef } from 'react';
import {DebounceFunction,ThrottlingFunction} from './utils/commonFunctions'

const CircleMover = () => {
  const [position, setPosition] = useState({ x: '50%', y: '50%' });
  const circleRef = useRef(null);

  const handleMouseMove = (e) => {
    let circle = circleRef.current
    const xPercent = (e.clientX / window.innerWidth) * 100;
    const yPercent = (e.clientY / window.innerHeight) * 100;
    console.log('xPercentok...',xPercent)
    // setPosition({ x: `${xPercent}%`, y: `${yPercent}%` });
    circle.style.left = `${xPercent}%`
    circle.style.top = `${yPercent}%` 
  };

  const throttledMoving = useCallback(ThrottlingFunction(handleMouseMove,50),[])

  // useEffect(() => {
  //   // Add mouse move event listener
  //   window.addEventListener('mousemove', throttledMoving);
    
  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('mousemove', throttledMoving);
  //   };
  // }, []);

  // useEffect(() => {
  //   let animationFrameId;

  //   const updatePosition = (e) => {
  //     if (animationFrameId) {
  //       cancelAnimationFrame(animationFrameId);
  //     }
  //     animationFrameId = requestAnimationFrame(() => handleMouseMove(e));
  //   };

  //   window.addEventListener('mousemove', updatePosition);
    
  //   return () => {
  //     window.removeEventListener('mousemove', updatePosition);
  //     cancelAnimationFrame(animationFrameId);
  //   };
  // }, [handleMouseMove]);

  return (
    <div style={{ position: 'relative', height: '100vh', width: '100vw' }} onMouseMove={handleMouseMove}>
      <div
      ref = {circleRef}
        style={{
          position: 'absolute',
          // left: position.x,
          // top: position.y,
          width: '50px',
          height: '50px',
          backgroundColor: 'blue',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)', // Center the circle
        }}
      />
    </div>
  );
};

export default CircleMover;
