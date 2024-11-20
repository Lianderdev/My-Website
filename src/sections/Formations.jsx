import { CardEducation } from "@/components/ui/Card_education";
import { formations } from "@/utils/formations";
import { IoSchoolOutline } from "react-icons/io5";

export function Formations() {
    return (
        <section>
            <div  className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                <IoSchoolOutline />
                <h2>Formações</h2>
            </div>

            <div className="grid grid-cols-[repeat(auto-fit,_minmax(350px,1fr))] gap-2">
                {formations.map((formation) => (
                    <CardEducation key={formation.id} {...formation} />
                ))}
            </div>
        </section>
    )
}