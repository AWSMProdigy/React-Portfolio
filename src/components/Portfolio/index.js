import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'reel-cinema',
      description: 'Theater website made using HandlebarJs and Express',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'Daily-Felon',
      description: 'Comical Newspaper website',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'Landing-Page',
      description: 'Intro to UCF Bootcamp',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'Refactor',
      description: 'Debugging',
      link: "https://github.com",
      repo: "https://github.com"
    },
    {
      name: 'RPS',
      description: 'Javascript magic',
      link: "https://github.com",
      repo: "https://github.com"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
