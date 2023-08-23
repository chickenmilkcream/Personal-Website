import React from "react";
import {
  About,
  Contact,
  Education,
  Work,
  Project,
  Hobbies,
} from "../../containers";
import "./Resume.module.scss";

const Resume = () => {
  return (
    <article>
      <About />
      <Education />
      <Work />
      <Project />
      <Hobbies />
      <Contact />
    </article>
  );
};

export default Resume;
