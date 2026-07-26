"use client";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Project } from "@/data/types";
import { Badge } from "@/components/ui/badge";
import formatDate from "@/data/utilities/formatDate";
import Image from "next/image";
import usePerformTransition from "@/hooks/usePerformTransition";

export default function SimpleProjectCard({
  project,
  showLink = false,
}: {
  project: Project;
  showLink?: boolean;
}) {
  const performTransition = usePerformTransition();

  return (
    <Card
      className={`border-2 border-black rounded-lg shadow-lg h-full transform`}
    >
      <CardHeader className="flex justify-between">
        <div className="flex flex-col gap-2">
          <CardTitle className="text-xl md:text-2xl 2xl:text-4xl">{project.title}</CardTitle>
          <CardDescription>
            <span className="text-sm md:text-base 2xl:text-xl">
            {project.startYearAndMonth !== project.endYearAndMonth
              ? formatDate(project.startYearAndMonth) +
                " - " +
                formatDate(project.endYearAndMonth)
              : formatDate(project.startYearAndMonth)}
            </span>
          </CardDescription>
        </div>
        {showLink && (
          <div
            className="text-blue-600 hover:underline cursor-pointer text-sm"
            onClick={(e) => performTransition(e, `/projects/${project.id}`)}
            role="button"
          >
            View details
          </div>
        )}
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex justify-center items-center mb-4">
          <Image
            src={project.image.url}
            alt={project.title}
            width={600}
            height={600}
            className="rounded-lg mb-4 w-48 h-48 md:w-64 md:h-64 xl:w-96 xl:h-96 2xl:w-[32rem] 2xl:h-[32rem] object-cover"
          />
        </div>
        <p className="text-base md:text-lg 2xl:text-2xl">{project.shortDescription}</p>
      </CardContent>
      <CardFooter className="flex flex-col md:flex-row flex-wrap justify-between items-center pt-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge key={index} className="mb-2 text-xs 2xl:text-lg 2xl:px-4 2xl:py-2">
              {tech}
            </Badge>
          ))}
        </div>
        {project.sourceCodeUrl && (
          <div className="text-xs text-gray-500 font-medium">
            Source code available
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
