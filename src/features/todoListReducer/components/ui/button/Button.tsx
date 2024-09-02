import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva('',{
    variants: {
        variant: {
            default:
                'group btn-default bg-blue-100 rounded-full w-full text-blue-600 capitalize h-10 flex justify-center items-center font-normal text-sm transition-all duration-500 hover:bg-blue-200 hover:drop-shadow-md',
            primary:
                'group btn-primry bg-blue-600 rounded-full w-full text-neutral-100 capitalize h-10 flex justify-center items-center font-normal text-sm transition-all duration-500 hover:bg-blue-700 hover:drop-shadow-md',
            neutral:
                'group btn-neutral bg-neutral-100 rounded-full w-full text-neutral-950 capitalize h-10 flex justify-between items-center pl-4 pr-2 font-normal text-sm transition-all duration-500 hover:drop-shadow-md',
            black:
                'group btn-black bg-neutral-950 rounded-full w-full text-neutral-100 capitalize h-10 flex justify-between items-center pl-4 pr-2 font-normal text-sm transition-all duration-800 hover:drop-shadow-md hover:font-bold',
        }
    },
    defaultVariants: {
    variant: 'default',
    },
})

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        className,
        variant,
        children,
        ...props
      },
      ref,
    ) => {
      return (
        <button
          className={buttonVariants({ variant, className })}
          ref={ref}
          {...props}
        >
          {children}
        </button>
      );
    },
  );
  
  Button.displayName = 'Button';
  
  export { Button };