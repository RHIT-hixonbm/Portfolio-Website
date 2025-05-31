import { Project, Experience, Skill } from './types';
import projectsData from './projects.json';
import experiencesData from './experiences.json';
import skillsData from './skills.json'

export const getProjects = (): Project[] => {
    return projectsData as Project[];
}

export const getExperiences = (): Experience[] => {
    return experiencesData as Experience[];
}

export const getSkills = (): Skill[] => {
    return skillsData as Skill[];
}