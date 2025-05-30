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
    image: string;
    sourceCodeUrl?: string;
    startYearAndMonth: string;
    endYearAndMonth: string;
    demoVideoUrl: string;
    isFeatured: boolean;
    additionalDocuments?: Document[];
    additionalInformation?: string;
}

interface Experience {
    id: number;
    title: string;
    company: string;
    location: string;
    startYearAndMonth: string;
    endYearAndMonth?: string;
    shortDescription: string;
    longDescription: string;
    skills: string[];
    icon: string;
}

export type { Document, Project, Experience };