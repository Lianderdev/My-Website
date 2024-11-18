import { Button } from "@/components/ui/button";
import { Input } from "../components/ui/Input";

import { PiBookBookmarkThin } from "react-icons/pi";

export function Contact() {
    return (
        <section>
            <div className="flex items-center gap-2">
                <PiBookBookmarkThin />
                <h2>Contact</h2>
            </div>

            <form className='flex flex-col gap-8 border bg-zinc-950 p-4 rounded-lg'>
                <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4'>
                    <Input label="name" type="text" id="name" aria-label="Nome" placeholder="Digite seu nome" required />
                    <Input label="e-mail" type="text" id="e-mail" aria-label="Email" placeholder="Digite seu E-mail" required />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className="text-base" htmlFor="message">Mensagem</label>
                    <textarea
                        className="text-base max-h-60 max-w-full border rounded-[5px] p-2 bg-zinc-950 text-zinc-50 font-medium focus:border-white"
                        cols="30"
                        rows="10"
                        id="message"
                        placeholder="Digite sua mensagem"
                        required
                        aria-label="Mensagem"
                    />
                </div>
            </form>

            <p className="text-lg text-zinc-400">Ou, se preferir, entre em contato por meio destas redes sociais:
                <Button className='text-base h-6' variant="link"><a href="https://www.linkedin.com/in/liander-vin%C3%ADcius/">Linkedin</a></Button> /
                <Button className='text-base h-6' variant="link"><a href="https://github.com/Lianderdev">Github</a></Button>
            </p>
        </section>
    )
}