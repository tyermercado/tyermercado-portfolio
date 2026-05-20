import React from "react";

const frontend = [
  { name: "HTML5", level: "Intermediate" },
  { name: "CSS3", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "JavaScript", level: "Basic" },
  { name: "Bootstrap", level: "Basic" },
  { name: "React", level: "Basic" },
];

const backend = [
  { name: "Java", level: "Basic" },
  { name: "PHP", level: "Basic" },
  { name: "Laravel", level: "Intermediate" },
  { name: "MySQL", level: "Basic" },
  { name: "Python", level: "Basic" },
];

const Experience = () => {
  return (
    <section id="experience">
      <div className="section-card">
        <div>
          <h5 className="section-label">Tech Stack</h5>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-[0.68rem] tracking-[0.18em] uppercase font-medium text-gray-400 dark:text-zinc-500 mb-3">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {frontend.map(({ name, level }) => (
                <div key={name} className="chip">
                  <span className="text-[0.8rem] font-medium text-gray-900 dark:text-zinc-50">
                    {name}
                  </span>
                  <span className="text-[0.65rem] text-gray-400 dark:text-zinc-500">
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[0.68rem] tracking-[0.18em] uppercase font-medium text-gray-400 dark:text-zinc-500 mb-3">
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {backend.map(({ name, level }) => (
                <div key={name} className="chip">
                  <span className="text-[0.8rem] font-medium text-gray-900 dark:text-zinc-50">
                    {name}
                  </span>
                  <span className="text-[0.65rem] text-gray-400 dark:text-zinc-500">
                    {level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
