import { getSkills } from "@/data/data";
import { Skill } from "@/data/types";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function SkillsMountain() {
  const skills = getSkills().sort(
    (a: Skill, b: Skill) => a.priority - b.priority
  );
  const num_base_skills = 3;
  const num_mid_skills = 4;
  const num_top_skills = 4;
  const base_skills = skills.slice(0, num_base_skills);
  const mid_skills = skills.slice(
    num_base_skills,
    num_mid_skills + num_base_skills
  );
  const top_skills = skills.slice(
    num_base_skills + num_mid_skills,
    num_top_skills + num_base_skills + num_mid_skills
  );

  return (
    <>
      {/* Top */}
      <div className={`grid grid-cols-4 gap-1 justify-center`}>
        {top_skills.map((skill: Skill) => {
          return (
            <Card key={skill.priority} className="bg-black text-md">
              <CardContent>
                <p className="text-center text-white font-bold">{skill.name}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      {/* Middle */}
      <div className={`grid ${"grid-cols-4"} gap-3 justify-center py-2`}>
        {mid_skills.map((skill: Skill) => {
          return (
            <Card key={skill.priority} className="bg-black text-2xl">
              <CardContent>
                <p className="text-center text-white font-bold text">{skill.name}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
      {/* Base */}
      <div className={`grid ${"grid-cols-3"} gap-2 justify-center py-2`}>
        {base_skills.map((skill: Skill) => {
          return (
            <Card key={skill.priority} className="bg-black text-5xl">
              <CardContent>
                <p className="text-center text-white font-bold text">{skill.name}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
