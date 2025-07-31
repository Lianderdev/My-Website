// Components
import { Button } from "@/components/ui/button";
import { Input } from "../components/ui/Input";
import {  Notification } from "../components/Notification/Notification";

// Icons
import { CiMail } from "react-icons/ci";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { TbAlertTriangle } from "react-icons/tb";

// libs
import emailjs from 'emailjs-com';
import { useEffect, useRef, useState } from "react";

export function Contact() {

    console.log("teste")

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

    useEffect(() => {
        let timeoutId;

        if (modalSuccess) {
            timeoutId = setTimeout(() => {
                setModalSuccess(false)
            }, 5000)
        }

        if (modalFailed) {
            timeoutId = setTimeout(() => {
                setModalFailed(false)
            }, 5000)
        }

        return () => clearTimeout(timeoutId)

    }, [modalSuccess, modalFailed]);

    return (
        <section id="contacts" className="relative">
            <div className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                <CiMail />
                <h2>Contatos</h2>
            </div>

            <form onSubmit={sendEmail} className='flex flex-col gap-4 border bg-transparent p-4 rounded-lg'>
                <div className='grid md:grid-cols-2 gap-4'>
                    <Input label="name" type="text" name="Name" ref={nameRef} id="name" aria-label="Nome" placeholder="Digite seu nome" required />
                    <Input label="Email" type="email" name="Email" ref={emailRef} id="e-mail" aria-label="Email" placeholder="Digite seu E-mail" required />
                </div>
                <div className='flex flex-col gap-2 text-xs md:text-sm'>
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                        className=" max-h-40 max-w-full border rounded-[5px] p-2 bg-zinc-950 text-zinc-50 font-medium focus:border-white"
                        rows={30}
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
                    <Notification icon={<HiOutlineRocketLaunch />} message='Mensagem enviada!' information='Obrigado! Responderemos o mais rápido possível.'/>
            )}

            {modalFailed && (
                    <Notification icon={<TbAlertTriangle />} message='Erro ao enviar a mensagem enviada!' information='Verifique se o seu dispositivo está conectado a uma rede Wi-Fi estável ou a uma conexão de internet.'/>
            )}

        </section>
    )
}