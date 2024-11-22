export function Tool({ name, color, icon }) {
    return (
        <li style={{ userSelect: 'none' }} className="min-w-[130px] flex items-center gap-2 flex-1 p-2 rounded-lg transition-colors bg-zinc-900">
            <div style={{ color: color }} className='rounded-md p-1 text-2xl relative border w-10 h-10 md:w-8 md:h-8 overflow-hidden flex-shrink-0'>
                <img src={icon} alt="" className="absolute top-0 left-0 blur-md" />
                <img src={icon} alt="" className="w-full z-20" />
            </div> <div className="">
                <p className="text-[10px] font-semibold uppercase tracking-wider">{name}</p>
            </div>
        </li>
    )
}