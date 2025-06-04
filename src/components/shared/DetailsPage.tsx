"use client";

import Image from "next/image";
import useIsMobile from "@/hooks/useIsMobile";

export default function DetailsPage({
  title,
  videoUrl,
  image,
}: {
  title: String;
  videoUrl?: string;
  image: { url: string; aspect: string };
}) {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col justify-center gap-4">
      <h1 className="text-5xl text-center font-bold mt-20">{title}</h1>
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
    </div>
  );
}
