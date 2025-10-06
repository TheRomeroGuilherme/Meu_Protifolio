import axios from 'axios';
import type { Project, Skill, Experience } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:5100/api'
});

export const projectsApi = {
  getAll: () => api.get<Project[]>('/projects'),
  getById: (id: number) => api.get<Project>(`/projects/${id}`),
  create: (project: Omit<Project, 'id' | 'createdAt'>) => 
    api.post<Project>('/projects', project)
};

export const skillsApi = {
  getAll: () => api.get<Skill[]>('/skills')
};

export const experiencesApi = {
  getAll: () => api.get<Experience[]>('/experiences')
};