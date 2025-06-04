import ProjectDetailsComponent from "@/components/Projects/ProjectDetails";
import { getProjects } from "@/data/data";
import { Project } from "@/data/types";
import { notFound } from "next/navigation";

const projects = getProjects();
function findProject(id: string): Project | undefined {
  return projects.find(
    (project: Project) => project.id === id
  );
}
export async function generateMetadata({ params }: {params: Promise<{id: string}>}) {
  const foundProject = findProject((await params).id);
  if(foundProject) {
    return {
      title: `Brett M. Hixon | ${foundProject.title} Details`,
      description: "Portfolio website of Brett M. Hixon, showcasing projects and skills in software development.",
    }
  } 
} 

export default async function ProjectDetails({ params }: {params: Promise<{id: string}>}) {
  const syncParams = await params;
  const foundProject = findProject(syncParams.id);

  return foundProject ? (
    <ProjectDetailsComponent project={foundProject} />
  ) : (
    notFound()
  );
}
