"use client";

import ExperienceLinks from "../shared/Experience/ExperienceLinks";

export default function Experience() {
  return (
    <>
      <h1 className="text-center w-full mt-30 text-6xl">Full List of Experiences</h1>
      <div className="flex flex-col justify-center items-center mt-10">
        <ExperienceLinks featured={false} />
      </div>
    </>
  );
}
