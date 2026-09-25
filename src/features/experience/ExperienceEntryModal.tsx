import { motion } from "framer-motion";
import type { ExperienceEntry } from "./ExperienceData";

type ExperienceEntryModalProps = {
  entry: ExperienceEntry;
  accentColor: string;
  onClose: () => void;
};

function ExperienceEntryModal({ entry, accentColor, onClose }: ExperienceEntryModalProps) {
  const Icon = entry.icon;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/50 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="experience-modal-title"
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="relative flex w-[90vw] max-w-2xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl sm:h-[60vh] sm:flex-row"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 text-2xl leading-none text-white transition-colors hover:text-white/70 sm:text-[#000097]/60 sm:hover:text-[#000097]"
        >
          &times;
        </button>

        <div
          className="flex shrink-0 items-center justify-center p-10 text-white sm:h-full sm:w-2/5"
          style={{ backgroundColor: accentColor }}
        >
          {entry.photo ? (
            <img
              src={entry.photo}
              alt=""
              className="h-32 w-32 rounded-full border-4 border-white/40 object-cover"
            />
          ) : Icon ? (
            <Icon size={64} aria-hidden="true" />
          ) : null}
        </div>

        <div className="flex flex-col overflow-y-auto p-8">
          <h3
            id="experience-modal-title"
            className="font-jua text-2xl text-[#000097]"
          >
            {entry.title}
          </h3>
          <p className="mt-1 text-base font-semibold text-black/70">
            {entry.org}
          </p>
          {entry.location && (
            <p className="mt-0.5 text-sm text-black/50">{entry.location}</p>
          )}
          <span
            className="mt-3 inline-block w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white"
            style={{ backgroundColor: accentColor }}
          >
            {entry.dateRange}
          </span>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-black/70">
            {entry.description.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ExperienceEntryModal;
