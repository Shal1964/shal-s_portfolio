import { motion } from "framer-motion";
import type { Project } from "./ProjectsData";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

function ProjectModal({ project, onClose }: ProjectModalProps) {
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
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="relative flex w-[90vw] max-w-6xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl sm:h-[70vh] sm:w-[70vw] sm:flex-row"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 text-2xl leading-none text-white transition-colors hover:text-white/70 sm:text-[#000097]/60 sm:hover:text-[#000097]"
        >
          &times;
        </button>

        <div className="flex shrink-0 items-center justify-center bg-[#EEF8FF] p-4 sm:h-full sm:w-2/5 sm:p-6">
          <img
            src={project.detail}
            alt={project.title}
            className="aspect-[4/5] w-full rounded-lg object-cover sm:aspect-auto sm:h-full sm:w-auto sm:object-contain"
          />
        </div>

        <div className="flex flex-col overflow-y-auto p-8">
          <div className="flex items-center justify-between gap-3">
            <h3
              id="project-modal-title"
              className="font-jua text-2xl text-[#000097]"
            >
              {project.title}
            </h3>
            <span
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                project.type === "solo"
                  ? "bg-green-100 text-green-700"
                  : "bg-[#000097] text-white"
              }`}
            >
              {project.type === "solo" ? "Solo Project" : "Team Project"}
            </span>
          </div>

          <p className="mt-3 text-base leading-relaxed text-[#000097]/80">
            {project.description}
          </p>

          {project.type === "team" && project.roles && project.roles.length > 0 && (
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#000097]/50">
                My Role
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.roles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full bg-[#000097]/10 px-3 py-1 text-xs font-medium text-[#000097]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.techStack.length > 0 && (
            <div className="mt-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#000097]/50">
                Tech Stack
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[#EEF8FF] px-3 py-1 text-xs font-medium text-[#000097]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit rounded-full bg-[#000097] px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                View on GitHub
              </a>
            )}

            {project.webUrl && (
              <a
                href={project.webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit rounded-full border border-[#000097] px-5 py-2 text-sm font-semibold text-[#000097] transition-opacity hover:opacity-70"
              >
                Visit Site
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectModal;
