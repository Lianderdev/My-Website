import { CardEducation } from "@/components/ui/Card_education";
import { formations } from "@/utils/formations";

export function Formations() {
    return (
        <section>
            <div>
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