import AboutComponent from "@/components/About/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brett M. Hixon | About",
  description: "Portfolio website of Brett M. Hixon, showcasing projects and skills in software development.",
}

export default function About() {
  return <AboutComponent />
}
