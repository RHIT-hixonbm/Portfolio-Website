import React from "react";
import "@/components/HeroBanner";
import HeroBanner from "@/components/HeroBanner";
import BasicPage from "@/components/BasicPage";
import { Metadata } from "next";
import ProjectCarousel from "@/components/ProjectCarousel";

export const metadata: Metadata = {
  title: "Brett M. Hixon | Home",
  description: "Portfolio website of Brett M. Hixon, showcasing projects and skills in software development.",
}

export default function Home() {
  return (
    <BasicPage backgroundColor={"#f5f5f5"}>
      <div
        className="flex min-h-screen flex-col items-center px-4"
      >
        <HeroBanner />
        {/*Projects*/}
        <div id="projects" className="max-w-4xl w-full mt-12 flex flex-col items-center bg-zinc-100 shadow-lg rounded-lg border-2">
          <h1 className="text-3xl font-bold text-center my-8">
            Featured Projects
          </h1>
          <ProjectCarousel />
        </div>
      </div>
    </BasicPage>
  );
}
