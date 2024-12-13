// Components
import { Button } from "@/components/ui/button";

// Icons
import { CiLocationOn } from "react-icons/ci";
import { FaRegPaperPlane } from "react-icons/fa";

// Libs
import { motion } from "framer-motion"

// styles
import '../styles/animations.css'

export function Home() {
    return (
        <section id="home" className="w-full pt-32 md:pt-48 flex-row items-center gap-3">
            <div className="flex flex-col gap-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-wide">
                    Olá! eu sou o liander souza, e trabalho como desenvolvedor front-end & técnico em informática
                </h1>
                <p className="text-sm md:text-lg pl-[2px] text-zinc-300"> Apaixonado por criar interfaces intuitivas e acessíveis, alinhadas às necessidades dos usuários e aos objetivos da empresa.</p>
                <div className="flex gap-4">
                    <div className="flex items-center gap-1 px-1">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-[7px] circle"></div>
                        <p className='text-sm'>Open to work</p>
                    </div>
                    <div className="flex items-center gap-1 px-1">
                        <CiLocationOn className='text-2xl mb-[6px] text-zinc-500' />
                        <p className='text-sm'>Ananindeua · Pa</p>
                    </div>
                </div>

                <div className="w-full grid grid-cols-2 gap-4">
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
                        whileTap={{ scale: 0.9 }}>
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