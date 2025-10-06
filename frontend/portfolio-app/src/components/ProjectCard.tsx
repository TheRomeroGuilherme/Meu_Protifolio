import type { Project } from '../types';
import './ProjectCard.css';

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  const technologies = project.technologies.split(',').map(t => t.trim());

  return (
    <div className="project-card">
      {project.imageUrl && (
        <div className="project-image">
          <img src={project.imageUrl} alt={project.title} />
        </div>
      )}
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="technologies">
          {technologies.map((tech, i) => (
            <span key={i} className="tech-badge">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};