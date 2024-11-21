import { RiCloseLargeLine } from "react-icons/ri";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert"
import { TbAlertTriangle } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { HiOutlineRocketLaunch } from "react-icons/hi2";


export function ModalSendSucess({close}) {
    return (
        <div className='w-full max-w-[500px] rounded-xl relative mx-8 bg-zinc-950'>
        <Alert className='relative h-auto flex flex-col gap-1 pl-7 py-4'>
            <HiOutlineRocketLaunch className="h-6 w-6 mt-2 ml-1"/>
            <AlertTitle>Mensagem enviada!</AlertTitle>
            <AlertDescription className='text-zinc-400'>
                Obrigado! Responderemos o mais rápido possível.
            </AlertDescription>
        </Alert>

        <Button onClick={close} variant="secondary" className='h-auto absolute top-4 right-4 p-1 py-1 text-xl'><RiCloseLargeLine /></Button>
    </div>
    )
}

export function ModalSendFailed({ close }) {
    return (
        <div className='w-full max-w-[500px] rounded-xl relative mx-8 bg-zinc-950'>
        <Alert className='relative h-auto flex flex-col gap-1 pl-7 py-4'>
            <TbAlertTriangle className="h-6 w-6 mt-2 ml-1"/>
            <AlertTitle>Erro ao enviar a mensagem enviada!</AlertTitle>
            <AlertDescription className='text-zinc-400'>
                Verifique se o seu dispositivo está conectado a uma rede Wi-Fi estável ou a uma conexão de internet.
            </AlertDescription>
        </Alert>

        <Button onClick={close} variant="secondary" className='h-auto absolute top-4 right-4 p-1 py-1 text-xl'><RiCloseLargeLine /></Button>
    </div>
    )
}