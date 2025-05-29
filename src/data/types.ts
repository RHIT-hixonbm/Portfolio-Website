interface Document {
    title: string;
    description: string;
    url: string;
}

interface Project {
    id: string;
    title: string;
    description: string;
    tehcnologies: string[];
    image: string;
    sourceCodeUrl: string;
    yearAndMonth: string;
    demoVideoUrl: string;
    additionalDocuments?: Document[];
}

export type { Document, Project };