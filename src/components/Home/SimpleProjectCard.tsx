import { Card, CardTitle, CardHeader, CardContent, CardDescription } from "@/components/ui/card";
import { Project } from "@/data/types";
import { parse, format } from "date-fns";

export default function SimpleProjectCard({ project }: { project: Project }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{format(parse(project.yearAndMonth, 'yyyy-MM', new Date()), 'MMMM yyyy')}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{project.description}</p>
      </CardContent>
    </Card>
  );
}
