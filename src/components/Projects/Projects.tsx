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
      <div className="flex flex-col gap-4 mt-10 px-4 md:px-30 mb-10">
        {projects.map((project: Project, idx: number) => {
          return (
            <FadeUp key={idx}>
              <div className="transform transition-transform duration-200 ease-out hover:scale-105 cursor-pointer">
                <SimpleProjectCard project={project} />
              </div>
            </FadeUp>
          );
        })}
      </div>
    </>
  );
}
