
import { getExperiences } from "@/data/data";
import { Experience } from "@/data/types";
import { notFound } from "next/navigation";
import ExperienceDetailsComponent from "@/components/Experience/ExperienceDetails";

const experiences = getExperiences();
function findExperience(id: string): Experience | undefined {
  return experiences.find(
    (experience: Experience) => experience.id === id
  );
}
export async function generateMetadata({ params }: {params: Promise<{id: string}>}) {
  const foundExperience = findExperience((await params).id);
  if(foundExperience) {
    return {
      title: `Brett M. Hixon | ${foundExperience.title} Details`,
      description: "Portfolio website of Brett M. Hixon, showcasing projects and skills in software development.",
    }
  } 
} 

export default async function ExperienceDetails({ params }: {params: Promise<{id: string}>}) {
  const syncParams = await params;
  const foundExperience = findExperience(syncParams.id);

  return foundExperience ? (
    <ExperienceDetailsComponent experience={foundExperience} />
  ) : (
    notFound()
  );
}
