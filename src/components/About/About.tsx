"use client";

import InfoSection from "./InfoSection";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export default function AboutComponent() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-start mt-30 w-full px-4 gap-4">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full mt-6"
      >
        <InfoSection
          iconMt="-mt-20"
          cardDescription={"About Me"}
          overflow="overflow-hidden"
          imageHeight="h-32"
          imageWidth="w-32"
          cardContent={
            <div className="space-y-6 text-lg leading-relaxed text-gray-800">
              <p>
                <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
                  Hello, I'm Brett Hixon!
                </span>
                <br />
                <span className="block mt-2">
                  I have always been fond of all kinds of technology including
                  computers, gaming consoles, robots, cryptocurrency, AI and
                  more!
                </span>
                <span className="block mt-2">
                  My interest in the field wasn't always self-derived though! I
                  was{" "}
                  <span className="italic text-gray-600">
                    forced into a coding club
                  </span>{" "}
                  by my mom in 5th grade and thought moving Angry Birds was kind
                  of cool. Then, my 8th grade STEM teacher Mrs. Sellers made me
                  realize this could be more than just a passion but a career
                  for life. I began exploring career paths related to software
                  development and began digging into early programming concepts
                  through the platform ROBLOX. Through making games and
                  realizing the process's potential impact on my future, my
                  passion grew evemore more fervent.
                </span>
                <span className="block mt-2">
                  Now I am a part of Rose-Hulman's class of 2027 pursuing my
                  Bachelor's degree in Computer Science and hope to enter the
                  workforce as a desktop application engineer.
                </span>
              </p>
              <p>
                <span className="font-bold text-gray-900">
                  Passionate about software applications, especially video
                  games!
                </span>
                <br />
                <span className="block mt-2">
                  If it's possible, I love to dig into games to understand how
                  they were made and how modern ones are able to program such
                  complex interactions. My passion for programming ramped up
                  exponentially by trying to figure out how video game cheaters
                  and script injectors were able to accomplish such feats.
                </span>
                <span className="block mt-2">
                  Through my studies at Rose-Hulman, I've discovered a passion
                  for low-level concurrency problems and systems programming. In
                  my Operating Systems class, I loved producer-consumer
                  scenarios, threading, and thinking like an operating system. I
                  was also a teaching assistant for our introductory systems
                  programming course at Rose-Hulman for the entirety of my
                  Sophomore year where I thoroughly enjoyed teaching others
                  these concepts.
                </span>
                <span className="block mt-2">
                  During my internship and Rose-Ventures I learned about various
                  frameworks such as ASP.NET Core, Entity Framework Core, and
                  React. I used this as an opportunity to apply my robust
                  understanding of programming concepts to something that had a
                  practical application. My time spent in industry has made
                  realize all the more that this field offers limitless possibly
                  and incessantly reinvigorates by curiousity.
                </span>
              </p>
              <p>
                <span className="font-bold text-gray-900">
                  There's more to me than the programming!
                </span>
                <br />
                <span className="block mt-2">
                  I love walking! I make sure to get the recommended 10,000
                  steps daily, rain or shine.
                </span>
                <span className="block mt-2">
                  In addition, I like all things Japanese media. I've been a fan
                  of anime and manga since middle school. At the end of freshman
                  year I decided I'd like to take on the language to better
                  understand the cultural artifacts I was consuming.
                </span>
                <span className="block mt-2">
                  I am now halfway finished with my Japanese minor and did study
                  abroad in Japan in the summer of 2025.
                </span>
              </p>
              <p className="text-xl font-semibold text-gray-700 italic">
                Thank you for taking time to view this website, I put a lot of
                work into it and I look forward to hearing from you soon!
              </p>
            </div>
          }
          imageSrc="/images/bust.png"
          imageBorder="border-4"
          imageAlt="Brett Hixon Profile Picture"
          imageShadow="shadow-lg"
        />
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
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
                    <span className="font-semibold">Minor:</span> Japanese (in
                    progress)
                  </p>
                  <p className="text-lg md:text-3xl text-gray-800 mb-4">
                    <span className="font-semibold">GPA:</span> 3.97
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
                  code: "CSSE 280",
                  name: "Introduction to Web Programming",
                },
                {
                  code: "CSSE 230",
                  name: "Data Structures and Algorithm Analysis",
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
                  code: "CSSE 232",
                  name: "Computer Architecture I",
                },
                {
                  code: "ECE 232",
                  name: "Introduction to Digital Systems",
                },
                {
                  code: "MA 374",
                  name: "Combinatorics",
                },
                {
                  code: "JP 113",
                  name: "Japanese III",
                },
              ].map((course) => (
                <div
                  key={course.code}
                  className="mb-2 text-sm md:text-2xl font-semibold text-blue-700 hover:text-pink-600 transition-colors duration-200 flex items-center"
                >
                  <span className="mr-0.5 text-blue-700">•</span>
                  <div className="flex flex-row gap-2">
                    <span className="text-left w-18 md:w-27">{course.code}:</span>
                    <span className="font-normal text-gray-700">
                      {course.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </InfoSection>
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <InfoSection
          cardDescription={"Awards & Honors"}
          cardContent={
            <div className="flex flex-col gap-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow-sm">
                <h4 className="text-lg font-bold text-yellow-700 flex items-center gap-2">
                  <span role="img" aria-label="star">
                    🏆
                  </span>{" "}
                  Dean's List
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
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
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
                  I've visited{" "}
                  <span className="font-semibold text-blue-700">
                    Japan, Aruba, The Cayman Islands, Costa Rica
                  </span>{" "}
                  and been to{" "}
                  <span className="font-semibold text-blue-700">Hawai'i</span>.
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
                  , which means "chicken and egg rice bowl."
                </span>
              </li>
              <li className="flex items-start gap-3 bg-gradient-to-r from-red-50 via-white to-blue-50 rounded-xl p-4 shadow-md border-l-4 border-red-500">
                <span className="text-2xl">💃</span>
                <span className="text-lg text-gray-800">
                  I've{" "}
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
      </motion.div>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full flex justify-center mb-5 mt-2"
      >
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
      </motion.div>
    </div>
  );
}
