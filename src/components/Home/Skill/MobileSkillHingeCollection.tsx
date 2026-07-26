import { getSkills } from "@/data/data";
import { Skill } from "@/data/types";
import { useInView } from "react-intersection-observer";
import SkillCard from "./SkillCard";

export default function MobileSkillHinges() {
    const { ref, inView } = useInView({
      threshold: 0.1,
      triggerOnce: true,
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
  
    const categoryOrder = ["Languages", "Frameworks", "Technical Skills", "Workplace & Tooling", "Other"];
    const categories = Object.keys(groupedSkills).sort((a, b) => {
      const indexA = categoryOrder.indexOf(a);
      const indexB = categoryOrder.indexOf(b);
      return (indexA === -1 ? 99 : indexA) - (indexB === -1 ? 99 : indexB);
    });

    let globalIndex = 0; // for continuous animation delay

    return (
      <div ref={ref} className="flex md:hidden flex-col items-center gap-10 mt-8">
        {categories.map((category) => (
          <div key={category} className="w-full flex flex-col items-center gap-4">
            <h3 
              className={`text-2xl font-bold text-gray-800 opacity-0 ${inView && "animate-fade-down"}`}
              style={inView ? { animationDelay: (globalIndex++ * 150) + "ms" } : {}}
            >
              {category}
            </h3>
            {
              groupedSkills[category].map((skill: Skill, idx: number) => {
                const delay = globalIndex++;
                return (
                  <SkillCard 
                    key={idx} 
                    skill={skill} 
                    minWidth="min-w-[15rem]" 
                    textSize="text-lg" 
                    px="py-2"
                    inView={inView} 
                    startingOpacity={"opacity-0"} 
                    additionalStyles={{ animationDelay: (delay * 150) + "ms" }} 
                  />
                );
              })
            }
          </div>
        ))}
      </div>
    )
}