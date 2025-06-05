import { Experience } from "@/data/types";
import DetailsPage from "../shared/DetailsPage";
import formatDate from "@/data/utilities/formatDate";

export default function ExperienceDetails({ experience }: { experience: Experience }) {
  return (
    <DetailsPage
      title={experience.company}
      image={experience.image}
      shortDescription={experience.shortDescription}
      description={experience.longDescription}
      startDate={formatDate(experience.startYearAndMonth)}
      endDate={formatDate(experience.endYearAndMonth || "")}
      badges={experience.skills}
    />
  );
}
