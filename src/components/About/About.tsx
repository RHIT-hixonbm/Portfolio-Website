import InfoSection from "./InfoSection";

export default function AboutComponent() {
  return (
    <div className="flex flex-col items-start mt-30 w-full px-4 gap-4">
      <InfoSection
        iconMt="-mt-20"
        cardDescription={"About Me"}
        overflow="overflow-hidden"
        cardContent={
          <div className="space-y-6 text-lg leading-relaxed text-gray-800">
            <p>
              <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Hello, I'm Brett Hixon!
              </span>
              <br />
              <span className="block mt-2">
                I have always been fond of all kinds of technology including
                computers, gaming consoles, robots, cryptocurrency, AI and more!
              </span>
              <span className="block mt-2">
                My interest in the field wasn't always self-derived though! I
                was{" "}
                <span className="italic text-gray-600">
                  forced into a coding club
                </span>{" "}
                by my mom in 5th grade and thought moving Angry Birds was kind
                of cool. Then, my 8th grade STEM teacher Mrs. Sellers made me
                realize this could be more than just a passion but a career for
                life.
              </span>
              <span className="block mt-2">
                Now I am a part of Rose-Hulman's class of 2027 pursuing my
                Bachelor's degree in Computer Science and hope to enter the
                workforce as a desktop application engineer.
              </span>
            </p>
            <p>
              <span className="font-bold text-gray-900">
                Passionate about software applications, especially video games!
              </span>
              <br />
              <span className="block mt-2">
                If it's possible, I love to dig into games to understand how
                they were made and how modern ones are able to program such
                complex interactions.
              </span>
              <span className="block mt-2">
                Through my studies at Rose-Hulman, I've discovered a passion for
                low-level concurrency problems and systems programming. In my
                Operating Systems class, I loved producer-consumer scenarios,
                threading, and thinking like an operating system.
              </span>
              <span className="block mt-2">
                I also was a teaching assistant for our introductory systems
                programming course at Rose-Hulman for the entirety of my
                Sophomore year where I thoroughly enjoyed teaching others these
                concepts.
              </span>
            </p>
            <p>
              <span className="font-bold text-gray-900">
                There's more to me than the programming!
              </span>
              <br />
              <span className="block mt-2">
                I love walking! I make sure to get the recommended 10,000 steps
                daily, rain or shine.
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
      <InfoSection
        cardDescription={"Education"}
        cardContent={
          <div className="flex flex-col items-center">
            <div>
                <h3 className="text-xl font-bold mb-2 text-blue-800">
                Rose-Hulman Institute of Technology
                </h3>
                <div className="flex flex-col items-start">
                <p className="text-lg text-gray-800 mb-2">
                    <span className="text-left font-semibold">Degree:</span> B.S. in
                    Computer Science
                </p>
                <p className="text-lg text-gray-800 mb-2">
                    <span className="font-semibold">Class Year:</span> 2027
                </p>
                <p className="text-lg text-gray-800 mb-2">
                    <span className="font-semibold">Minor:</span> Japanese (in
                    progress)
                </p>
                <p className="text-lg text-gray-800 mb-4">
                    <span className="font-semibold">GPA:</span> 3.97
                </p>
                </div>
            </div>
          </div>
        }
        imageSrc="/images/gradcap.png"
        imageAlt="Graduation Cap"
      >
        <h4 className="text-lg font-bold mt-5 mb-2 text-blue-700">
          Related Courses
        </h4>
        <ul className="list-disc list-inside text-left bg-gradient-to-r from-blue-50 via-white to-pink-50 rounded-xl p-6 shadow-md border bor</li>der-blue-200">
          <li className="mb-2 text-lg font-semibold text-blue-700 hover:text-pink-600 transition-colors duration-200">
            CSSE 280:{" "}
            <span className="font-normal text-gray-700">
              Introduction to Web Programming
            </span>
          </li>
          <li className="mb-2 text-lg font-semibold text-blue-700 hover:text-pink-600 transition-colors duration-200">
            CSSE 230:{" "}
            <span className="font-normal text-gray-700">
              Data Structures and Algorithm Analysis
            </span>
          </li>
          <li className="mb-2 text-lg font-semibold text-blue-700 hover:text-pink-600 transition-colors duration-200">
            CSSE 332:{" "}
            <span className="font-normal text-gray-700">Operating Systems</span>
          </li>
          <li className="mb-2 text-lg font-semibold text-blue-700 hover:text-pink-600 transition-colors duration-200">
            CSSE 333:{" "}
            <span className="font-normal text-gray-700">
              Introduction to Database Systems
            </span>
          </li>
          <li className="mb-2 text-lg font-semibold text-blue-700 hover:text-pink-600 transition-colors duration-200">
            CSSE 232:{" "}
            <span className="font-normal text-gray-700">
              Computer Architecture I
            </span>
          </li>
          <li className="mb-2 text-lg font-semibold text-blue-700 hover:text-pink-600 transition-colors duration-200">
            ECE 232:{" "}
            <span className="font-normal text-gray-700">
              Introduction to Digital Systems
            </span>
          </li>
          <li className="mb-2 text-lg font-semibold text-blue-700 hover:text-pink-600 transition-colors duration-200">
            MA 374:{" "}
            <span className="font-normal text-gray-700">Combinatorics</span>
          </li>
          <li className="mb-2 text-lg font-semibold text-blue-700 hover:text-pink-600 transition-colors duration-200">
            JP 113:{" "}
            <span className="font-normal text-gray-700">Japanese III</span>
          </li>
        </ul>
      </InfoSection>
    </div>
  );
}
