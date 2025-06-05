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
import { useInView } from "react-intersection-observer";
import usePerformTransition from "@/hooks/usePerformTransition";

export default function ExperienceNode({
  experience,
}: {
  experience: Experience;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const IconComponent =
    icons[experience.icon as keyof typeof icons] || icons.Briefcase;
  const performTransition = usePerformTransition();

  return (
    <Card
      ref={ref}
      className={`flex flex-col opacity-0 justify-between rounded-full border-4 border-black shadow-lg mt-8 gap-2 w-[22.7rem] h-[22.7rem] lg:w-[30rem] lg:h-[30rem] transform transition-transform duration-200 ease-out hover:scale-105 ${
        inView && "animate-fly-in"
      } cursor-pointer`}
      onClick={(e) => performTransition(e, `/experience/${experience.id}`)}
    >
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
