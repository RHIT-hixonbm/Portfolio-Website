"use client";

import InfoSection from "./InfoSection";
import { Button } from "../ui/button";
import FadeUp from "../utilities/FadeUp";

export default function AboutComponent() {
  return (
    <div className="flex flex-col items-start mt-30 w-full px-4 gap-4">
      <FadeUp>
        <InfoSection
          iconMt="-mt-20"
          cardDescription={"About Me"}
          overflow="overflow-hidden"
          imageHeight="h-32"
          imageWidth="w-32"
          cardContent={
            <div className="space-y-6 text-lg leading-relaxed text-gray-800">
              <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight">Hello, I&apos;m Brett Hixon!</h2>
              <p className="mt-2">
                I am a Senior Computer Science major at Rose-Hulman Institute of Technology (Class of 2027) with minors in Cybersecurity, AI, and Japanese. I have a passion for designing scalable software systems, full-stack application development, artificial intelligence, and cybersecurity. Through both industry experience and academic coursework, I have built a strong track record of translating complex computer science theory into reliable, scalable full-stack applications.
              </p>

              <hr className="my-6" />

              <h3 className="text-xl font-semibold">How It Started</h3>
              <p>
                My journey into software engineering didn&apos;t start as a solo endeavor—I was first pushed into a coding club by my mom in 5th grade, where I realized how cool it was to make Angry Birds move across a screen! In 8th grade, my STEM teacher, Mrs. Sellers, helped me see that this curiosity could become a lifelong career.
              </p>
              <p>
                I began exploring early programming concepts on ROBLOX, creating games and experiencing firsthand the impact of building software for real users. Trying to understand how video game cheaters and script injectors manipulated applications on this same platform ignited my curiosity for reverse engineering and cybersecurity—a curiosity that now forms my academic minor.
              </p>

              <hr className="my-6" />

              <h3 className="text-xl font-semibold">Technical Breadth & Teaching</h3>
              <p>
               Through my studies at Rose-Hulman and my industry experience, I&apos;ve developed a broad understanding of systems and application development, including operating systems, distributed systems, networking, parallel computing, robotics, and full-stack web architecture. To reinforce my understanding and give back to the campus community, I served as a course assistant for multiple computer science courses throughout my sophomore and junior years.
              </p>
              <p>
                In industry, I&apos;ve had the opportunity to build software that scales to tangible business needs using modern enterprise tools—ranging from web frameworks like <span className="font-semibold">Vue</span> and <span className="font-semibold">React</span> to robust backend ecosystems like <span className="font-semibold">.NET</span>. I&apos;ve also gained hands-on experience with enterprise infrastructure technologies like <span className="font-semibold">Microsoft Entra ID</span>, <span className="font-semibold">IIS web hosting and internal DNS management</span>, and more. Industry experience continues to stretch my problem-solving capabilities beyond what traditional classroom settings can emulate.
              </p>

              <hr className="my-6" />

              <h3 className="text-xl font-semibold">Co-Founding Fafnir Aerospace</h3>
              <p>
                My work in AI culminated in co-founding <span className="font-semibold">Fafnir Aerospace</span>, my senior capstone project and registered LLC. As Lead AI Developer, I am designing the Autonomous Navigation, Drone Routing, and Simultaneous Localization and Mapping (SLAM) architecture for a proof-of-concept autonomous drone system powered by a proprietary UV light communication module. Our team intends to continue scaling the company beyond graduation.
              </p>

              <hr className="my-6" />

              <h3 className="text-xl font-semibold">Why Cybersecurity & Artificial Intelligence?</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Cybersecurity:</span> My early fascination with reverse engineering led me to formally pursue a cybersecurity minor to master defensive and offensive security principles.</li>
                <li><span className="font-semibold">Artificial Intelligence:</span> As AI tools became increasingly prominent across software engineering, I wanted to &quot;pop the hood&quot; and truly understand the underlying algorithms and architectures rather than treat them as black boxes.</li>
              </ul>

              <h3 className="text-xl font-semibold">Beyond the Code</h3>
              <ul className="list-disc list-inside space-y-2">
                <li><span className="font-semibold">Daily Hikes & Health:</span> Rain or shine, I hit my target of 10,000 steps every single day.</li>
                <li><span className="font-semibold">Japanese Language & Culture:</span> I have been a fan of anime and manga since middle school. To better engage with Japanese media and culture, I completed a Japanese minor and studied abroad in Japan during the summer of 2025.</li>
              </ul>

              <p className="text-xl font-semibold text-gray-700 italic">
                Thank you for visiting my portfolio! Feel free to explore my <span className="font-semibold">Projects</span> and <span className="font-semibold">Experience</span> pages, or reach out directly if you&apos;d like to connect.
              </p>
            </div>
          }
          imageSrc="/images/bust.png"
          imageBorder="border-4"
          imageAlt="Brett Hixon Profile Picture"
          imageShadow="shadow-lg"
        />
      </FadeUp>
      <FadeUp>
        <InfoSection
          cardDescription={"Education"}
          cardContent={
            <div className="flex flex-col items-center">
              <div>
                <h3 className="text-xl md:text-4xl font-bold mb-2 text-blue-800 mb-7">
                  Rose-Hulman Institute of Technology
                </h3>
                <div className="flex flex-col items-start">
                  <p className="text-lg md:text-3xl text-gray-800 mb-2">
                    <span className="text-left font-semibold">Degree:</span>{" "}
                    B.S. in Computer Science
                  </p>
                  <p className="text-lg md:text-3xl text-gray-800 mb-2">
                    <span className="font-semibold">Class Year:</span> 2027
                  </p>
                  <p className="text-lg md:text-3xl text-gray-800 mb-2">
                    <span className="font-semibold">Minors:</span> Japanese, Cybersecurity, Artificial Intelligence
                  </p>
                  <p className="text-lg md:text-3xl text-gray-800 mb-4">
                    <span className="font-semibold">GPA:</span> 3.98
                  </p>
                </div>
              </div>
            </div>
          }
          imageSrc="/images/gradcap.png"
          imageAlt="Graduation Cap"
        >
          <h4 className="text-lg md:text-4xl font-bold mt-5 mb-5 text-blue-700 text-center">
            Related Courses
          </h4>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center w-full max-w-2xl">
              {[
                {
                  code: "CSSE 374",
                  name: "Software Design",
                },
                {
                  code: "CSSE 371",
                  name: "Software Requirements Engineering",
                },
                {
                  code: "CSSE 332",
                  name: "Operating Systems",
                },
                {
                  code: "CSSE 333",
                  name: "Introduction to Database Systems",
                },
                {
                  code: "CSSE 432",
                  name: "Computer Networks",
                },
                { code: "CSSE 335", 
                  name: "Parallel Computing" },
                {
                  code: "CSSE 415",
                  name: "Machine Learning",
                },
                { 
                  code: "CSSE 463",
                  name: "Image Recognition"
                },
                { 
                  code: "CSSE 340",
                  name: "Foundations of Cybersecurity"
                },
                { 
                  code: "CSSE 479",
                  name: "Cryptography"
                },
                { 
                  code: "CSSE 490",
                  name: "Malware Analysis"
                },
                {
                  code: "CSSE 280",
                  name: "Introduction to Web Programming",
                },
                {
                  code: "CSSE 474",
                  name: "Theory of Computation",
                },
                {
                  code: "CSSE 473",
                  name: "Design & Analysis of Algorithms",
                },
                {
                  code: "CSSE 304",
                  name: "Programming Language Concepts",
                },
                {
                  code: "ECE 332",
                  name: "Computer Architecture II",
                },
                {
                  code: "MA 381",
                  name: "Probability and Statistics",
                },
                {
                  code: "MA 374",
                  name: "Combinatorics",
                },
                {
                  code: "MA 378",
                  name: "Number Theory",
                },
                {
                  code: "JP 213",
                  name: "Japanese VI",
                },
              ].map((course) => (
                <div
                  key={course.code}
                  className="mb-2 text-sm md:text-2xl font-semibold text-blue-700 hover:text-pink-600 transition-colors duration-200 flex items-center"
                >
                  <span className="mr-0.5 text-blue-700">•</span>
                  <div className="flex flex-row gap-2">
                    <span className="text-left w-18 md:w-27">
                      {course.code}:
                    </span>
                    <span className="font-normal text-gray-700">
                      {course.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </InfoSection>
      </FadeUp>
      <FadeUp>
        <InfoSection
          cardDescription={"Awards & Honors"}
          cardContent={
            <div className="flex flex-col gap-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow-sm">
                <h4 className="text-lg font-bold text-yellow-700 flex items-center gap-2">
                  <span role="img" aria-label="star">
                    🏆
                  </span>{" "}
                  Dean&apos;s List
                </h4>
                <p className="text-gray-800 mt-1">
                  Recognized for academic excellence every term at Rose-Hulman
                  Institute of Technology (2023–Present).
                </p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded shadow-sm">
                <h4 className="text-lg font-bold text-green-700 flex items-center gap-2">
                  <span role="img" aria-label="laurel">
                    🏅
                  </span>{" "}
                  Heminway Scholar
                </h4>
                <p className="text-gray-800 mt-1">
                  Given to first-year students who have the highest GPA at the
                  end of the academic year (2025).
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded shadow-sm">
                <h4 className="text-lg font-bold text-blue-700 flex items-center gap-2">
                  <span role="img" aria-label="medal">
                    🥇
                  </span>{" "}
                  College Board National Recognition Program Scholar
                </h4>
                <p className="text-gray-800 mt-1">
                  Honored by the College Board for outstanding academic
                  achievement and performance on national assessments (2022).
                </p>
              </div>
            </div>
          }
          imageSrc="/images/trophy.png"
          imageAlt="Trophy"
        />
      </FadeUp>
      <FadeUp>
        <InfoSection
          cardDescription={"Fun Facts"}
          cardContent={
            <ul className="space-y-4">
              <li className="flex items-start gap-3 bg-gradient-to-r from-pink-50 via-white to-blue-50 rounded-xl p-4 shadow-md border-l-4 border-pink-400">
                <span className="text-2xl">🕹️</span>
                <span className="text-lg text-gray-800">
                  My favorite retro console is the{" "}
                  <span className="font-semibold text-pink-700">
                    Nintendo 64
                  </span>
                  .
                </span>
              </li>
              <li className="flex items-start gap-3 bg-gradient-to-r from-blue-50 via-white to-yellow-50 rounded-xl p-4 shadow-md border-l-4 border-blue-400">
                <span className="text-2xl">🌏</span>
                <span className="text-lg text-gray-800">
                  I&apos;ve visited{" "}
                  <span className="font-semibold text-blue-700">
                    Japan, Aruba, The Cayman Islands, Costa Rica
                  </span>{" "}
                  and been to{" "}
                  <span className="font-semibold text-blue-700">Hawai&apos;i</span>.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-gradient-to-r from-yellow-50 via-white to-green-50 rounded-xl p-4 shadow-md border-l-4 border-yellow-400">
                <span className="text-2xl">💻</span>
                <span className="text-lg text-gray-800">
                  My favorite programming language is{" "}
                  <span className="font-semibold text-yellow-700">Lua</span>.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-gradient-to-r from-green-50 via-white to-pink-50 rounded-xl p-4 shadow-md border-l-4 border-green-400">
                <span className="text-2xl">🗣️</span>
                <span className="text-lg text-gray-800">
                  Fluently I speak{" "}
                  <span className="font-semibold text-green-700">English</span>{" "}
                  but have studied{" "}
                  <span className="font-semibold text-green-700">Spanish</span>{" "}
                  for 3 years and{" "}
                  <span className="font-semibold text-green-700">Japanese</span>{" "}
                  for 2 years.
                </span>
              </li>
              <li className="flex items-start gap-3 bg-gradient-to-r from-pink-50 via-white to-orange-50 rounded-xl p-4 shadow-md border-l-4 border-pink-400">
                <span className="text-2xl">🥢</span>
                <span className="text-lg text-gray-800">
                  I{" "}
                  <span className="font-semibold text-pink-700">
                    love sushi, tonkatsu, ramen
                  </span>
                  , and other Japanese cuisine!
                </span>
              </li>
              <li className="flex items-start gap-3 bg-gradient-to-r from-orange-50 via-white to-red-50 rounded-xl p-4 shadow-md border-l-4 border-orange-400">
                <span className="text-2xl">⛩️</span>
                <span className="text-lg text-gray-800">
                  My favorite Japanese word is{" "}
                  <span className="font-semibold text-orange-400">
                    親子丼 (oyakodon)
                  </span>
                  , which means &quot;chicken and egg rice bowl.&quot;
                </span>
              </li>
              <li className="flex items-start gap-3 bg-gradient-to-r from-red-50 via-white to-blue-50 rounded-xl p-4 shadow-md border-l-4 border-red-500">
                <span className="text-2xl">💃</span>
                <span className="text-lg text-gray-800">
                  I&apos;ve{" "}
                  <span className="font-semibold text-red-500">
                    hula-hooped
                  </span>{" "}
                  for 3 hours straight.
                </span>
              </li>
            </ul>
          }
          imageSrc="/images/star-struck.png"
        />
      </FadeUp>
      <FadeUp>
        <div className="flex justify-center mb-10">
          <a
            href="/documents/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-neutral-800 text-neutral-800 hover:bg-neutral-800 hover:text-white transition cursor-pointer text-3xl h-13"
            >
              View Full Resume
            </Button>
          </a>
        </div>
      </FadeUp>
    </div>
  );
}
