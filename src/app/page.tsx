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
        <ProjectCarousel />
      </div>
    </BasicPage>
  );
}
