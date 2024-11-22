import { BsSuitcaseLg } from "react-icons/bs";
import inmetro from "../assets/img/inmetro.jpg"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion"

export function Experiences() {
    return (
        <section>
            <div className="flex items-center gap-3 text-base sm:text-lg md:text-xl" >
                <BsSuitcaseLg />
                <h2>Experiências</h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <div className="flex flex-col">
                            <h3>Estágiario de Ti</h3>
                            <p>out 2024 - Present</p>
                        </div>
                        <div>
                            <div>
                                <img src="" alt="" />
                            </div>
                            <p>Inmetro</p>
                            <span>Presencial</span>
                        </div>
                    </AccordionTrigger>

                    <AccordionContent>
                        jszsja
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    )
}