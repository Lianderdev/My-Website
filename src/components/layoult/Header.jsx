import { Navigation } from "../ui/Navigation";
import { Soon } from "../ui/Soon";
import { motion } from "framer-motion"

import { FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";

export function Header() {
    return (
        <header className="w-full fixed top-0 left-1/2 -translate-x-1/2 z-50 p-4">
            <div className="w-full bg-colorHeader backdrop-blur-xl border rounded-xl flex justify-between items-center p-3 mt-3">
                <div className="flex items-center gap-4">
                    <a href="#home">
                        <Soon />
                    </a>
                </div>
                <div className="flex items-center gap-2 text-3xl text-zinc-700">
                    <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }} 
                    href="https://github.com/Lianderdev" target="_blank" className="text-zinc-50 duration-200 transition-colors bg-[#0D1117] rounded-lg">
                        <FiGithub className="p-2" />
                    </motion.a>
                    <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }} 
                    href="https://www.linkedin.com/in/liander-vinicius/" target="_blank" className="text-zinc-50 duration-200 transition-colors bg-blue-800 rounded-lg">
                        <RiLinkedinLine className="p-2" />
                    </motion.a>
                </div>
            </div>
        </header>
    )
}