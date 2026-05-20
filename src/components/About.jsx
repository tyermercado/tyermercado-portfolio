import React from "react";

const About = () => {
  return (
    <section id="about">
      <div className="section-card">
        <div>
          <h5 className="section-label">About</h5>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[0.9rem] text-gray-500 dark:text-zinc-400 leading-[1.85]">
            I'm{" "}
            <strong className="text-gray-900 dark:text-zinc-50 font-semibold">
              Tyer Leinster G. Mercado
            </strong>
            , a full-stack developer from Batangas, Philippines. I specialize in
            building web applications using Laravel, PHP, React, and Python, with
            hands-on experience in RESTful APIs, database design, and automated
            document systems.
          </p>
          <p className="text-[0.9rem] text-gray-500 dark:text-zinc-400 leading-[1.85]">
            I write tested, maintainable code and leverage AI-assisted development
            to build efficiently. I'm a detail-oriented team player who's always
            eager to learn and take on new challenges.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
