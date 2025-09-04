// src/components/Projects.jsx
import { Link } from "react-router-dom";
import projects from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="header-section">
        <h2>PROJECTS</h2>
        <p className="b4b4b4">Here are some of my projects that I have worked on.</p>
      </div>

      <div className="project-content">
        {projects.map((project) => (
          <div key={project.id} className="card-project card-large">
            <div className="card-image">
              <img
                className="card-img-item"
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="card-header">
              <h3 className="card-title">{project.title}</h3>
            </div>

            <div className="card-body">
              {/* show only the first 120 chars of description */}
              <p>{project.description.slice(0, 120)}...</p>
            </div>

            <div className="card-footer">
              <Link to={`/projects/${project.id}`} className="primary-btn">
                See more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
