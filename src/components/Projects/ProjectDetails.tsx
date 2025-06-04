import { Project } from "@/data/types";
import DetailsPage from "../shared/DetailsPage";

export default function ProjectDetails({ project }: { project: Project }) {
    return (
        <DetailsPage title={project.title} image={project.image} videoUrl={project.demoVideoUrl} />
    )
}