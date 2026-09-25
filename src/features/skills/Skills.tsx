import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { IconType } from "react-icons";
import {
  SiJavascript,
  SiTypescript,
  SiDart,
  SiC,
  SiPython,
  SiReact,
  SiVite,
  SiFlutter,
  SiNodedotjs,
  SiExpress,
  SiJsonwebtokens,
  SiPostgresql,
  SiSupabase,
  SiMysql,
  SiGithub,
  SiFigma,
  SiElectron,
} from "react-icons/si";
import { MdApi } from "react-icons/md";
import { FaJava } from "react-icons/fa";

const CATEGORY_ACCENTS = ["#D1ACCE", "#FCEEA8"];

function hexToRgb(hex: string) {
  const num = parseInt(hex.replace("#", ""), 16);
  return { r: (num >> 16) & 0xff, g: (num >> 8) & 0xff, b: num & 0xff };
}

function hexToRgba(hex: string, alpha: number) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function darken(hex: string, amount: number) {
  const { r, g, b } = hexToRgb(hex);
  const shade = (c: number) => Math.round(c * (1 - amount));
  return { r: shade(r), g: shade(g), b: shade(b) };
}

function rgbToCss({ r, g, b }: { r: number; g: number; b: number }, alpha = 1) {
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

type Skill = {
  name: string;
  icon?: IconType;
  image?: string;
  color?: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
  fullWidth?: boolean;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: FaJava, color: "#007396" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#000000" },
      { name: "REST APIs", icon: MdApi, color: "#000097" },
      { name: "JWT Auth", icon: SiJsonwebtokens, color: "#000000" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Tools & Platforms",
    fullWidth: true,
    skills: [
      { name: "Git & GitHub", icon: SiGithub, color: "#181717" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Canva", image: "/src/assets/canva.png"},
      { name: "Electron", icon: SiElectron, color: "#47848F" },
    ],
  },
];

type SkillStickerProps = {
  name: string;
  icon?: IconType;
  image?: string;
  color?: string;
  accent: string;
  index: number;
};

function SkillSticker({ name, icon: Icon, image, color, accent, index }: SkillStickerProps) {
  const [scatter] = useState(() => ({
    offsetY: Math.random() * 12 - 6,
  }));
  const [isHovered, setIsHovered] = useState(false);
  const deepAccent = darken(accent, 0.3);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: scatter.offsetY + 28 }}
      whileInView={{ opacity: 1, scale: 1, y: scatter.offsetY }}
      viewport={{ once: true, amount: 0.4 }}
      whileHover={{ scale: 1.08, y: scatter.offsetY - 4, zIndex: 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 16, delay: Math.min(index * 0.06, 0.4) }}
      style={{
        borderTop: `3px solid ${isHovered ? rgbToCss(deepAccent) : accent}`,
        boxShadow: isHovered
          ? `0 0 0 5px white, 0 10px 22px ${rgbToCss(deepAccent, 0.35)}`
          : "0 0 0 5px white, 0 8px 18px rgba(0,0,151,0.2)",
        transition: "border-color 200ms ease, box-shadow 200ms ease",
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative z-0 flex w-28 shrink-0 cursor-default flex-col items-center gap-2 rounded-2xl bg-white px-3 py-4"
    >
      <span
        className="flex h-12 w-12 items-center justify-center rounded-full"
        style={{ backgroundColor: hexToRgba(accent, 0.15) }}
      >
        {image ? (
          <img src={image} alt={name} className="h-7 w-7 object-contain" />
        ) : Icon ? (
          <Icon size={26} color={color} />
        ) : null}
      </span>
      <span className="text-center text-sm font-semibold leading-tight text-[#000097]">
        {name}
      </span>
    </motion.div>
  );
}

type SkillCategorySectionProps = {
  title: string;
  skills: Skill[];
  accent: string;
};

function SkillCategorySection({ title, skills, accent }: SkillCategorySectionProps) {
  return (
    <div className="w-full">
      <h3
        className="mb-5 text-center font-jua text-2xl sm:text-left"
        style={{ color: rgbToCss(darken(accent, 0.45)) }}
      >
        {title}
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-7 sm:justify-start">
        {skills.map((skill, index) => (
          <SkillSticker
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
            image={skill.image}
            color={skill.color}
            accent={accent}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function Skills() {
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
      id="skills"
      className="relative flex min-h-screen flex-col justify-center bg-[#EEF8FF] px-6 py-12"
      style={{ opacity, y }}
    >
      <h2 className="text-center font-jua text-5xl text-[#000097]">
        Skills
      </h2>

      <div className="mx-auto mt-12 grid w-full max-w-6xl grid-cols-1 gap-x-20 gap-y-12 sm:grid-cols-2">
        {skillCategories.map((category, index) => (
          <div key={category.title} className={category.fullWidth ? "sm:col-span-2" : undefined}>
            <SkillCategorySection
              title={category.title}
              skills={category.skills}
              accent={CATEGORY_ACCENTS[index % CATEGORY_ACCENTS.length]}
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default Skills;
