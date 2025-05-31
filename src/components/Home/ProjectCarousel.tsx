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
import { useInView } from "react-intersection-observer";

export default function ProjectCarousel() {
  //Observer to activate animations
  const { ref, inView } = useInView({
    delay: 2000,
    triggerOnce: true,
    threshold: 0.8,
    initialInView: false,
  });

  const projects: Project[] = useMemo(() => getProjects(), []);
  return (
    <Carousel className="w-full max-w-2xs xl:max-w-6xl lg:max-w-3xl md:max-w-3xl mb-6">
      <CarouselContent ref={ref} className={`${inView && "animate-shake" }`}>
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
