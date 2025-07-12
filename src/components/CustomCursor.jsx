import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    document.body.style.cursor = 'none';

    const handleMouseMove = (e) => {
      // Update cursor position
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out"
      });

      // Detect hover state from the element under cursor
      const hoverElement = document.elementFromPoint(e.clientX, e.clientY);
      const shouldHover = isInteractive(hoverElement);
      
      if (shouldHover !== isHovering.current) {
        isHovering.current = shouldHover;
        cursor.classList.toggle('cursor-hover', shouldHover);
      }
    };

    // Check if element is interactive
    const isInteractive = (element) => {
      if (!element) return false;
      return (
        element.closest('a, button, input, textarea, [data-cursor-hover]') || 
        window.getComputedStyle(element).cursor === 'pointer' ||
        element.hasAttribute('data-cursor-hover')
      );
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] w-6 h-6 rounded-full border border-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out mix-blend-difference"
    />
  );
};

export default CustomCursor;