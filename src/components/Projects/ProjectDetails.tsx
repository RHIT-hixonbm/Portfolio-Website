import { Project } from "@/data/types";
import DetailsPage from "../shared/DetailsPage";
import formatDate from "@/data/utilities/formatDate";

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <DetailsPage
      title={project.title}
      image={project.image}
      videoUrl={project.demoVideoUrl}
      shortDescription={project.shortDescription}
      description={project.longDescription}
      startDate={formatDate(project.startYearAndMonth)}
      endDate={formatDate(project.endYearAndMonth)}
    />
  );
}
