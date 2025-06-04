import Image from "next/image";

export default function DetailsPage({
  title,
  videoUrl,
  image,
  shortDescription,
  description,
  startDate,
  endDate,
}: {
  title: String;
  videoUrl?: string;
  image: { url: string; aspect: string };
  shortDescription: string;
  description: string;
  startDate: string;
  endDate: string;
}) {
  return (
    <div className="flex flex-col justify-center gap-4 mb-10">
      <div className="mt-30 text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">{title}</h1>
      </div>
      <p className="text-center text-lg text-gray-500 mt-2">
        {startDate}
        {startDate && endDate && " – "}
        {endDate}
      </p>
      <div className="flex justify-center">
        {videoUrl ? (
          <iframe
            src={videoUrl}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="max-w-3xl w-full aspect-video mt-10"
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
    </div>
  );
}
