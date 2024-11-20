import { Button } from "@/components/ui/button";
import { Input } from "../components/ui/Input";
import { motion } from "framer-motion"

import { RiContactsBookLine } from "react-icons/ri";

export function Contact() {
    return (
        <section id="contacts">
            <div className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                <RiContactsBookLine />
                <h2>Contatos</h2>
            </div>

            <form className='flex flex-col gap-4 border bg-zinc-950 p-4 rounded-lg'>
                <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4'>
                    <Input label="name" type="text" id="name" aria-label="Nome" placeholder="Digite seu nome" required />
                    <Input label="Email" type="text" id="e-mail" aria-label="Email" placeholder="Digite seu E-mail" required />
                </div>
                <div className='flex flex-col gap-2 text-xs md:text-sm'>
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                        className=" max-h-40 max-w-full border rounded-[5px] p-2 bg-zinc-950 text-zinc-50 font-medium focus:border-white"
                        cols="30"
                        rows="10"
                        id="message"
                        placeholder="Digite sua mensagem"
                        required
                        aria-label="Mensagem"
                    />
                </div>
                <Button>Enviar Mensagem</Button>
            </form>

            <p className="text-xs md:text-sm text-zinc-400">Ou, se preferir, entre em contato por meio destas redes sociais: 
                <Button className='text-xs md:text-sm h-6 px-1' variant="link"><a href="https://www.linkedin.com/in/liander-vin%C3%ADcius/">Linkedin</a></Button> /
                <Button className='text-xs md:text-sm h-6 px-1' variant="link"><a href="https://github.com/Lianderdev">Github</a></Button>
            </p>
        </section>
    )
}