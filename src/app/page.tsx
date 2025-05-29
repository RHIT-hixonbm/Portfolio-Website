"use client";

import React from "react";
import "@/components/HeroBanner";
import HeroBanner from "@/components/HeroBanner";
import Filler from "@/components/dev/Filler";
import BasicPage from "@/components/BasicPage";

export default function Home() {
  return (
    <BasicPage backgroundColor={"#f5f5f5"}>
      <div
        className="flex min-h-screen flex-col items-center px-4"
      >
        <HeroBanner />
        {/* Filler content to enable scrolling */}
        <Filler />
      </div>
    </BasicPage>
  );
}
