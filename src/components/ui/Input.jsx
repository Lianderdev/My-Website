// Hook
import { forwardRef } from 'react'

export const Input = forwardRef(({ label, value, handleGetInput, ...rest }, ref) => {
    return (
        <>
            <div className="flex flex-col gap-1 text-xs md:text-sm">
                <label htmlFor={label} className='capitalize'>{label}</label>
                <input type="text" value={value} ref={ref} {...rest} className="border rounded-md p-2 text-zinc-50 bg-zinc-950 font-medium focus:border-white" />
            </div>
        </>
    )
})