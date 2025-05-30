import { Experience } from "@/data/types";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { icons } from "lucide-react";

import formatDate from "@/data/utilities/formatDate"; 

export default function ExperienceNode({ experience }: { experience: Experience }) {
  const IconComponent = icons[experience.icon as keyof typeof icons] || icons.Briefcase;
  return (
    <Card className="rounded-full border-4 border-black shadow-lg mt-8" style={{ width: "22.2rem", height: "22.2rem" }}>
        <CardHeader className="mt-3">
            <CardTitle className="text-center text-md">{experience.title}</CardTitle>
            <CardDescription className="text-center">
            <div className="text-xs">{experience.company} - {experience.location}</div>
            <p className="mt-2 text-sm text-gray-800 text-center">
                {formatDate(experience.startYearAndMonth)} -{" "}
                {experience.endYearAndMonth ? formatDate(experience.endYearAndMonth) : "Present"}
            </p>
            </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col flex-wrap justify-between items-center pt-4">
            <p className="mt-2 max-w-3xs text-md text-center">{experience.shortDescription}</p>
        </CardContent>
        <CardFooter className="flex flex-col flex-wrap justify-between items-center pt-4">
            <IconComponent className="text-gray-500" />
        </CardFooter>
    </Card>
  )
}
