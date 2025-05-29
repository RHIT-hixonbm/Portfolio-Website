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
    <Carousel className="w-full max-w-2xs xl:max-w-6xl lg:max-w-3xl md:max-w-3xl mb-6">
      <CarouselContent>
        {projects.filter((project) => project.isFeatured)
        .map((project) => (
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
