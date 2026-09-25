import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import ProjectPolaroid from "./ProjectPolaroid";
import ProjectModal from "./ProjectModal";
import Reveal from "../../components/Reveal";
import { projects, type Project } from "./ProjectsData";

function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null
  );

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.95", "start 0.4"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.section
      ref={sectionRef}
      id="projects"
      className="relative bg-[#EEF8FF] px-6 py-24"
      style={{ opacity, y }}
    >
      <h2 className="text-center font-jua text-4xl text-[#000097]">
        Projects
      </h2>

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-x-12 gap-y-28 pt-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.05}>
            <ProjectPolaroid
              title={project.title}
              tagline={project.tagline}
              thumbnail={project.thumbnail}
              githubUrl={project.githubUrl}
              webUrl={project.webUrl}
              type={project.type}
              onClick={() => setSelectedProject(project)}
            />
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}

export default Projects;
