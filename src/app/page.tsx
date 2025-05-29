"use client";

import React from "react";
import "@/components/HeroBanner";
import HeroBanner from "@/components/HeroBanner";
import Filler from "@/components/dev/Filler";
import BasicPage from "@/components/BasicPage";

const backgroundColor = "rgb(250, 250, 250)";

export default function Home() {
  return (
    <BasicPage backgroundColor={backgroundColor}>
      <div
        className="flex min-h-screen flex-col items-center px-4"
        style={{ backgroundColor }}
      >
        <HeroBanner />
        {/* Filler content to enable scrolling */}
        <Filler />
      </div>
    </BasicPage>
  );
}
