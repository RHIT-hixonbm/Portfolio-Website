import { Card, CardTitle, CardHeader, CardContent, CardDescription } from "@/components/ui/card";
import { Project } from "@/data/types";

export default function SimpleProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.yearAndMonth}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{project.description}</p>
      </CardContent>
    </Card>
  );
}
