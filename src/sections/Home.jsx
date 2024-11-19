import { Button } from "@/components/ui/button";
import { CiLocationOn } from "react-icons/ci";
import { FaRegPaperPlane } from "react-icons/fa";

import myFuture from '../assets/img/teste.png'
import '../styles/animations.css'

export function Home() {
    return (
        <section id="home" className="pt-6 flex-row items-center gap-3">
            <div className="flex flex-col gap-3">
                <p className="text-xs md:text-base font-medium text-zinc-300">Olá! eu sou o liander vinícius</p>
                <h1 className="max-w-3xl text-xl md:text-4xl font-bold tracking-wide">Desenvolvedor front-end & técnico em informática</h1>
                <p className="max-w-2xl text-sm md:text-xl pl-[2px] text-zinc-300"> Apaixonado por criar interfaces intuitivas e acessíveis, alinhadas às necessidades dos usuários e aos objetivos da empresa.</p>

                <div className="flex gap-4">
                    <div className="flex items-center gap-1 px-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-[7px] circle"></div>
                        <p className='text-sm'>Open to work</p>
                    </div>
                    <div className="flex items-center gap-1 px-1">
                        <CiLocationOn className='text-2xl mb-[6px] text-zinc-500' />
                        <p p className='text-sm'>Ananindeua · Pa</p>
                    </div>
                </div>

                <div className="w-full max-w-xl grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
                    <a href="#" className="relative">
                        <Button variant="outline" className="w-full text:sm md:text-base gap-4">
                            Fale comigo
                            <FaRegPaperPlane className="text-zinc-500" />
                        </Button>
                    </a>
                    <a href="#">
                        <Button className="w-full flex flex-col gap-1 text:sm md:text-base relative">
                            Currículo
                            <span className="text-[10px] text-blue-500 -mt-2">( Download )</span>
                        </Button>
                    </a>
                </div>
            </div>
            <div className="hidden lg:flex">
                <img src={myFuture} alt="" />
            </div>
        </section>
    )
}