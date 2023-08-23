import React from "react";
import style from "./Project.module.scss";

const experiences = [
  {
    name: "Key-Value Data Store",
    subtitle: "Database Architecture and Management",
    description:
      "A robust C++ database system designed to store and retrieve key-value pairs efficiently, even when data is larger than available system memory.",
  },
  {
    name: "Systolic Blood Pressure Prediction Model",
    subtitle: "Data Analytics and Model Building",
    description:
      "A regression model for predicting blood pressure levels using R for model building, along with data cleaning, feature selection, and validation. The result is a data-driven tool with potential applications in medical research.",
  },
  {
    name: "Two-X Virtual Campus",
    subtitle: "UI/UX Research and Design",
    description:
      "Through numerous design iterations, prototyping stages, and user research and interviews, we crafted a prototype of an immersive virtual campus mobile app aimed to enhance student interaction and collaboration in online educational settings. ",
  },
];
const Project = () => {
  return (
    <div id="project" className={style.project}>
      <h2>Project Experience</h2>
      <ul>
        {experiences.map((exp) => (
          <li>
            <h3>{exp.name}</h3>
            <h5>{exp.subtitle}</h5>
            <p>{exp.description}</p>
          </li>
        ))}
      </ul>

      
    </div>
  );
};

export default Project;
