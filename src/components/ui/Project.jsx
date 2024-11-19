import { MdArrowOutward } from "react-icons/md";

import { Card, CardContent } from "../ui/card"

export function Project({ title, link, img, github }) {
    return (
        <Card >
            <CardContent>
                <div className="w-full rounded-lg overflow-hidden group relative">
                    <img href={link} className="object-fill transform transition-transform duration-500 group-hover:scale-110 group-hover:z-10" src={img} alt={title} />
                    <a className="w-full h-full absolute top-0 left-0 opacity-0 bg-black group-hover:opacity-50 transition-opacity" href={link} target="_blank">
                        <div className="w-full h-full flex items-center justify-center">
                            <MdArrowOutward className="text-white text-2xl z-10 opacity-100" />
                        </div>
                    </a>
                </div>
                <div className="flex flex-col gap-2 mt-2">
                    <h3 className="text-base capitalize ">{title}</h3>
                    <div className="flex gap-2">
                        <a href={github} target="_blank" className="text-[10px] tracking-wider bg-zinc-900 hover:bg-zinc-800 px-2 py-1 rounded-lg uppercase font-medium transition-colors duration-600">Github</a>
                        <a href={link} target="_blank" className="text-[10px] tracking-wider bg-zinc-900 hover:bg-zinc-800 px-2 py-1 rounded-lg uppercase font-medium transition-colors duration-600">Deploy</a>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}