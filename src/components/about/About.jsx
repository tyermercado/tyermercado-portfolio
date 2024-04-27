import React from "react";
import "./about.css";
import ME from "../../assets/home.jpg";


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          {/* <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <FaFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div> */}
          <p>
          I'm <b>Tyer Leinster G. Mercado</b>, a 23-year-old web developer from the Philippines. Technology has always fascinated me, and I have a deep passion for all things related to programming and web development.
          As a fresh graduate, I have a solid foundation in programming, but I consider myself to be at the beginning of my journey. I have learned the basics of several programming languages and have a good understanding of fundamental concepts. However, I'm aware that there is so much more to learn and explore in this vast field.
          </p>
          <p>My problem-solving skills, attention to detail, and strong work ethic are qualities that I bring to the table. I'm a team player and value effective collaboration and communication. I believe that working alongside experienced individuals will not only enhance my technical skills but also nurture my professional growth.</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
