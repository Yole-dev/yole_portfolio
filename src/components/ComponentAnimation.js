// imported framer animation library
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ComponentAnimation({ children, className = "" }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.9 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
