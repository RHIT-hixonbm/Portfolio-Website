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
        <div className={`relative max-w-sm w-full ${image.aspect} mt-10`}>
          {videoUrl ? (
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <Image fill src={image.url} alt={`Image for ${title}`} />
          )}
        </div>
      </div>
    </div>
  );
}
