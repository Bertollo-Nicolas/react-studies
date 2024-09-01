import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva('',{
    variants: {
        variant: {
            default:
                ''
        }
    }
})

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    icon?: React.ReactNode
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        className,
        variant,
        children,
        //icon,
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
          <span className="mx-2">{children}</span>
        </button>
      );
    },
  );
  
  Button.displayName = 'Button';
  
  export { Button };