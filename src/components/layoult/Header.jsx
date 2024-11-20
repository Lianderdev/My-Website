import { Navigation } from "../ui/Navigation";
import { Soon } from "../ui/Soon";

//icons
import { FiGithub } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import { RiMenuFold4Line } from "react-icons/ri";

//bg color header
export function Header() {
    return (
        <header className="bg-colorHeader backdrop-blur-xl flex justify-between items-center py-5 fixed top-0 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-4">
                <a href="#home"><Soon /></a>
                
            </div>
            <div className="flex items-center gap-1 text-2xl  text-zinc-700">
                <a href="#" className="hover:text-zinc-50 duration-200 transition-colors"><FiGithub className="w-7 h-7 p-1" /></a>
                <a href="#" className="hover:text-zinc-50 duration-200 transition-colors"><RiLinkedinLine className="w-7 h-7 p-1" /></a>
                <button className="p-1 text-2xl bg-zinc-900 text-zinc-50 rounded-lg ml-2 md:hidden">
                    <RiMenuFold4Line />
                </button>
            </div>
        </header>
    )
}