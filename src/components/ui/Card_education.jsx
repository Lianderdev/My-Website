import { IoCalendarClearOutline } from "react-icons/io5";

export function CardEducation({img, curso, nivel, instituicao, data }) {
    return (
        <div className="flex gap-2 relative border p-4 rounded-xl">
            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-zinc-50 rounded-lg overflow-hidden">
                <img src={img} alt={curso}/>
            </div>
            <div className='flex flex-col gap-1 pl-2'>
                <h3 className='text-base capitalize'>{curso}</h3>
                <p className='text-sm text-zinc-200 capitalize font-medium'>{instituicao}</p>
                <p className='text-sm text-zinc-200 capitalize font-medium'>{nivel}</p>
                <p className='bottom-4 right-4 absolute text-xs text-zinc-500 capitalize  flex items-center gap-2'>
                    <IoCalendarClearOutline  className="text-base -mt-1" />
                    {data}
                </p> 
            </div>
        </div>
    );
}