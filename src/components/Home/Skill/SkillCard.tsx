import { Skill } from "@/data/types"
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function SkillCard({ skill, textSize, largeTextSize, px, minWidth, inView, additionalStyles }: { skill: Skill, textSize: string, largeTextSize?: string, px?: number, minWidth?: string, inView?: boolean, additionalStyles?: React.CSSProperties}) {
    return (
            <Popover>
              <PopoverTrigger>
                <Card
                  className={`bg-black ${"text-" + textSize} ${"xl:text-" + largeTextSize} ${px ? "px-" + px : "" } ${!!minWidth ? "min-w-" + minWidth : "" } ${inView && "animate-hinge-spin"} transform transition-transform duration-200 ease-out hover:scale-105 cursor-pointer`}
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