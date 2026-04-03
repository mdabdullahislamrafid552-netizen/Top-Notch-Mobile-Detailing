import { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-pointer');
        
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.2 };
  const cursorX = useSpring(mousePosition.x - (isHovering ? 32 : 8), springConfig);
  const cursorY = useSpring(mousePosition.y - (isHovering ? 32 : 8), springConfig);

  return (
    <motion.div
      className="fixed top-0 left-0 z-[100] pointer-events-none mix-blend-difference hidden md:block"
      style={{ x: cursorX, y: cursorY }}
    >
      <motion.div
        animate={{
          width: isHovering ? 64 : 16,
          height: isHovering ? 64 : 16,
          backgroundColor: isHovering ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,1)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="rounded-full flex items-center justify-center"
      >
        {isHovering && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-black text-[10px] font-bold tracking-widest mix-blend-normal"
          >
            
          </motion.span>
        )}
      </motion.div>
    </motion.div>
  );
}
