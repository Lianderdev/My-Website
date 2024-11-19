export function Tool({ name, color, icon }) {
    return (
        <li style={{ userSelect: 'none' }} className="min-w-[113px] flex flex-col justify-center rounded-lg transition-colors border bg-zinc-900 flex-1 py-2">
            <div style={{ color: color }} className='p-1 md:p-2 mx-auto mb-2 rounded-md text-2xl relative border w-10 h-10 md:w-12 md:h-12 overflow-hidden'>
                <img src={icon} alt="" className="absolute top-0 left-0 blur-xl"/>
                <img src={icon} alt="" className="w-full"/>
            </div>
            <div className="border-t pl-2 pt-2">
                <p className="text-[10px] font-semibold uppercase tracking-wider">{name}</p>
            </div>
        </li>
    )
}