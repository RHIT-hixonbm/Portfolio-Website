import InfoSection from "./InfoSection";

export default function AboutComponent() {
  return (
    <div className="flex flex-col items-center mt-30 w-full px-4 gap-4">
      <InfoSection
        iconMt="-mt-20"
        cardDescription={"About Me"}
        cardContent={
          <>
            <p>
              &emsp;Hello, I'm Brett Hixon! I have always been fond of all kinds of technology including computers, gaming consoles, robots, cryptocurrency, AI and more! My interest in the field wasn't always self-derived though! I was forced into a coding club by my mom in 5th grade and thought moving Angry Birds was kind of cool. Then, my 8th grade STEM teacher Mrs. Sellers made me realize this could be more than just a passion but a career for life. Now I am a part of Rose-Hulman's class of 2027 pursuing my Bachelor's degree in Computer Science and hope to enter the workforce as a desktop application engineer.
            </p>
            <br />
            <p>
              &emsp;I am passionate about software applications, specifically video games. If it's possible, I love to dig into games to understand how they were made and how modern ones are able to program such complex interactions. Beyond that, through my studies at Rose-Hulman, I have discovered a passion for low-level concurrency problems and systems programming. In my Operating Systems class, I loved producer-consumer scenarios, threading, and thinking like an operating system. I also was a teaching assistant for our introductory systems programming course at Rose-Hulman for the entirety of my Sophomore year where I thoroughly enjoyed teaching others these concepts.
            </p>
            <br />
            <p>
              &emsp;Outside the scope of programming, I love walking! I make sure to get the recommended 10000 steps daily, rain or shine. In addition, I like all things Japanese media. I've been a fan of anime and manga since I was in middle school. At the end of freshman year I decided I'd like to take on the language to better understand the cultural artifacts I was consuming. I am now halfway finished with my Japanese minor and did study abroad in Japan in the summer of 2025.
            </p>
            <br />
            <p>
              &emsp;Thank you for taking time to view this website, I put a lot of work into it and I look forward to hearing from you soon!
            </p>
          </>
        }
        imageSrc="/images/bust.png"
        imageAlt="Brett Hixon Profile Picture"
      />
      <InfoSection cardDescription={"Education"} cardContent={"Put cool stuff here!"} >

      </InfoSection>
    </div>
  );
}
