import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import WashiTape from "../../components/WashiTape";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function Highlight({ children }: { children: ReactNode }) {
  return (
    <span
      className="relative inline"
      style={{
        backgroundImage:
          "linear-gradient(100deg, transparent 0%, #FFE066 6%, #FFE066 94%, transparent 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "102% 46%",
        backgroundPositionY: "78%",
        boxDecorationBreak: "clone",
        WebkitBoxDecorationBreak: "clone",
      }}
    >
      {children}
    </span>
  );
}

function AboutPostcard() {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 220 180"
        aria-hidden="true"
        className="pointer-events-none absolute -top-7 right-1 z-30 hidden w-24 min-[480px]:block sm:-top-9 sm:right-4 sm:w-32"
      >
        <path
          d="M 30,100 C 25,60 55,30 80,45 C 95,54 90,75 68,72 C 52,70 50,52 68,48 C 100,40 135,55 138,85 C 140,108 118,120 100,110 C 88,103 92,88 110,86 C 145,82 175,100 185,130 C 190,145 185,158 175,160"
          fill="none"
          stroke="#000097"
          strokeWidth="3"
          strokeDasharray="8 8"
          strokeLinecap="round"
        />
      </svg>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardVariants}
        className="relative mx-auto flex w-full max-w-[1200px] min-h-[440px] flex-col justify-center bg-white p-4 shadow-[0_22px_50px_rgba(0,0,151,0.18)] sm:min-h-[600px] sm:p-7"
      >
        <WashiTape color="pink" rotate={-8} className="absolute -top-4 left-8 z-20 sm:left-14" />

        <svg
          viewBox="0 0 220 180"
          aria-hidden="true"
          className="pointer-events-none absolute -top-5 -left-12 z-30 hidden w-40 min-[480px]:block sm:-top-8 sm:-left-16 sm:w-48"
        >
          <path
            d="M 190,100 C 195,60 165,30 140,45 C 125,54 130,75 152,72 C 168,70 170,52 152,48 C 120,40 85,55 82,85 C 80,108 102,120 120,110 C 132,103 128,88 110,86 C 75,82 45,100 35,130 C 30,145 35,158 45,160"
            fill="none"
            stroke="#000097"
            strokeWidth="3"
            strokeDasharray="8 8"
            strokeLinecap="round"
          />
        </svg>
        <WashiTape color="purple" rotate={6} className="absolute -top-4 right-8 z-20 sm:right-16" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-6 top-0 z-20 h-px border-t-2 border-dashed border-[#000097]/25 sm:inset-x-12"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden w-px -translate-x-1/2 border-l-2 border-dashed border-[#000097]/25 sm:block"
        />

        <div className="relative grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-0">
          <div className="flex flex-col justify-start pt-8 sm:order-2 sm:pl-8 sm:pt-12">
            <h3 className="relative w-fit font-jua text-2xl text-[#000097] sm:text-3xl">
              <span
                aria-hidden="true"
                className="absolute inset-x-[-6%] top-[38%] -z-10 h-[48%] -rotate-1 bg-[#FFE066]/70"
              />
              Shally Liusiana
            </h3>

            <div className="mt-12 space-y-2 font-gaegu text-[20px] leading-[1.4] text-[#000097]/90 sm:text-[20px]">
              <motion.p variants={itemVariants}>
                Hi! I'm Shally Liusiana, a Computer Science student at BINUS University.
              </motion.p>

              <motion.p variants={itemVariants}>
                I love building things where <Highlight>tech meets design</Highlight>, from web
                apps in React and TypeScript to mobile apps in Flutter. Right now I'm
                strengthening my backend skills through full-stack projects.
              </motion.p>

              <motion.p variants={itemVariants}>
                I'm looking for a <Highlight>Software Engineering internship</Highlight> where I
                can contribute to a real product, learn from a team, and keep growing as a
                developer.
              </motion.p>
            </div>

            <motion.p variants={itemVariants} className="mt-2 font-gaegu text-xl text-[#000097] sm:text-2xl">
              See you around! 
            </motion.p>
          </div>

          <div className="relative flex flex-col items-center gap-2 sm:order-1 sm:h-full sm:items-start sm:justify-end sm:pr-8">
            <motion.div
              variants={itemVariants}
              className="text-center font-gaegu text-[#000097] sm:pr-20 sm:text-left"
            >
              <p className="font-jua text-xl sm:text-4xl">Shally Liusiana</p>
              <p className="mt-1 text-base sm:text-lg">Computer Science @ BINUS University</p>
              <p className="text-base sm:text-lg">Looking for a Software Engineering internship</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutPostcard;
