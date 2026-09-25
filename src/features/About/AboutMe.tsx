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

  const handleCtaClick = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-[#EEF8FF] pb-20 sm:pb-28"
      style={{ opacity }}
    >
      <div className="relative h-64">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        >
          <path fill="#5BA3C4" d="M0,0 L1440,0 L1440,220 C1080,320 360,120 0,220 Z" />
        </svg>
        <h2 className="relative z-10 pt-16 text-center font-jua text-4xl text-white">
          About Me
        </h2>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 pt-6 sm:pt-10">
        <AboutPostcard />

        <div className="mt-12 flex justify-center sm:mt-16">
          <motion.button
            type="button"
            onClick={handleCtaClick}
            initial={{ rotate: -2 }}
            whileHover={{ rotate: 0, y: -6, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="rounded-xl bg-white px-6 py-3 font-jua text-lg text-[#000097] shadow-[0_0_0_5px_white,0_8px_18px_rgba(0,0,151,0.2)]"
          >
            See what I work with →
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutMe;
