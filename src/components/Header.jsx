import React, { useState } from "react";
import ME from "../assets/tyer.png";
import CV from "../assets/Tyer_CV.pdf";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { FiSun, FiMoon } from "react-icons/fi";

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return (
    <header id="home" className="pt-8">
      <div className="relative flex gap-7 items-start bg-white dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl p-7 shadow-sm dark:shadow-none sm:flex-row flex-col sm:text-left text-center">

        {/* Avatar */}
        <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-black/[0.08] dark:border-white/[0.08] bg-gray-100 dark:bg-zinc-800 sm:mx-0 mx-auto">
          <img className="w-full h-full object-cover object-top" src={ME} alt="Tyer Leinster Mercado" />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-3 flex-1 pr-10">
          <h1 className="text-[1.35rem] font-bold tracking-tight text-gray-900 dark:text-zinc-50 leading-tight">
            Tyer Leinster Mercado
          </h1>

          <div className="flex items-center gap-2 flex-wrap sm:justify-start justify-center">
            <span className="flex items-center gap-1 text-[0.8rem] text-gray-500 dark:text-zinc-400">
              <HiOutlineLocationMarker />
              Batangas, Philippines
            </span>
            <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-zinc-600 inline-block" />
            <span className="text-[0.8rem] text-blue-500 dark:text-blue-400 font-medium">
              AI | Web Developer
            </span>
          </div>

          <div className="flex gap-2 flex-wrap sm:justify-start justify-center">
            <a href={CV} download className="btn-primary">
              Download CV
            </a>
            <a href="mailto:leinster.tyer12@gmail.com" className="btn">
              <MdOutlineEmail />
              Send Email
            </a>
            <a href="#contact" className="btn">
              Get In Touch
            </a>
          </div>

          <div className="flex gap-4 items-center sm:justify-start justify-center">
            <a
              href="https://www.linkedin.com/in/tyer-leinster-mercado-773aa6211/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[0.78rem] text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-50 transition-all duration-200"
            >
              <BsLinkedin className="text-[0.9rem]" />
              LinkedIn
            </a>
            <a
              href="https://github.com/tyermercado"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-[0.78rem] text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-50 transition-all duration-200"
            >
              <BsGithub className="text-[0.9rem]" />
              GitHub
            </a>
          </div>
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-zinc-800 border border-black/[0.08] dark:border-white/[0.08] rounded text-gray-400 dark:text-zinc-500 text-sm hover:text-gray-900 dark:hover:text-zinc-50 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-500/10 dark:hover:bg-blue-400/10 transition-all duration-200 cursor-pointer"
        >
          {isDark ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;
