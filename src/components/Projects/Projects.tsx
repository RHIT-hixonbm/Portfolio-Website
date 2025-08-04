"use client";

import SimpleProjectCard from "../shared/SimpleProjectCard";
import { Project } from "@/data/types";
import { getProjects } from "@/data/data";
import { useCallback, useMemo, useState } from "react";
import FadeUp from "../utilities/FadeUp";
import usePerformTransition from "@/hooks/usePerformTransition";

export default function ProjectsComponent() {
  const projects: Project[] = useMemo(() => getProjects(), []);
  const performTransition = usePerformTransition();
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 5;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const visibleProjects = useMemo(() => {
    return projects.slice(
      (currentPage - 1) * projectsPerPage,
      currentPage * projectsPerPage
    );
  }, [currentPage]);

  return (
    <>
      <h1 className="mt-30 text-6xl text-center">Full Project Gallery</h1>
      <div className="flex flex-col gap-4 mt-10 px-4 md:px-30 mb-10">
        {visibleProjects.map((project: Project, idx: number) => {
          return (
            <FadeUp key={idx}>
              <div
                className="transform transition-transform duration-200 ease-out hover:scale-105 cursor-pointer"
                onClick={(e) => performTransition(e, `/projects/${project.id}`)}
              >
                <SimpleProjectCard project={project} />
              </div>
            </FadeUp>
          );
        })}
      </div>

      <div className="flex flex-row gap-5 justify-center mt-10 mb-10">
        <button
          className="cursor-pointer border-2 rounded-md disabled:opacity-50 disabled:cursor-default px-3 py-1"
          onClick={() => {
            setCurrentPage((prevIndex) => prevIndex - 1);
            window.scrollTo({
              top: 0,
            });
          }}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <div
            className={`cursor-pointer border-2 rounded-md px-3 py-1 ${
              index + 1 === currentPage ? "bg-gray-300" : ""
            }`}
            onClick={() => {
              setCurrentPage(index + 1);
              window.scrollTo({
                top: 0,
              });
            }}
          >
            {index + 1}
          </div>
        ))}
        <button
          className="cursor-pointer border-2 rounded-md disabled:opacity-50 disabled:cursor-default px-3 py-1"
          onClick={() => {
            setCurrentPage((prevIndex) => prevIndex + 1);
            window.scrollTo({
              top: 0,
            });
          }}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}
