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
import { useInView } from "react-intersection-observer";

export default function SimpleProjectCard({ project }: { project: Project }) {
  //Observer to activate animations
  const { ref, inView } = useInView();

  return (
    <Card ref={ref} className={`border-2 border-black rounded-lg shadow-lg h-full ${inView && "animate-shake" }`}>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>
          {project.startYearAndMonth !== project.endYearAndMonth
            ? formatDate(project.startYearAndMonth) +
              " - " +
              formatDate(project.endYearAndMonth)
            : formatDate(project.startYearAndMonth)}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex justify-center items-center mb-4">
          <Image
            src={project.image}
            alt={project.title}
            width={200}
            height={200}
            className="rounded-lg mb-4"
          />
        </div>
        <p>{project.shortDescription}</p>
      </CardContent>
      <CardFooter className="flex flex-col md:flex-row flex-wrap justify-between items-center pt-4">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge key={index} className="mb-2">
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
