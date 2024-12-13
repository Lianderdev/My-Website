// Components
import { CardEducation } from "@/components/ui/Card_education";

// Array
import { formations } from "@/utils/formations";

// icons
import { PiBooksThin } from "react-icons/pi";

export function Formations() {
    return (
        <section id="formations">
            <div className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                <PiBooksThin />
                <h2>Formações</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-2">
                {formations.map((formation) => (
                    <CardEducation key={formation.id} {...formation} />
                ))}
            </div>
        </section>
    )
}