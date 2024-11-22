import { Button } from "@/components/ui/button";
import { Input } from "../components/ui/Input";
import emailjs from 'emailjs-com';
import { RiContactsBookLine } from "react-icons/ri";
import { useRef, useState } from "react";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { ModalSendFailed, ModalSendSucess } from "../components/modals/Modals";

export function Contact() {

    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const [isLoading, setIsLoading] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false);
    const [modalFailed, setModalFailed] = useState(false);

    function sendEmail(event) {
        event.preventDefault()

        setIsLoading(true)

        const name = nameRef.current?.value?.trim();
        const email = emailRef.current?.value?.trim();
        const message = messageRef.current?.value?.trim();

        if (name && email && message) {
            const templateParams = { from_name: name, message: message, email: email }

            emailjs.send('service_s8dqj6i', 'template_30r3d2g', templateParams, 'dyXZYpcE0VEwEM0vN')
                .then(() => {
                    setModalSuccess(true)
                }).catch(() => {
                    setModalFailed(true)
                }).finally(() => {
                    setIsLoading(false)
                })
        }
    }

    function closeModal() {
        setModalSuccess(false);
        setModalFailed(false);
    }

    return (
        <section id="contacts">
            <div className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                <RiContactsBookLine />
                <h2>Contatos</h2>
            </div>

            <form onSubmit={sendEmail} className='flex flex-col gap-4 border bg-zinc-950 p-4 rounded-lg'>
                <div className='grid grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-4'>
                    <Input label="name" type="text" name="Name" ref={nameRef} id="name" aria-label="Nome" placeholder="Digite seu nome" required />
                    <Input label="Email" type="email" name="Email" ref={emailRef} id="e-mail" aria-label="Email" placeholder="Digite seu E-mail" required />
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
                        ref={messageRef}
                    />
                </div>
                <Button type='submit' className="text:sm md:text-base">
                    {isLoading ?
                        (<div className="flex items-center gap-2">
                            <AiOutlineLoading3Quarters className="isloading" />
                            <p className="font-bold">Carregando</p>
                        </div>)
                        :
                        (<p className="font-bold">
                            Enviar Mensagem
                        </p>)
                    }
                </Button>
            </form>

            <p className="text-xs md:text-sm text-zinc-400">Ou, se preferir, entre em contato por meio destas redes sociais:
                <Button className='text-xs md:text-sm h-6 px-1' variant="link"><a href="https://www.linkedin.com/in/liander-vin%C3%ADcius/">Linkedin</a></Button> /
                <Button className='text-xs md:text-sm h-6 px-1' variant="link"><a href="https://github.com/Lianderdev">Github</a></Button>
            </p>

            {modalSuccess && (
                <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-modal ooverflow-y-hidden'>
                    <ModalSendSucess close={closeModal} />
                </div>
            )}

            {modalFailed && (
                <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-modal overflow-y-hidden'>
                    <ModalSendFailed close={closeModal} />
                </div>
            )}
        </section>
    )
}