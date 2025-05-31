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

export default function ExperienceNode({
  experience,
}: {
  experience: Experience;
}) {
  const IconComponent =
    icons[experience.icon as keyof typeof icons] || icons.Briefcase;
  return (
    <Card className="flex flex-col justify-between rounded-full border-4 border-black shadow-lg mt-8 gap-2 w-[22.7rem] h-[22.7rem] lg:w-[30rem] lg:h-[30rem]">
      <CardHeader className="mt-6">
        <CardTitle className="text-center text-md lg:text-2xl">
          {experience.title}
        </CardTitle>
        <CardDescription className="text-center">
          <div className="text-xs px-3 lg:px-5 lg:text-lg">
            {experience.company} - {experience.location}
          </div>
          <p className="mt-2 text-sm text-gray-800 text-center lg:text-xl">
            {formatDate(experience.startYearAndMonth)} -{" "}
            {experience.endYearAndMonth
              ? formatDate(experience.endYearAndMonth)
              : "Present"}
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-wrap justify-between items-center pt-4">
        <p className="mt-2 max-w-3xs lg:max-w-md text-md text-center lg:text-2xl lg:px-5">
          {experience.shortDescription}
        </p>
      </CardContent>
      <CardFooter className="flex flex-col flex-wrap justify-between items-center pt-4">
        <IconComponent className="text-gray-500 lg:w-10 lg:h-10" />
      </CardFooter>
    </Card>
  );
}
