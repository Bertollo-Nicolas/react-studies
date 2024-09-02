import { IconCmd, IconPlus } from '@/features/todoListReducer/assets/svg';
import { cva } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva('', {
  variants: {
    variant: {
      neutral: 'btn-create--content-left flex justify-between items-center w-full',
      black: 'btn-create--content-left flex justify-between items-center w-full',
    },
  },
  defaultVariants: {
    variant: 'neutral',
  },
});

type ButtonVariant = "neutral" | "black";

interface ButtonContentCreateProps {
  label: string;
  shortcut: string;
  variant?: ButtonVariant;
  className?: string; 
}

const ButtonContentCreate: React.FC<ButtonContentCreateProps> = ({ label, shortcut, variant = "neutral", className }) => {

  return (
    <div className={buttonVariants({ variant, className })}>
      <div className="flex items-center">
      <IconPlus className="w-4 h-4 group-hover:animate-spin-360 group-hover:group-hover:animate-spin-reset" />
        <span className="label ml-2">{label}</span>
      </div>
      <div className="btn-create--content-right flex justify-between items-center">
        <div 
        className=
          {
            "icon-shortcut rounded-full w-7 h-7 flex justify-center items-center"+ 
            (variant !== 'black' ? " border border-neutral-400 text-neutral-500" : " bg-neutral-700")
          }
        >
          <IconCmd 
            className={
              "w-4 h-4" + 
              (variant !== 'black' ? " text-neutral-500" : " text-neutral-100")
            }
          />
        </div>
        <div className={
            "icon-shortcut rounded-full w-7 h-7 flex justify-center items-center ml-1"+ 
            (variant !== 'black' ? " border border-neutral-400 text-neutral-500" : " bg-neutral-700")
          }>
          <span 
          className={
              (variant !== 'black' ? "text-neutral-500" : " text-neutral-100")
            }>{shortcut}</span>
        </div>
      </div>
    </div>
  );
};

export default ButtonContentCreate;
