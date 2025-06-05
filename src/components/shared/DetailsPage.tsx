import Image from "next/image";
import { Badge } from "../ui/badge";
import { Document } from "@/data/types";

export default function DetailsPage({
  title,
  videoUrl,
  image,
  shortDescription,
  description,
  startDate,
  endDate,
  badges,
  contributions,
  additionalInformation,
  additionalDocuments,
  location,
  role,
}: {
  title: String;
  videoUrl?: string;
  image: { url: string; aspect: string };
  shortDescription: string;
  description: string;
  startDate: string;
  endDate: string;
  badges?: string[];
  contributions?: string[];
  additionalInformation?: string;
  additionalDocuments?: Document[];
  location?: string;
  role?: string;
}) {
  return (
    <div className="flex flex-col justify-center gap-4 mb-10">
      <div className="mt-30 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h1>
      </div>
      {role && (
        <p className="text-center text-xl font-medium text-gray-700 dark:text-gray-300 mt-2">
          {role}
        </p>
      )}
      <p className="text-center text-lg text-gray-500 mt-2">
        {startDate}
        {startDate && endDate && " – "}
        {endDate}
      </p>
      {location && (
        <p className="text-center text-md text-gray-600 dark:text-gray-300">
          <span className="font-medium">{location}</span>
        </p>
      )}
      <div className="flex gap-3 justify-center">
        {badges &&
          badges.map((badge: string, idx: number) => {
            return (
              <Badge className="bg-black text-white text-sm" key={idx}>
                {badge}
              </Badge>
            );
          })}
      </div>
      <div className="flex justify-center">
        {videoUrl ? (
          <iframe
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="max-w-lg md:max-w-3xl w-full aspect-video mt-10"
          />
        ) : (
          <div className={`relative max-w-sm w-full ${image.aspect} mt-10`}>
            <Image fill src={image.url} alt={`Image for ${title}`} />
          </div>
        )}
      </div>
      <div className="px-6 md:px-24 py-8 mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Description
        </h2>
        <blockquote className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/30 px-6 py-4 mb-6 text-gray-700 dark:text-gray-200 italic">
          {shortDescription}
        </blockquote>
        <div className="mt-6 text-lg leading-relaxed text-gray-800 dark:text-gray-200">
          {description}
        </div>
      </div>
      {contributions && contributions.length > 0 && (
        <div className="px-6 md:px-24 py-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            My Contributions
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
            {contributions.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {additionalInformation && (
        <div className="px-6 md:px-24 py-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Additional Information
          </h2>
          <div className="text-gray-700 dark:text-gray-200">
            {additionalInformation}
          </div>
        </div>
      )}
      {additionalDocuments && additionalDocuments.length > 0 && (
        <div className="px-6 md:px-24 py-4">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            Additional Documents
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-200">
            {additionalDocuments.map((doc, idx) => (
              <li key={idx}>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-200"
                >
                  {doc.title}
                </a>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {doc.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
