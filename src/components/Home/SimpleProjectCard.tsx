import { Card, CardTitle, CardHeader, CardContent, CardDescription } from "@/components/ui/card";
import { Project } from "@/data/types";
import formatDate from "@/data/utilities/formatDate";
import Image from "next/image";

export default function SimpleProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{formatDate(project.startYearAndMonth) + " - " + formatDate(project.endYearAndMonth)}</CardDescription>
      </CardHeader>
      <CardContent>
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
    </Card>
  );
}
