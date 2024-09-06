import { IconColorPicker } from '@tabler/icons-react';
import React, { useState } from 'react';

interface CustomColorProps {
    setPickedColor: React.Dispatch<React.SetStateAction<string>>
} 

const CustomColorPicker: React.FC<CustomColorProps> = ({setPickedColor}) => {

    const [color, setColor] = useState("#000000")
    
    return (
        <div className="list-options-custom-color">
            <div className="header flex justify-between items-center mt-5 mb-5">
                <span className='w-1/3 h-px bg-neutral-300' ></span>
                <p>Custom Color</p>
                <span className='w-1/3 h-px bg-neutral-300' ></span>
            </div>
            <div className="input h-10 flex justify-between">
                <div className="input-content relative w-[85%]">
                    <input placeholder="#000000" value={color} onChange={e => setColor(e.target.value)} type="text" className='bg-neutral-100 w-full py-1 rounded-md px-3 h-10' />
                    <span className="w-6 h-6 border-2 rounded-lg absolute right-3 bottom-1/2 transform translate-y-1/2" style={{borderColor: color}}></span>
                </div>
                <div className="btn-content flex">
                    <div className="group btn-pick-color">
                        <input className='w-10 h-10 absolute z-0 opacity-0 cursor-pointer' type="color" value={color} onChange={e => [setColor(e.target.value), setPickedColor(color)]} />
                        <button className='bg-neutral-950 w-10 h-10 rounded-md flex items-center justify-center mr-1 transition-all text-neutral-200'><IconColorPicker className='transistion-all duration-500 group-hover:-rotate-45'/></button>
                    </div> 
                </div>
            </div>
        </div>
    );
};
export default CustomColorPicker;