// src/components/Projects.js
import React from "react";

const Projects = () => {
  // Define your class projects data here
  const projects = [
    { id: 1, title: "Project 1", description: "Description of Project 1" },
    { id: 2, title: "Project 2", description: "Description of Project 2" },
    // Add more projects here
  ];

  return (
    <div>
      <h1>Class Projects</h1>
      <ul>
        {projects.map((project) => ( // Use the correct variable name "project"
          <li key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
