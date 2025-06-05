import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brett M. Hixon | 404",
  description:
    "Portfolio website of Brett M. Hixon, showcasing projects and skills in software development.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen h-full w-full text-center flex justify-center items-center text-6xl">
      404 | Not Found
    </div>
  );
}
