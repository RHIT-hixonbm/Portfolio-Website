"use client";

import ProjectDetailsComponent from "@/components/Projects/ProjectDetails";
import { getProjects } from "@/data/data";
import { Project } from "@/data/types";
import { notFound } from "next/navigation";
import { useMemo } from "react";
import { useParams } from 'next/navigation'

export default function ProjectDetails() {
  const projects = useMemo(() => getProjects(), []);
  const params = useParams<{ id: string }>();
  const foundProject = projects.find(
    (project: Project) => project.id === params.id
  );

  return foundProject ? (
    <ProjectDetailsComponent project={foundProject} />
  ) : (
    notFound()
  );
}
