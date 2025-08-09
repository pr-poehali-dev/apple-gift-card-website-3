import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Custom cursor with image */}
      <div
        className={`fixed top-0 left-0 z-50 pointer-events-none transition-all duration-200 ease-out ${
          isHovering ? 'scale-125' : 'scale-100'
        }`}
        style={{
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0)`,
        }}
      >
        <img 
          src="/img/0009b8d5-e5cc-463c-8975-07788c052856.jpg"
          alt="cursor"
          className="w-8 h-8 rounded-lg shadow-lg opacity-90"
        />
      </div>
    </>
  );
};

export default CustomCursor;