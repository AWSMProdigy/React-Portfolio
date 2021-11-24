import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'reel-cinema',
      description: 'Theater website made using HandlebarJs and Express',
      link: "https://intense-lake-77911.herokuapp.com/",
      repo: "https://github.com/AWSMProdigy/Theater-website"
    },
    {
      name: 'Daily-Felon',
      description: 'Comical Newspaper website',
      link: "https://jamesstitzel.github.io/The-Daily-Felon/",
      repo: "https://github.com/JamesStitzel/The-Daily-Felon"
    },
    {
      name: 'Landing-Page',
      description: 'Intro to UCF Bootcamp',
      link: "https://awsmprodigy.github.io/Landing-page/",
      repo: "https://github.com/AWSMProdigy/Landing-page"
    },
    {
      name: 'Refactor',
      description: 'Debugging',
      link: "https://awsmprodigy.github.io/Code-Refactoring/",
      repo: "https://github.com/AWSMProdigy/Code-Refactoring"
    },
    {
      name: 'RPS',
      description: 'Javascript magic',
      link: "https://awsmprodigy.github.io/RockPaperScissors/",
      repo: "https://github.com/AWSMProdigy/RockPaperScissors"
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
