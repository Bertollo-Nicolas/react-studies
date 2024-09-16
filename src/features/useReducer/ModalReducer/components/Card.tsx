import { IconEye } from '@tabler/icons-react';
import React from 'react';
import { CardData } from '../store/CardReducer';

interface CardProps extends CardData {
    children: React.ReactNode;
    width: string;
    title: string;
    onClose: () => void;
    ref: React.RefObject<HTMLDivElement>;
}

const Card: React.FC<CardProps> = React.forwardRef<HTMLDivElement, Omit<CardProps, 'ref'>>(({ isOpen, type, onClose, children, title, width }, ref) => {

    if (!isOpen) return null;

    return (
        <div ref={ref} className={`card car-${type} rounded-lg bg-gradient-to-b from-indigo-700 to-indigo-900 p-6 ${width}`}>
            <div className={"card-header flex justify-between "}>
                <h2 className='text-lg'>{title}</h2>
                <IconEye className='cursor-pointer' onClick={onClose} />
            </div>
            {children}
        </div>
            
    );
});
export default Card;