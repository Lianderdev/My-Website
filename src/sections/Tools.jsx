// Components
import { Tool } from "../components/ui/Tool";

// Array
import { tools } from "../utils/tools";

// icons
import { CiLaptop } from "react-icons/ci";

export function Tools() {
    return (
        <section id="tecnologies">
            <div className="flex items-center gap-3 text-base sm:text-lg md:text-xl">
                <CiLaptop />
                <h2 >Tecnologias e Ferramentas</h2>
            </div>
            <ul className='flex flex-wrap gap-2 mb-6'>
                {tools.map(tool => (
                <Tool key={tool.id} {...tool}/>
                ))}
            </ul>
        </section>
    )
}