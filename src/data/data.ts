import { Project, Experience } from './types';
import projectsData from './projects.json';
import experiencesData from './experiences.json';

export const getProjects = (): Project[] => {
    return projectsData as Project[];
}

export const getExperiences = (): Experience[] => {
    return experiencesData as Experience[];
}