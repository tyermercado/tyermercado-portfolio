import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-5 lg:sticky lg:top-6">
      {/* Dev Card — always dark */}
      <div className="bg-[#18181b] rounded-2xl p-6 flex flex-col gap-5 min-h-[200px]">
        <div className="flex justify-between text-[0.6rem] tracking-[0.15em] uppercase text-white/35 font-medium">
          <span>PORTFOLIO</span>
          <span>ACCESS CARD</span>
        </div>
        <div className="flex-1">
          <span className="text-[0.62rem] tracking-[0.18em] uppercase text-blue-400 font-semibold block mb-2">
            OPEN TO WORK
          </span>
          <h2 className="text-[2.8rem] font-extrabold tracking-[-0.04em] leading-none text-zinc-50">
            TYER
          </h2>
          <p className="text-[0.65rem] tracking-[0.14em] uppercase text-white/35 mt-1">
            WEB DEVELOPER
          </p>
        </div>
        <div className="flex justify-between items-center text-[0.65rem] tracking-[0.1em] uppercase text-white/35">
          <span className="flex items-center gap-1">
            <HiOutlineLocationMarker className="text-[0.8rem]" />
            Philippines
          </span>
          <span>2025</span>
        </div>
      </div>

      {/* Quick Contact */}
      <div className="bg-white dark:bg-zinc-900 border border-black/[0.08] dark:border-white/[0.08] rounded-2xl p-5 shadow-sm dark:shadow-none">
        <h3 className="text-[0.85rem] font-semibold text-gray-900 dark:text-zinc-50 mb-4">
          Get In Touch
        </h3>
        <div className="flex flex-col divide-y divide-black/[0.06] dark:divide-white/[0.06]">
          {[
            {
              icon: <MdOutlineEmail />,
              label: "leinster.tyer12@gmail.com",
              href: "mailto:leinster.tyer12@gmail.com",
            },
            {
              icon: <BsLinkedin />,
              label: "tyer-leinster-mercado",
              href: "https://www.linkedin.com/in/tyer-leinster-mercado-773aa6211/",
            },
            {
              icon: <BsGithub />,
              label: "github.com/tyermercado",
              href: "https://github.com/tyermercado",
            },
          ].map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 py-2.5 text-[0.78rem] text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-50 transition-all duration-200 overflow-hidden"
            >
              <span className="text-blue-500 dark:text-blue-400 text-[0.95rem] flex-shrink-0">
                {icon}
              </span>
              <span className="truncate">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
