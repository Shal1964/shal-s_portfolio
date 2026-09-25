import type { IconType } from "react-icons";
import { FaUsers, FaHandsHelping, FaBriefcase, FaTrophy } from "react-icons/fa";

export type ChapterId = "organization" | "volunteer" | "internship" | "achievement";

export type ExperienceEntry = {
  id: string;
  title: string;
  org: string;
  location?: string;
  dateRange: string;
  description: string[];
  icon?: IconType;
  photo?: string;
};

export type ExperienceChapter = {
  id: ChapterId;
  label: string;
  icon: IconType;
  bookmarkColor: string;
  entries: ExperienceEntry[];
};

export const experienceChapters: ExperienceChapter[] = [
  {
    id: "organization",
    label: "Organization",
    icon: FaUsers,
    bookmarkColor: "#5BA3C4",
    entries: [
      {
        id: "KBMK-binus",
        title: "Vice Coordinator Design and Social Media Division",
        org: "KBMK Binus",
        dateRange: "2026 – Present",
        description: [
          "Vice Coordinator of the design and social media strategy, producing content for national holidays, event promotions, and media partner collaborations", 
          "Assisted in planning and execution of organizational events as part of the event committee"
        ],
        icon: FaUsers,
      },
      {
        id: "kbmk-binus",
        title: "Activist",
        org: "KBMK Binus",
        dateRange: "2025 - 2026",
        description: [
          "Designed promotional posters, Instagram content, and commemorative posts for cultural observances and organizational events",
           "Served as committee member at Anjangsana 2025 (Publication & Documentation), Seminar Kindness (Equipment & Logistics, Fundraising), and Confucian Service (Publication & Documentation)"
        ],
        icon: FaUsers,
      },
    ],
  },
  {
    id: "volunteer",
    label: "Volunteer",
    icon: FaHandsHelping,
    bookmarkColor: "#2F855A",
    entries: [
      {
        id: "yim2",
        title: "Volunteer",
        org: "Youth in Mission — UPH College",
        location: "Rote, East Nusa Tenggara",
        dateRange: "September 2023",
        description: [
          "Visited local schools, leading devotional sessions, assisting students with craft projects, and contributing to a school mural painting",
          "Participated in church visits and conducted basic English learning sessions for the youth congregation",
        ],
        icon: FaHandsHelping,
      },
      {
        id: "yim1",
        title: "Volunteer",
        org: "Youth in Mission — UPH College",
        location: "Singkawang, West Kalimantan",
        dateRange: "November 2022",
        description: [
          "Assisted kindergarten and Grade 3 elementary students with reading, coloring, and basic multiplication exercises",
          "Visited a local orphanage and several churches, facilitating group craft activities, interactive sessions, and community fellowship",
        ],
        icon: FaHandsHelping,
      },
    ],
  },
  {
    id: "internship",
    label: "Internship",
    icon: FaBriefcase,
    bookmarkColor: "#000097",
    entries: [
      {
        id: "ba-intern",
        title: "Business Analyst Intern",
        org: "Thanksinsomnia",
        dateRange: "May 2024",
        description: [
          "Observed and documented business analysis workflows across office and warehouse environments",
          "Supported warehouse packaging and order preparations",
        ],
        icon: FaBriefcase,
      },
      {
        id: "hr-intern",
        title: "HR Intern",
        org: "PT. Prima Makmur Rotekemindo ",
        dateRange: "June 2023",
        description: [
          "Organized and maintained employee data files and physical records to ensure accuracy and proper filing standards",
          "Provided general administrative support across HR and oﬃce operations"
        ],
        icon: FaBriefcase,
      },
    ],
  },
  {
    id: "achievement",
    label: "Achievement",
    icon: FaTrophy,
    bookmarkColor: "#B45309",
    entries: [
      {
        id: "CBDC",
        title: "2nd Place — Scientific Article Writing Competition",
        org: "Indonesia Character Journal, Character Building Development Center (CBDC)",
        dateRange: "2025",
        description: [
          "Wrote an article titled \"Kesadaran Masyarakat terhadap Dampak dari Fast Fashion\" — 2nd Place, Indonesia Character Journal Scientific Writing Competition (CBDC Binus University, 2025)",
        ],
        icon: FaTrophy,
      },
    ],
  },
];
