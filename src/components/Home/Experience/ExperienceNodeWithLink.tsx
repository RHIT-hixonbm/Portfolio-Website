import { Experience } from "@/data/types"
import ExperienceNode from "./ExperienceNode"
import { useInView } from "react-intersection-observer"

export default function ExperienceNodeWithLink({experience}: {experience: Experience}) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.8,
    })

    return (
        <div ref={ref}>
            <span 
                className={`absolute opacity-0 left-1/2 top-8 -translate-x-1/2 w-2 h-full bg-black ${inView && "animate-fly-in"}`}
                aria-hidden="true"
                style={{ animationDelay: "500ms" }}
            />
            <ExperienceNode experience={experience} />
        </div>
    )
}