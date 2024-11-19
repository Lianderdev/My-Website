import { Tool } from "../components/ui/Tool";
import { tools } from "../utils/tools";
import { MdOutlineComputer } from "react-icons/md";

export function Tools() {
    return (
        <section id="tecnologies">
            <div className="flex items-center gap-3">
                <MdOutlineComputer className="text-base md:text-xl"/>
                <h2 className="text-base md:text-xl">Tecnologias e Ferramentas</h2>
            </div>
            <ul className='flex flex-wrap gap-4 mb-6'>
                {tools.map(tool => (
                <Tool key={tool.id} {...tool}/>
                ))}
            </ul>
        </section>
    )
}