import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AboutPostcard from "./AboutPostcard";

function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.95", "start 0.4"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="relative isolate z-10 flex min-h-screen flex-col bg-[#EEF8FF]"
      style={{ opacity }}
    >
      <div className="relative h-40 shrink-0 sm:h-56">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        >
          <path fill="#2EAACC" d="M0,0 L1440,0 L1440,180 C1080,260 900,140 720,180 C540,220 360,100 180,160 C90,190 40,180 0,190 Z" />
        </svg>
        <h2 className="absolute inset-x-0 top-[28%] z-10 -translate-y-1/2 text-center font-jua text-2xl text-white sm:text-3xl">
          About Me
        </h2>
      </div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 py-6">
        <AboutPostcard />
      </div>
    </motion.section>
  );
}

export default AboutMe;
