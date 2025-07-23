import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";
import { motion } from "framer-motion";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === projectId);
  const handleBackClick = () => {
    // Navigate to home
    navigate("/");

    // Wait for the route to update, then scroll smoothly
    setTimeout(() => {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay helps wait for route update
  };


  if (!project) {
    return <h2 style={{ color: "#fff", padding: "2rem" }}>Project not found</h2>;
  }

  return (
    <motion.section
      className="project-details section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="project-container">

        <motion.img
          src={project.image}
          alt={project.title}
          className="project-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        />

        <motion.h1
          className="project-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {project.title}
        </motion.h1>

        <motion.p
          className="project-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {project.description}
        </motion.p>

        <h4 className="techStack">Tech Stack:</h4>
        <ul className="tech-stack">
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </div>

        <motion.button
          className="back-btn"
          onClick={handleBackClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          ← Back to Projects
        </motion.button>

      </div>
    </motion.section>
  );
};

export default ProjectDetails;
