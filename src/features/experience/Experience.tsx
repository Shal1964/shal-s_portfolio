import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform, type Variants } from "framer-motion";
import ChapterTabs from "./ChapterTabs";
import ExperienceEntryCard from "./ExperienceEntryCard";
import ExperienceEntryModal from "./ExperienceEntryModal";
import { experienceChapters, type ChapterId, type ExperienceEntry } from "./ExperienceData";

const bookVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const pageVariants = {
  enter: (direction: 1 | -1) => ({
    opacity: 0,
    rotateY: direction > 0 ? 35 : -35,
    x: direction > 0 ? 40 : -40,
  }),
  center: {
    opacity: 1,
    rotateY: 0,
    x: 0,
  },
  exit: (direction: 1 | -1) => ({
    opacity: 0,
    rotateY: direction > 0 ? -35 : 35,
    x: direction > 0 ? -40 : 40,
  }),
};

function Experience() {
  const [activeChapterId, setActiveChapterId] = useState<ChapterId>(
    experienceChapters[0].id
  );
  const [direction, setDirection] = useState<1 | -1>(1);
  const prevIndexRef = useRef(0);
  const [selectedEntry, setSelectedEntry] = useState<{
    entry: ExperienceEntry;
    accentColor: string;
  } | null>(null);

  const activeIndex = experienceChapters.findIndex(
    (chapter) => chapter.id === activeChapterId
  );
  const activeChapter = experienceChapters[activeIndex];

  const handleSelectChapter = (id: ChapterId) => {
    const nextIndex = experienceChapters.findIndex((chapter) => chapter.id === id);
    setDirection(nextIndex > prevIndexRef.current ? 1 : -1);
    prevIndexRef.current = nextIndex;
    setActiveChapterId(id);
  };

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.95", "start 0.4"],
  });
  const sectionOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const sectionY = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.section
      ref={sectionRef}
      id="experience"
      className="relative flex min-h-screen flex-col justify-center bg-[#EEF8FF] px-6 py-16"
      style={{ opacity: sectionOpacity, y: sectionY }}
    >
      <h2 className="text-center font-jua text-4xl text-[#000097]">
        Experience
      </h2>

      <div className="relative mx-auto mt-10 w-[92vw] max-w-6xl md:flex md:items-start">
        <ChapterTabs
          chapters={experienceChapters}
          activeChapter={activeChapterId}
          onSelect={handleSelectChapter}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={bookVariants}
          className="relative overflow-hidden rounded-xl bg-white shadow-[0_20px_50px_rgba(0,0,151,0.25)] md:order-1 md:h-[75vh] md:min-w-0 md:flex-1 md:grid md:grid-cols-2"
          style={{ perspective: 1600 }}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-gradient-to-r from-black/10 to-transparent"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-gradient-to-l from-black/10 to-transparent"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden w-6 -translate-x-1/2 bg-gradient-to-r from-black/15 via-black/5 to-black/15 md:block"
          />

          <div className="hidden flex-col bg-[#EEF8FF] p-8 md:flex md:overflow-y-auto">
            <h3 className="font-jua text-xl text-[#000097]">Contents</h3>
            <ul className="mt-6 flex flex-col gap-2">
              {experienceChapters.map((chapter) => {
                const isActive = chapter.id === activeChapterId;
                return (
                  <li key={chapter.id}>
                    <button
                      type="button"
                      onClick={() => handleSelectChapter(chapter.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`flex w-full items-center justify-between rounded-md px-4 py-3 text-left transition-colors ${
                        isActive
                          ? "bg-white text-[#000097] shadow-sm"
                          : "text-[#000097]/60 hover:bg-white/60"
                      }`}
                    >
                      <span className="font-semibold">{chapter.label}</span>
                      <span className="text-xs text-[#000097]/50">
                        {chapter.entries.length}{" "}
                        {chapter.entries.length === 1 ? "entry" : "entries"}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <p className="mt-auto pt-8 text-xs italic text-[#000097]/50">
              A running log of the things I've helped build, organize, and
              earn along the way.
            </p>
          </div>

          <div
            className="relative overflow-y-auto p-6 sm:p-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeChapter.id}
                id={`experience-panel-${activeChapter.id}`}
                role="tabpanel"
                aria-labelledby={`experience-tab-${activeChapter.id}`}
                tabIndex={0}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeInOut" }}
                style={{ transformOrigin: "left center" }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: activeChapter.bookmarkColor }}
                  >
                    <activeChapter.icon size={18} />
                  </span>
                  <h3 className="font-jua text-2xl text-[#000097]">
                    {activeChapter.label}
                  </h3>
                </div>

                <div className="flex flex-col gap-5">
                  {activeChapter.entries.map((entry, index) => (
                    <motion.div
                      key={entry.id}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 + index * 0.08 }}
                    >
                      <ExperienceEntryCard
                        entry={entry}
                        accentColor={activeChapter.bookmarkColor}
                        onClick={() =>
                          setSelectedEntry({
                            entry,
                            accentColor: activeChapter.bookmarkColor,
                          })
                        }
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedEntry && (
          <ExperienceEntryModal
            entry={selectedEntry.entry}
            accentColor={selectedEntry.accentColor}
            onClose={() => setSelectedEntry(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default Experience;
