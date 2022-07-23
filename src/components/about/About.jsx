import React from "react";
import "./about.css";
import ME from "../../assets/me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const AboutCard = (props) => {
  return (
    <article className="about__card">
      {props.icon}
      <h5>{props.header}</h5>
      <small>{props.description}</small>
    </article>
  );
};

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <AboutCard
              header="Experience"
              description="3+ Years Working"
              icon={<FaAward className="about__icon" />}
            />
            <AboutCard
              header="Clients"
              description="200+ WorldWide"
              icon={<FiUsers className="about__icon" />}
            />
            <AboutCard
              header="Projects"
              description="0 Completed"
              icon={<VscFolderLibrary className="about__icon" />}
            />
          </div>

          <p>
          Line 12:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
