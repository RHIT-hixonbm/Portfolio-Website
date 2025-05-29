import React, { useMemo } from "react";
import { getProjects } from "@/data/data";
import { Project } from "@/data/types";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SimpleProjectCard from "./SimpleProjectCard";

export default function ProjectCarousel() {
  const projects: Project[] = useMemo(() => getProjects(), []);
  return (
    <Carousel className="w-full max-w-xs md:max-w-3xl mx-auto my-8 border-2 border-black rounded-lg shadow-lg">
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem key={project.id}>
            <SimpleProjectCard project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="border-2 border-black shadow-lg cursor-pointer" />
      <CarouselNext className="border-2 border-black shadow-lg cursor-pointer" />
    </Carousel>
  );
}
