import readinglogThumb from "../../assets/projects/readinglog-thumb.png";
import readinglogDetail from "../../assets/projects/readinglog-detail.png";
import pomodoroThumb from "../../assets/projects/pomodoro-thumb.png";
import pomodoroDetail from "../../assets/projects/pomodoro-detail.png";
import tunecafeThumb from "../../assets/projects/tunecafe-thumb.png";
import tunecafeDetail from "../../assets/projects/tunecafe-detail.png";
import retailThumb from "../../assets/projects/retail-thumb.png";
import refashionThumb from "../../assets/projects/refashion-thumb.png";

export type ProjectType = "solo" | "team";

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  thumbnail: string;
  detail: string;
  githubUrl: string;
  webUrl?: string;
  roles?: string[];
  type: ProjectType;
};

export const projects: Project[] = [
  {
    id: "readinglog",
    title: "ReadingLog",
    tagline: "Personal App to track books, journal thoughts, and stay focused",
    description:
      "When I read, I often get flooded with thoughts (theories, reactions, iconic lines) but I know I'll forget them later. That's the problem ReadingLog was built to solve. As part of my university group project, I designed pages in Figma (My Library, Reading Details, and Profile page) and implemented them into Flutter code, where the app lets users capture thoughts through journal entries and saved quotes, organize books into custom shelves, track reading progress, and stay focused with a built-in Pomodoro timer, all without manual input, since book data comes straight from the Google Books API.",
    techStack: ["Flutter", "Dart", "Supabase", "Google Books API"],
    thumbnail: readinglogThumb,
    detail: readinglogDetail,
    githubUrl: "https://github.com/Shal1964/ReadingLog",
    roles: ["Figma UI Design (Profile & My Library Page)", "Flutter Implementation", "Supabase Integration"],
    type: "team",
  },
  {
    id: "pomodoro-quest",
    title: "Pomodoro Quest",
    tagline: "A gamified focus timer that turns study sessions into quests, with EXP rewards for every session completed",
    description:
      "Staying productive is hard and distractions are everywhere. The Pomodoro Technique is one of the most well-known ways to fight that, so for my university Software Architecture project, where we had to apply real software patterns and architecture in React and TypeScript, our team built PomodoroQuest, a web app that helps users improve focus, manage study or work sessions, and maintain a healthy balance between productivity and rest. I worked on the timer frontend, from building the core countdown logic and handling mode switching between focus and break sessions, to wiring up the EXP bar animation that rewards users after each completed session and I also designed the Bluey and Bingo theme.",
    techStack: ["React", "Typescript"],
    thumbnail: pomodoroThumb,
    detail: pomodoroDetail,
    webUrl:"https://pomodoro-quest.vercel.app",
    githubUrl: "https://github.com/Shal1964/PomodoroTimer",
    roles: ["Figma UI Design (Bluey and Bingo Theme)", "Frontend Developer"],
    type: "team",
  },
  {
    id: "tune-cafe",
    title: "Tune Cafe",
    tagline: "A personal jukebox: pick a drink, get the playlist you already love",
    description:
      "Picking the right song shouldn't take longer than actually listening to it. So I built TuneCafe for myself: a desktop music player styled like a miniature iPod, where I just pick a drink and my playlist starts playing instantly. No browsing, no searching, no decisions. Each drink maps to a mood and a playlist I already love, so every song that plays is one I'd actually listen to. It's part personal tool, part aesthetic object, something that sits on my screen and makes my setup feel a little more like my own.",
    techStack: ["React", "TypeScript", "Electron", "Spotify Web API"],
    thumbnail: tunecafeThumb,
    detail: tunecafeDetail,
    githubUrl: "https://github.com/Shal1964/TuneCafe",
    type: "solo",
  },
  {
    id: "honkai-retail",
    title: "Honkai Star Retail",
    tagline: "A mobile e-commerce app based on the Honkai: Star Rail universe, with role-based access for browsing/purchasing and admin catalog management",
    description:
      "Honkai Star Retail is a mobile application for browsing and purchasing Honkai: Star Rail-themed items, including Galactic Resources and Light Cones, developed as a project for my university's Mobile Hybrid Solution course based on a given case study/theme (Galactic Resources and Light Cones e-commerce).The app supports two roles: Users, who can browse the item catalog, search for specific items, view detailed information (name, type, description, stock, image, and price), and purchase multiple items in a single transaction based on available stock; and Admins, who manage the entire catalog through full CRUD functionality : adding new items, updating item details, adjusting stock levels, and removing items.The app also includes a Light/Dark mode toggle, letting users customize the interface to their preference.",
    techStack: ["React", "TypeScript", "dnd-kit"],
    thumbnail: retailThumb,
    // TODO: retail-detail.png is missing from src/assets/projects — add the file, then convert to an import
    detail: "/src/assets/projects/retail-detail.png",
    githubUrl: "",
    type: "team",
  },
  {
    id: "re-fashion",
    title: "Re-Fashion",
    tagline: "An ML + LLM-powered app that scores the sustainability of fashion brands and products through natural conversation",
    description:
      "Re-Fashion is a sustainability analysis tool for the fashion industry, built as a semester 3 university project with a focus on functional depth and data-driven logic rather than visual design. The system uses a hybrid ML + LLM architecture: a Gradient Boosting Regression model calculates the Eco Score from structured sustainability indicators (carbon emissions, water usage, labor metrics, and more), while an LLM acts as an intelligent interface, letting users describe their product or brand in natural language, extracting the relevant parameters, and translating the numerical results into clear explanations and recommendations. The app includes an Eco Score Calculator, a Product Sustainability Advisor with material recommendations, a Fast Fashion Impact Awareness section, a Conscious Shopping Assistant, and a chatbot for follow-up questions.",
    techStack: ["Python", "OpenAI API"],
    thumbnail: refashionThumb,
    // TODO: refashion-detail.png is missing from src/assets/projects — add the file, then convert to an import
    detail: "/src/assets/projects/refashion-detail.png",
    githubUrl: "",
    type: "team",
  },
];
