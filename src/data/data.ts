import { Project } from './types';
import projectsData from './projects.json';

export const getProjects = (): Project[] => {
    return projectsData as Project[];
}