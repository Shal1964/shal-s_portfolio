import { useRef, type KeyboardEvent, type RefObject } from "react";
import type { ChapterId, ExperienceChapter } from "./ExperienceData";

type ChapterTabsProps = {
  chapters: ExperienceChapter[];
  activeChapter: ChapterId;
  onSelect: (id: ChapterId) => void;
};

function ChapterTabs({ chapters, activeChapter, onSelect }: ChapterTabsProps) {
  const desktopTabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const mobileTabRefs = useRef<Array<HTMLButtonElement | null>>([]);


  const navigate = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
    refs: RefObject<Array<HTMLButtonElement | null>>
  ) => {
    let nextIndex: number | null = null;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      nextIndex = (index + 1) % chapters.length;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      nextIndex = (index - 1 + chapters.length) % chapters.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = chapters.length - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      onSelect(chapters[nextIndex].id);
      refs.current[nextIndex]?.focus();
    }
  };

  return (
    <>
      <div
        role="tablist"
        aria-label="Experience chapters"
        aria-orientation="vertical"
        className="z-20 hidden flex-col gap-3 md:order-2 md:-ml-3 md:mt-8 md:flex md:shrink-0"
      >
        {chapters.map((chapter, index) => {
          const isActive = chapter.id === activeChapter;
          const Icon = chapter.icon;

          return (
            <button
              key={chapter.id}
              ref={(el) => {
                desktopTabRefs.current[index] = el;
              }}
              id={`experience-tab-${chapter.id}`}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`experience-panel-${chapter.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelect(chapter.id)}
              onKeyDown={(event) => navigate(event, index, desktopTabRefs)}
              style={{ backgroundColor: chapter.bookmarkColor }}
              className={`flex w-max items-center gap-2 whitespace-nowrap rounded-r-lg py-2.5 pl-3 pr-4 text-white shadow-md outline-none transition-transform focus-visible:ring-2 focus-visible:ring-white ${
                isActive ? "translate-x-1" : "hover:translate-x-0.5"
              }`}
            >
              <Icon size={15} aria-hidden="true" />
              <span className="text-xs font-semibold leading-none">
                {chapter.label}
              </span>
            </button>
          );
        })}
      </div>

      <div
        role="tablist"
        aria-label="Experience chapters"
        className="mb-4 flex gap-2 overflow-x-auto md:hidden"
      >
        {chapters.map((chapter, index) => {
          const isActive = chapter.id === activeChapter;
          const Icon = chapter.icon;

          return (
            <button
              key={chapter.id}
              ref={(el) => {
                mobileTabRefs.current[index] = el;
              }}
              id={`experience-tab-mobile-${chapter.id}`}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`experience-panel-${chapter.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onSelect(chapter.id)}
              onKeyDown={(event) => navigate(event, index, mobileTabRefs)}
              style={{
                backgroundColor: isActive ? chapter.bookmarkColor : "#FFFFFF",
                color: isActive ? "#FFFFFF" : chapter.bookmarkColor,
              }}
              className="flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold shadow outline-none focus-visible:ring-2 focus-visible:ring-[#000097]"
            >
              <Icon size={14} aria-hidden="true" />
              {chapter.label}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default ChapterTabs;
