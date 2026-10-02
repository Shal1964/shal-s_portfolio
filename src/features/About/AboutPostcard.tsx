import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import WashiTape from "../../components/WashiTape";

const FOLD_DURATION = 0.65;
const CONTENT_STAGGER = 0.07;

const leftPanelVariants: Variants = {
  hidden: { rotateY: 80, boxShadow: "0 22px 50px rgba(0,0,151,0.18)" },
  visible: {
    rotateY: 0,
    boxShadow: "0 0px 0px rgba(0,0,151,0)",
    transition: { duration: FOLD_DURATION, ease: "easeOut" },
  },
};

const rightPanelVariants: Variants = {
  hidden: { rotateY: -80, boxShadow: "0 22px 50px rgba(0,0,151,0.18)" },
  visible: {
    rotateY: 0,
    boxShadow: "0 0px 0px rgba(0,0,151,0)",
    transition: { duration: FOLD_DURATION, ease: "easeOut" },
  },
};

const reducedPanelVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};


const contentGroupVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: CONTENT_STAGGER, delayChildren: FOLD_DURATION },
  },
};

const reducedContentGroupVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

const reducedItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const detailVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

const reducedDetailVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const outsideDetailVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut", delay: FOLD_DURATION },
  },
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
  const shouldReduceMotion = useReducedMotion();

  const activeLeftPanelVariants = shouldReduceMotion ? reducedPanelVariants : leftPanelVariants;
  const activeRightPanelVariants = shouldReduceMotion ? reducedPanelVariants : rightPanelVariants;
  const activeContentGroupVariants = shouldReduceMotion ? reducedContentGroupVariants : contentGroupVariants;
  const activeItemVariants = shouldReduceMotion ? reducedItemVariants : itemVariants;
  const activeDetailVariants = shouldReduceMotion ? reducedDetailVariants : detailVariants;
  const activeOutsideDetailVariants = shouldReduceMotion ? reducedDetailVariants : outsideDetailVariants;

  return (
    <motion.div
      className="relative"
      style={{ perspective: 1500 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.svg
        variants={activeOutsideDetailVariants}
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
      </motion.svg>

      <div className="relative mx-auto w-full max-w-[1200px] min-h-[440px] sm:min-h-[600px]">
        <motion.div
          variants={activeLeftPanelVariants}
          style={
            shouldReduceMotion
              ? undefined
              : { transformOrigin: "right center", transformStyle: "preserve-3d", backfaceVisibility: "hidden" }
          }
          className="pointer-events-none absolute inset-y-0 left-0 z-0 w-1/2 bg-white"
        />
        <motion.div
          variants={activeRightPanelVariants}
          style={
            shouldReduceMotion
              ? undefined
              : { transformOrigin: "left center", transformStyle: "preserve-3d", backfaceVisibility: "hidden" }
          }
          className="pointer-events-none absolute inset-y-0 right-0 z-0 w-1/2 bg-white"
        />

        <motion.div
          variants={activeContentGroupVariants}
          className="relative z-10 flex h-full min-h-[440px] flex-col justify-center p-4 sm:min-h-[600px] sm:p-7"
        >
          <motion.div variants={activeDetailVariants} className="absolute -top-4 left-8 z-20 sm:left-14">
            <WashiTape color="pink" rotate={-8} />
          </motion.div>

          <motion.svg
            variants={activeDetailVariants}
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
          </motion.svg>
          <motion.div variants={activeDetailVariants} className="absolute -top-4 right-8 z-20 sm:right-16">
            <WashiTape color="purple" rotate={6} />
          </motion.div>

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
              <h3 className="font-jua text-2xl text-[#000097] sm:text-3xl">
                Shally Liusiana
              </h3>

              <div className="mt-4 space-y-2 font-gaegu text-[18px] leading-[1.4] text-[#000097]/90 sm:text-[18px]">
                <motion.p variants={activeItemVariants}>
                  Hi! I'm Shally Liusiana, a 5th-semester Computer Science student at BINUS University in the Software Engineering Streaming.
                </motion.p>

                <motion.p variants={activeItemVariants}>
                 I've always believed the best way to learn is by doing. <Highlight>I love building web and mobile apps</Highlight>, and most of what I know comes from working on my own projects and figuring things out along the way, both <Highlight>the design and the code</Highlight>. What keeps me going is the idea of making apps people actually enjoy using, the kind that make everyday life a little easier. Besides development, I'm currently the Vice Coordinator of Design & Social Media at KBMK BINUS, where I design for and help run events for our community.
                </motion.p>

                <motion.p variants={activeItemVariants}>
                  I'm looking for an <Highlight>internship</Highlight> where I can contribute to a real product, learn from a team, and keep growing as a developer.
                </motion.p>
              </div>

              <motion.p variants={activeItemVariants} className="mt-2 font-gaegu text-xl text-[#000097] sm:text-2xl">
                See you around!
              </motion.p>
            </div>

            <div className="relative flex flex-col items-center gap-2 sm:order-1 sm:h-full sm:items-start sm:justify-end sm:pr-8">
              <motion.div
                variants={activeItemVariants}
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
    </motion.div>
  );
}

export default AboutPostcard;
