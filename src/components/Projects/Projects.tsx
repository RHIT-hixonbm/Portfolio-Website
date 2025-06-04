import SimpleProjectCard from "../Home/Project/SimpleProjectCard";
import { Project } from "@/data/types";
import { getProjects } from "@/data/data";
import { useMemo } from "react";
import FadeUp from "../utilities/FadeUp";

export default function ProjectsComponent() {
  const projects: Project[] = useMemo(() => getProjects(), []);

  return (
    <>
      <h1 className="mt-20 text-6xl text-center">Full Project Gallery</h1>
      <div className="flex flex-col gap-4 mt-10 px-4">
        {projects.map((project: Project, idx: number) => {
          return (
            <FadeUp key={idx}>
              <SimpleProjectCard project={project} />
            </FadeUp>
          );
        })}
      </div>
    </>
  );
}
