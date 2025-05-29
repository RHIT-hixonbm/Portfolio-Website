interface Document {
    title: string;
    description: string;
    url: string;
}

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    image: string;
    sourceCodeUrl: string;
    startYearAndMonth: string;
    endYearAndMonth: string;
    demoVideoUrl: string;
    isFeatured: boolean;
    additionalDocuments?: Document[];
}

export type { Document, Project };