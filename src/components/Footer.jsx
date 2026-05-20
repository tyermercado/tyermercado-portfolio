import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="border-t border-black/[0.08] dark:border-white/[0.08] py-5 mt-2">
      <div className="max-w-page mx-auto px-8 sm:px-6 flex flex-wrap items-center justify-between gap-4">
        <a
          href="#home"
          className="text-[0.88rem] font-semibold text-gray-900 dark:text-zinc-50 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-200"
        >
          Tyer Mercado
        </a>

        <ul className="flex gap-5 flex-wrap">
          {["home", "about", "experience", "portfolio", "contact"].map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className="text-[0.78rem] capitalize text-gray-400 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-zinc-50 transition-all duration-200"
              >
                {s === "experience" ? "Tech Stack" : s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/tyer-leinster-mercado-773aa6211/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-zinc-50 transition-all duration-200"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/tyermercado"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-400 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-zinc-50 transition-all duration-200"
            >
              <BsGithub />
            </a>
          </div>
          <span className="text-[0.72rem] text-gray-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} Tyer Leinster Mercado
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
