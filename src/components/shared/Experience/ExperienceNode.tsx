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
      className={`flex flex-col opacity-0 justify-between rounded-full border-4 border-black shadow-lg mt-8 gap-2 w-[24rem] h-[24rem] lg:w-[32rem] lg:h-[32rem] xl:w-[38rem] xl:h-[38rem] 2xl:w-[44rem] 2xl:h-[44rem] transform transition-transform duration-200 ease-out hover:scale-105 ${
        inView && "animate-fly-in"
      } cursor-pointer`}
      onClick={(e) => performTransition(e, `/experience/${experience.id}`)}
    >
      <CardHeader className="mt-6 lg:mt-10 xl:mt-14 2xl:mt-16 px-8 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        <CardTitle className="text-center text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-bold">
          {experience.title}
        </CardTitle>
        <CardDescription className="text-center flex flex-col items-center">
          <div className="text-sm lg:text-lg xl:text-2xl 2xl:text-3xl font-medium mt-2 text-gray-700">
            {experience.company} - {experience.location}
          </div>
          <p className="mt-2 text-xs text-gray-500 text-center lg:text-base xl:text-lg 2xl:text-xl">
            {formatDate(experience.startYearAndMonth)} -{" "}
            {experience.endYearAndMonth
              ? formatDate(experience.endYearAndMonth)
              : "Present"}
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col flex-wrap justify-between items-center">
        <p className="max-w-3xs lg:max-w-md xl:max-w-xl 2xl:max-w-2xl text-sm text-center lg:text-lg xl:text-2xl 2xl:text-3xl lg:px-5">
          {experience.shortDescription}
        </p>
      </CardContent>
      <CardFooter className="mb-8 lg:mb-12 xl:mb-16 2xl:mb-20 flex flex-col flex-wrap justify-between items-center">
        <IconComponent className="text-gray-500 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-16 2xl:h-16" />
      </CardFooter>
    </Card>
  );
}
