export function Tool({ name, color, Icon }) {
    return (
        <li style={{ userSelect: 'none' }} className="min-w-[113px] flex flex-col justify-center rounded-lg transition-colors border bg-transparent flex-1">
            <div style={{ backgroundColor: color }} className='p-1 mx-auto my-3 rounded-md text-4xl'>
                <Icon />
            </div>
            <div className="border-t">
                <p className="text-sm capitalize px-4 py-2 tracking-wide">{name}</p>
            </div>
        </li>
    )
}