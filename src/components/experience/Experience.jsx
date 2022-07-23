import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const ExperienceDetail = (props) => {
  return (
    <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon"/>
      <div>
        <h4>{props.tool}</h4>
        <small className="text-light">{props.level}</small>
      </div>
    </article>
  );
};

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <ExperienceDetail tool="HTML" level="Experienced" />
            <ExperienceDetail tool="CSS" level="Intermediate" />
            <ExperienceDetail tool="JavaScript" level="Experienced" />
            <ExperienceDetail tool="Bootstrap" level="Experienced" />
            <ExperienceDetail tool="React" level="Experienced" />
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <ExperienceDetail tool="NodeJS" level="Experienced" />
            <ExperienceDetail tool="MongoDB" level="Intermediate" />
            <ExperienceDetail tool="PHP" level="Experienced" />
            <ExperienceDetail tool="Python" level="Experienced" />
            <ExperienceDetail tool="GO" level="Experienced" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
