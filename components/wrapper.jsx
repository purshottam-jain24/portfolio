"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import useMeasure from "react-use-measure";

export default function SmoothScrollWrapper({ children }) {
  const [ref, bounds] = useMeasure();
  const scrollY = useMotionValue(0);

  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
    restDelta: 0.001,
  });

  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      const currentScrollY = scrollY.get();
      let newScrollY = currentScrollY + e.deltaY;

      const maxScroll = bounds.height - window.innerHeight;
      if (newScrollY > maxScroll) newScrollY = maxScroll;
      if (newScrollY < 0) newScrollY = 0;

      scrollY.set(newScrollY);

      scrollTimeout.current = setTimeout(() => {}, 100);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [scrollY, bounds.height]);

  const y = useMotionValue(0);
  useEffect(() => {
    return smoothScrollY.onChange((latest) => {
      y.set(-latest);
    });
  }, [smoothScrollY, y]);

  return (
    <>
      <motion.div ref={ref} style={{ y }} className="w-full">
        {children}
      </motion.div>
      <style jsx global>{`
        body {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        body::-webkit-scrollbar {
          display: none; /* Chrome, Safari, and Opera */
        }
      `}</style>
    </>
  );
}
