import { getSkills } from "@/data/data";
import { Skill } from "@/data/types";
import { useInView } from "react-intersection-observer";
import SkillCard from "./SkillCard";

export default function SkillsMountain() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = getSkills();
  
  const groupedSkills = skills.reduce((acc, skill) => {
    const category = skill.category || "Other";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Define the order we want to display categories
  const categoryOrder = ["Languages", "Frameworks", "Technical Skills", "Workplace & Tooling", "Other"];
  const categories = Object.keys(groupedSkills).sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
  });

  return (
    <div ref={ref} className="hidden md:flex flex-col items-center w-full gap-10 mt-8">
      {categories.map((category, index) => (
        <div key={category} className="w-full flex flex-col items-center">
          <h3 
            className={`text-3xl font-bold mb-4 text-gray-800 opacity-0 ${inView && "animate-fade-down"}`}
            style={inView ? { animationDelay: `${index * 0.2}s` } : {}}
          >
            {category}
          </h3>
          <div
            className={`flex flex-wrap gap-4 justify-center opacity-0 ${
              inView && "animate-fade-down"
            }`}
            style={inView ? { animationDelay: `${(index * 0.2) + 0.1}s` } : {}}
          >
            {groupedSkills[category].map((skill: Skill, sIndex: number) => (
              <SkillCard 
                key={sIndex} 
                skill={skill} 
                textSize="text-2xl" 
                largeTextSize="xl:text-3xl" 
                px="px-8 py-2"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
