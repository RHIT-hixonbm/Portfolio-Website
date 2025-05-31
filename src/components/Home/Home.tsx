"use client";

import React, { useRef, useState, useCallback } from "react";
import "@/components/Home/HeroBanner";
import HeroBanner from "@/components/Home/HeroBanner";
import BasicPage from "@/components/PageSetup/BasicPage";
import ProjectCarousel from "@/components/Home/ProjectCarousel";
import ExperienceLinks from "./Experience/ExperienceLinks";
import SkillsMountain from "./SkillsMountain";

export default function HomeComponent() {
  //Pulse effect for projects section
  const projectsRef = useRef<HTMLDivElement>(null);
  const [pulse, setPulse] = useState(false);
  const handleScrollToProjects = useCallback(() => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
      setPulse(true);
    }
  }, []);

  return (
    <BasicPage backgroundColor={"#f5f5f5"}>
      <div className="flex min-h-screen flex-col items-center px-4">
        <HeroBanner handleScrollToProjects={handleScrollToProjects} />
        {/*Projects*/}
        <div
          id="projects"
          className={`max-w-4xl xl:max-w-7xl lg:max-w-4xl w-full mt-12 flex flex-col items-center bg-zinc-100 shadow-lg rounded-lg border-2 ${
            pulse ? "animate-[pulse_1s_ease-in-out_1]" : ""
          }`}
          ref={projectsRef}
          onAnimationEnd={() => setPulse(false)}
        >
          <h1 className="text-3xl font-bold text-center my-8">
            Featured Projects
          </h1>
          <ProjectCarousel />
        </div>
        {/*Experience*/}
        <div className="max-w-4xl xl:max-w-7xl lg:max-w-4xl w-full mt-12 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-center my-8">Experience</h1>
          <ExperienceLinks />
        </div>
        {/* Skills */}
        <div className="max-w-4xl xl:max-w-7xl lg:max-w-4xl w-full mt-12 flex flex-col items-center">
          <h1 className="text-3xl font-bold text-center my-8">Skills</h1>
          <SkillsMountain />
        </div>
      </div>
    </BasicPage>
  );
}
