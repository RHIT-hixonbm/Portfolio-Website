interface Document {
    title: string;
    description: string;
    url: string;
}

interface Project {
    id: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    technologies: string[];
    image: {url: string, aspect: string};
    sourceCodeUrl?: string;
    startYearAndMonth: string;
    endYearAndMonth: string;
    demoVideoUrl?: string;
    isFeatured: boolean;
    additionalDocuments?: Document[];
    additionalInformation?: string;
    myContributions?: string[];
}

interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startYearAndMonth: string;
    endYearAndMonth?: string;
    shortDescription: string;
    longDescription: string;
    skills: string[];
    icon: string;
    featured: boolean;
}

interface Skill {
    name: string;
    priority: number;
    description: string;
}

export type { Document, Project, Experience, Skill };