import { Experience } from "@/data/types"
import ExperienceNode from "./ExperienceNode"
import { useInView } from "react-intersection-observer"

export default function ExperienceNodeWithLink({experience}: {experience: Experience}) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    })

    return (
        <div ref={ref}>
            <span 
                className={`absolute left-1/2 top-8 -translate-x-1/2 w-2 h-0 bg-black ${inView && "animate-grow-down"}`}
                aria-hidden="true"
                style={{ animationDelay: "200ms" }}
            />
            <ExperienceNode experience={experience} />
        </div>
    )
}