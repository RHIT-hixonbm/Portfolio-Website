import ProjectsComponent from "@/components/Projects/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brett M. Hixon | Projects",
  description: "Portfolio website of Brett M. Hixon, showcasing projects and skills in software development.",
}

export default function Projects() {
    return <ProjectsComponent />
}