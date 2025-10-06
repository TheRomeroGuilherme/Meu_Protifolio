import { useState, useEffect } from 'react';
import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { projectsApi } from '../services/api';
import type { Project } from '../types';
import './Home.css';

export const Home = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await projectsApi.getAll();
      setProjects(response.data);
    } catch (error) {
      console.error('Erro ao carregar projetos:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Hero />
      
      <section className="projects-section" id="projects">
        <div className="container">
          <h2 className="section-title">Meus Projetos</h2>
          {loading ? (
            <p className="loading-text">Carregando projetos...</p>
          ) : projects.length === 0 ? (
            <p className="no-projects">Nenhum projeto cadastrado ainda.</p>
          ) : (
            <div className="projects-grid">
              {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};