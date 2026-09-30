import character from "../../assets/hero.png";
import Typewriter from "typewriter-effect";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const reducedContainerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const reducedItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

function HeroContent() {
  const shouldReduceMotion = useReducedMotion();
  const activeContainerVariants = shouldReduceMotion ? reducedContainerVariants : containerVariants;
  const activeItemVariants = shouldReduceMotion ? reducedItemVariants : itemVariants;

  return (
    <>
      <motion.div
        className="relative min-h-screen overflow-hidden pt-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={activeContainerVariants}
      >
        <motion.div variants={activeItemVariants} className="text-center">
          <Typewriter options={{strings: ["Hello!", "Hi!", "Hej!", "Salve!", "Hola!", "Ciao!",
            "你好!", "こんにちは!"
          ],
                      autoStart: true,
                      loop: true,
                      wrapperClassName: "text-3xl font-jua text-black",
                      cursorClassName: "text-3xl font-jua text-black",

          }}></Typewriter>
        </motion.div>
        <motion.h1
          variants={activeItemVariants}
          className="text-center font-jua text-[#000097] top-4"
          style={{ fontSize: "clamp(2rem, 5vw + 1rem, 3.75rem)", lineHeight: 1 }}
        >
          I'm Shally Liusiana
        </motion.h1>
        <motion.p
          variants={activeItemVariants}
          className="text-center font-jua text-[#000097]/80 mt-4"
          style={{ fontSize: "clamp(1.25rem, 2.5vw + 0.5rem, 2.25rem)", lineHeight: 1.1 }}
        >
          Computer Science Student @BINUS University
        </motion.p>
      </motion.div>

      <img
        src={character}
        alt="character illustration"
        className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 w-[220px] sm:bottom-32 sm:w-[260px] lg:w-[340px]"
      />
    </>
  );
}

export default HeroContent;