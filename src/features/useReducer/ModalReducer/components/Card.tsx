import { IconEye } from '@tabler/icons-react';
import React from 'react';

interface CardProps {
    children: React.ReactNode,
    width: string,
    title: string
}

const Card: React.FC<CardProps> = ({ children, width, title }) => {
    return (
        <div className={"rounded-lg bg-gradient-to-b from-indigo-700 to-indigo-900 p-6 "+ width}>
            <div className={"card-header flex justify-between "}>
                <h2 className='text-lg'>{title}</h2>
                <IconEye />
            </div>
            {children}
        </div>
            
    );
};
export default Card;