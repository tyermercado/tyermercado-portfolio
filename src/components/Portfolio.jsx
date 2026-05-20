import React from "react";
import IMG1 from "../assets/Library.png";
import IMG2 from "../assets/sneakers_ecommerce.png";
import IMG3 from "../assets/Bicycle.png";
import IMG4 from "../assets/brgysanroque.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Library Management System",
    url: "github.com/tyermercado/library-management-system",
    description:
      "Utilizes XML and XSLT to manage book borrowing. Tracks borrowing duration, fine details, and unique book IDs.",
    github: "https://github.com/tyermercado/Library-management-system",
  },
  {
    id: 2,
    image: IMG2,
    title: "G-Soles",
    url: "github.com/tyermercado/sneakers-ecommerce",
    description:
      "E-commerce site offering curated resell sneakers — limited editions, collaborations, and classics.",
    github: "https://github.com/tyermercado/sneakers-eCommerce",
  },
  {
    id: 3,
    image: IMG3,
    title: "Bicycle E-Commerce",
    url: "github.com/tyermercado/bicycleecommerce",
    description:
      "Helps users browse bicycle parts and accessories. Built as a school final project.",
    github: "https://github.com/tyermercado/bicycleEcommerce",
  },
  {
    id: 4,
    image: IMG4,
    title: "Barangay San Roque Web Portal",
    url: "barangaysanroque.com",
    description:
      "Laravel-based website and admin system for publishing announcements and events, showcasing officials and committees, and managing resident document requests with reference tracking and dark mode support.",
    demo: "https://barangaysanroque.com",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="section-card">
        <div>
          <h5 className="section-label">Recent Projects</h5>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {data.map(({ id, image, title, url, description, github, demo }) => (
            <article
              key={id}
              className="flex flex-col border border-black/[0.08] dark:border-white/[0.08] rounded-xl overflow-hidden bg-gray-50 dark:bg-zinc-800 hover:border-blue-500 dark:hover:border-blue-400 hover:-translate-y-0.5 hover:shadow-md dark:hover:shadow-none transition-all duration-200"
            >
              <div className="overflow-hidden aspect-video">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover hover:scale-[1.04] transition-transform duration-300"
                />
              </div>
              <div className="p-4 flex flex-col flex-1 gap-1">
                <h3 className="text-[0.88rem] font-semibold text-gray-900 dark:text-zinc-50 leading-tight">
                  {title}
                </h3>
                <span className="text-[0.7rem] text-blue-500 dark:text-blue-400 font-mono">
                  {url}
                </span>
                <p className="text-[0.78rem] text-gray-500 dark:text-zinc-400 leading-[1.7] flex-1 mt-1">
                  {description}
                </p>
                <div className="flex gap-4 mt-2">
                  {github && (
                    <a
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[0.76rem] text-gray-400 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-zinc-50 transition-all duration-200"
                    >
                      GitHub →
                    </a>
                  )}
                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[0.76rem] text-blue-500 dark:text-blue-400 hover:text-gray-900 dark:hover:text-zinc-50 transition-all duration-200"
                    >
                      Live Site →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
