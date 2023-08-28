import React from "react";
import "./Work.module.scss";

const experiences = [
  {
    employer: "University of Toronto, CAP Lab",
    position: "Undergraduate Research Assistant",
    date: "09.2022 - 01.2023",
    description: [
      "🧠 Converted several key components of a legacy neural networks simulator from C to Python with added technical documentation",
      "🧠 Worked under Prof. Blair Armstrong @ UofT Computation and Psycholinguistics Lab",
    ],
  },
  {
    employer: "Index Exchange",
    position: "Backend Developer Intern",
    date: "05.2022 - 09.2022",
    description: [
      "📮 Implemented features for several major high-traffic APIs written in Golang with an emphasis on enhancing reliability, performance, and maintainability",
      "📮 Expanded Prometheus alerts and Grafana panels to actively monitor the traffic response and error rate among 500k daily logs for several major backend services",
    ],
  },
  {
    employer: "Security Compass",
    position: "Software Developer Intern",
    date: "05.2021 - 05.2022",
    description: [
      "🔐 Planned and developed a new customizable task grouping feature using ReactJS, Django, and PostgreSQL, improving workflow and code reusability for 50+ enterprise clients",
      "🔐 Reduced manual regression testing cycle (2 weeks to 4 days) and increased total automation coverage by 40% by implementing 200+ automation scripts using CypressJS to run on the CI/CD pipeline",
      "🔐 Received `Rising Star Award` for outstanding performance",
    ],
  },
  {
    employer: "University of Toronto, Department of CS",
    position: "Course Content Developer + Teaching Assistant",
    date: "05.2020 - 05.2022",
    description: [
      "🍎 May 2020: Developed 4 programming assignments, 12 worksheets, and detailed documentation for courses taken by 1000+ students annually",
      "🍎 Sept 2020 - Jan 2022: Led weekly 2-hour tutorials and office hours for 25+ students. Provided detailed feedback for assignments, projects, term tests, and exams",
      "🍎 Courses: Foundations of Computer Science I & II, Mathematical Expression and Reasoning",
    ],
  },
];

const Work = () => {
  return (
    <div id="work">
      <h2>Work Experience</h2>
      <ul>
        {experiences.map((exp) => (
          <li>
            <h3>{exp.employer}</h3>
            <h4>{exp.position}</h4>
            <h5>{exp.date}</h5>
            <ul>
              {exp.description.map((point) => (
                <li>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Work;
