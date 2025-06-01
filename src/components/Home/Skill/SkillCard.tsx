import { Skill } from "@/data/types";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function SkillCard({ skill, textSize, largeTextSize, px, minWidth, inView, additionalStyles, startingOpacity }: { skill: Skill, textSize: string, largeTextSize?: string, px?: string, minWidth?: string, inView?: boolean, additionalStyles?: React.CSSProperties, startingOpacity: string; }) {
    return (
            <Popover>
              <PopoverTrigger>
                <Card
                  className={`bg-black ${textSize} ${largeTextSize} ${px} ${minWidth} ${inView && "animate-hinge-spin"} ${startingOpacity} transform transition-transform duration-200 ease-out hover:scale-105 cursor-pointer`}
                  style={additionalStyles}
                >
                  <CardContent>
                    <p className="text-center text-white font-bold">
                      {skill.name}
                    </p>
                  </CardContent>
                </Card>
              </PopoverTrigger>
              <PopoverContent className={"bg-black"}>
                <p className="text-sm text-white font-bold">
                  {skill.description}
                </p>
              </PopoverContent>
            </Popover>
    )
}
