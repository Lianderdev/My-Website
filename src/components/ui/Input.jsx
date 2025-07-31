import { forwardRef } from 'react';

export const Input = forwardRef(({ label, ...rest }, ref) => {
  return (
    <div className="flex flex-col gap-1 text-xs md:text-sm">
      <label htmlFor={rest.id} className="capitalize">
        {label}
      </label>
      <input
        ref={ref}
        {...rest}
        className="border rounded-md p-2 text-zinc-50 bg-zinc-950 font-medium focus:border-white"
      />
    </div>
  );
});
