import React, { useState } from "react";
import axios from "axios";
import "./projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);

  const displayToDos = () => {
    const api = `https://api.github.com/users/Bupka/repos`;
    axios
      .get(api)
      .then((resp) => setProjects(resp.data))
      .catch((e) => console.log(e));
  };

  return (
    <section className="projects">
      <button className="btn" onClick={displayToDos}>
        Show Projects
      </button>
      <div className="resp">
        {projects &&
          projects.map((project) => (
            <div key={project.id} className="results">
              <h1>{project.name}</h1>
              <p>
                <a href={project.html_url}>{project.html_url}</a>
              </p>
              <span className="lang-span">{project.language}</span>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Projects;
