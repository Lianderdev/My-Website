import { Button } from "@/components/ui/button";
import { CiLocationOn } from "react-icons/ci";
import { FaRegPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion"
import '../styles/animations.css'

export function Home() {
    return (
        <section id="home" className="pt-10 md:pt-32 flex-row items-center gap-3">
            <div className="flex flex-col gap-3">
                <h1 className="max-w-4xl text-2xl md:text-4xl font-black tracking-wide">
                    Olá! eu sou o liander souza, e atuo como desenvolvedor front-end & técnico em informática
                </h1>
                <p className="max-w-2xl text-sm md:text-lg pl-[2px] text-zinc-300"> Apaixonado por criar interfaces intuitivas e acessíveis, alinhadas às necessidades dos usuários e aos objetivos da empresa.</p>

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
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                        href="#contacts" className="relative">
                        <Button
                            variant="outline" className="w-full text:sm md:text-base gap-4 p-5 rounded-full">
                            Fale comigo
                            <FaRegPaperPlane className="text-zinc-500" />
                        </Button>
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Button className="w-full flex flex-col gap-1 md:gap-0 text:sm md:text-base p-5 rounded-full">
                            Currículo
                            <span className="text-[10px] text-blue-500 -mt-2">( Download )</span>
                        </Button>
                    </motion.a>
                </div>
            </div>
        </section>
    )
}