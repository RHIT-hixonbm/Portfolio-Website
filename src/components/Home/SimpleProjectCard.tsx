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

export default function SimpleProjectCard({ project }: { project: Project }) {
  return (
    <Card className="border-2 border-black rounded-lg shadow-lg h-full">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>
          {formatDate(project.startYearAndMonth) +
            " - " +
            formatDate(project.endYearAndMonth)}
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
        <p>{project.description}</p>
      </CardContent>
      <CardFooter>
        {project.technologies.map((tech, index) => (
          <Badge key={index} className="mr-2 mb-2">
            {tech}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
