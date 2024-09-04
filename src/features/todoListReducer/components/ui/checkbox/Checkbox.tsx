import React from 'react';

interface CheckboxProps {
    isChecked: boolean,
}

const Checkbox: React.FC<CheckboxProps> = ({ isChecked }) => {
    return (
        <div className={
            (!isChecked)
                ? "checkbox w-6 h-6 rounded-md border-neutral-200 border-2 cursor-pointer transition-all duration-500 ease-in-out"
                : "checkbox w-6 h-6 rounded-md border-neutral-200 border-2 cursor-pointer bg-black transition-all duration-500 ease-in-out"
        }>
            <input type="checkbox" name="completed" checked={isChecked} className='hidden' />
        </div>
    );
};
export default Checkbox;