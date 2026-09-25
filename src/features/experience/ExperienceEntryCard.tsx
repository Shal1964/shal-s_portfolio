import { motion } from "framer-motion";
import type { ExperienceEntry } from "./ExperienceData";

type ExperienceEntryCardProps = {
  entry: ExperienceEntry;
  accentColor: string;
  onClick: () => void;
};


function paperTexture() {
  return {
    backgroundColor: "#FBF4E4",
    backgroundImage: [
      "radial-gradient(circle at 12% 18%, rgba(150,115,60,0.1), transparent 40%)",
      "radial-gradient(circle at 88% 78%, rgba(150,115,60,0.09), transparent 38%)",
      "repeating-linear-gradient(0deg, rgba(120,90,40,0.05) 0px, rgba(120,90,40,0.05) 1px, transparent 1px, transparent 27px)",
    ].join(", "),
  };
}

function ExperienceEntryCard({ entry, accentColor, onClick }: ExperienceEntryCardProps) {
  const Icon = entry.icon;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      style={paperTexture()}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-full overflow-hidden rounded-sm border border-black/10 p-5 text-left shadow-[2px_4px_10px_rgba(0,0,0,0.15)] hover:shadow-[2px_8px_18px_rgba(0,0,0,0.2)]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-6 w-6 bg-gradient-to-tl from-black/15 via-black/5 to-transparent"
        style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
      />

      <div className="flex items-start gap-4">
        {entry.photo ? (
          <img
            src={entry.photo}
            alt=""
            className="h-14 w-14 shrink-0 rounded-sm border border-black/10 object-cover"
          />
        ) : Icon ? (
          <span
            aria-hidden="true"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white"
            style={{ backgroundColor: accentColor }}
          >
            <Icon size={22} />
          </span>
        ) : null}

        <div className="min-w-0">
          <h4 className="font-jua text-lg text-[#000097]">{entry.title}</h4>
          <p className="text-sm font-semibold text-black/70">{entry.org}</p>
          {entry.location && (
            <p className="mt-0.5 text-xs text-black/50">{entry.location}</p>
          )}
          <p className="mt-0.5 text-xs uppercase tracking-wide text-black/45">
            {entry.dateRange}
          </p>
        </div>
      </div>

      <ul className="mt-3 list-disc space-y-1 pl-4 text-sm leading-relaxed text-black/70">
        {entry.description.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </motion.button>
  );
}

export default ExperienceEntryCard;
