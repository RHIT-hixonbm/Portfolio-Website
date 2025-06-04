import React, { useMemo, useRef, useState } from "react";
import { getProjects } from "@/data/data";
import { Project } from "@/data/types";
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SimpleProjectCard from "../../shared/SimpleProjectCard";

export default function ProjectCarousel() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!hasAnimated) {
      setHasAnimated(true);
      setTimeout(() => {
        if (ref.current) {
          ref.current.classList.add("animate-shake");

          ref.current.addEventListener(
            "animationend",
            () => {
              if (ref.current) {
                ref.current.classList.remove("animate-shake");
              }
            },
            { once: true }
          );
        }
      }, 600);
    }
  };

  const projects: Project[] = useMemo(() => getProjects(), []);
  return (
    <Carousel className="w-full max-w-2xs xl:max-w-6xl lg:max-w-3xl md:max-w-3xl mb-6">
      <CarouselContent
        ref={ref}
        onMouseEnter={handleMouseEnter}
      >
        {projects
          .filter((project) => project.isFeatured)
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
