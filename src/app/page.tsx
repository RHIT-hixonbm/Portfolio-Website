import React from "react";
import { Metadata } from "next";
import HomeComponent from "@/components/Home/Home";

export const metadata: Metadata = {
  title: "Brett M. Hixon | Home",
  description: "Portfolio website of Brett M. Hixon, showcasing projects and skills in software development.",
}

export default function Home() {
  return (
    <HomeComponent />
  );
}
