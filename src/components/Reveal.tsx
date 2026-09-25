import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const clampedDelay = Math.min(Math.max(delay, 0), 0.3);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${0.92 - clampedDelay}`, `start ${0.55 - clampedDelay}`],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [y, 0]);

  return (
    <motion.div ref={ref} className={className} style={{ opacity, y: translateY }}>
      {children}
    </motion.div>
  );
}

export default Reveal;
