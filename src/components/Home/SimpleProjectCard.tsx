import { Card, CardTitle, CardHeader, CardContent, CardDescription } from "@/components/ui/card";
import { Project } from "@/data/types";
import formatDate from "@/data/utilities/formatDate";

export default function SimpleProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{formatDate(project.startYearAndMonth) + " - " + formatDate(project.endYearAndMonth)}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{project.description}</p>
      </CardContent>
    </Card>
  );
}
