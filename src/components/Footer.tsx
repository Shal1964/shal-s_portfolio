import { useState } from "react";
import type { IconType } from "react-icons";
import FlowerCluster from "../features/hero/FlowerCluster";
import {
  FaCheck,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaRegCopy,
  FaRegFileAlt,
  FaRegFolderOpen,
} from "react-icons/fa";

const EMAIL = "shallyliusiana@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/shallyliusiana";
const GITHUB_URL = "https://github.com/Shal1964";
const CV_URL = "/src/assets/ShallyLiusiana_Resume.pdf";
const PORTFOLIO_URL = "/src/assets/Portfolio-ShallyLiusiana.pdf";

const NAV_LINKS = [
  { label: "Home", targetId: "home" },
  { label: "About", targetId: "about" },
  { label: "Skills", targetId: "skills" },
  { label: "Projects", targetId: "projects" },
  { label: "Experience", targetId: "experience" },
];

type DocLinkProps = {
  href: string;
  label: string;
  icon: IconType;
};

function DocLink({ href, label, icon: Icon }: DocLinkProps) {
  return (
    <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FFF8E7] px-6 py-3 text-base font-semibold text-[#4B3621] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg sm:w-auto sm:justify-start"
      >
        <Icon size={18} />
        {label}
      </a>

      <a
        href={href}
        download
        className="flex items-center gap-1.5 text-sm font-medium text-[#4B3621]/70 transition-colors hover:text-[#4B3621] hover:underline"
      >
        <FaDownload size={13} />
        Download
      </a>
    </div>
  );
}

function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy email", error);
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#8FBC8F] text-[#4B3621]">
      <div className="relative h-32 w-full bg-[#EEF8FF] sm:h-40">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
        >
          <path fill="#8FBC8F" d="M0,320 L1440,320 L1440,100 C1080,0 360,200 0,100 Z" />
        </svg>
      </div>

      <FlowerCluster side="left" anchorClassName="top-0" align="start" />
      <FlowerCluster side="right" anchorClassName="top-0" align="start" />

      <div className="px-6 pb-14 pt-8">
        <div className="mx-auto flex max-w-4xl flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="min-w-0 flex-1">
            <h2 className="font-jua text-5xl">Let's Connect</h2>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="text-lg font-semibold">{EMAIL}</span>

              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copy email address"
                className="flex items-center gap-1.5 rounded-full border border-[#4B3621]/30 px-4 py-2 text-base font-semibold transition-colors hover:bg-[#4B3621]/10"
              >
                {copied ? <FaCheck size={15} /> : <FaRegCopy size={15} />}
                {copied ? "Copied!" : "Copy"}
              </button>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#4B3621] transition-opacity hover:opacity-70"
              >
                <FaLinkedin size={28} />
              </a>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#4B3621] transition-opacity hover:opacity-70"
              >
                <FaGithub size={28} />
              </a>
            </div>

            <div className="mt-8 flex flex-col items-start gap-6 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-10">
              <DocLink href={CV_URL} label="View CV" icon={FaRegFileAlt} />
              <DocLink href={PORTFOLIO_URL} label="View Portfolio" icon={FaRegFolderOpen} />
            </div>

            <p className="mt-6 text-base text-[#4B3621]/80">
              Based in Tangerang, Indonesia · Open to internship opportunities
            </p>

            <div className="mt-8 border-t border-[#4B3621]/20 pt-4 sm:hidden">
              <p className="text-sm text-[#4B3621]/70">© 2026 Shally Liusiana</p>
            </div>
          </div>

          <nav
            aria-label="Quick navigation"
            className="hidden shrink-0 flex-col gap-3 sm:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.targetId}
                href={`#${link.targetId}`}
                className="text-base font-medium text-[#4B3621]/80 transition-colors hover:text-[#4B3621] hover:underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mx-auto mt-8 hidden max-w-4xl border-t border-[#4B3621]/20 pt-4 sm:block">
          <p className="text-sm text-[#4B3621]/70">© 2026 Shally Liusiana</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
