import React from 'react';
import colors from '../data/color';

interface DefaultColorProps {
    setPickedColor: React.Dispatch<React.SetStateAction<string>>
} 

const DefaultColorPicker: React.FC<DefaultColorProps> = ({setPickedColor}) => {

    return (
        <div className="grid grid-cols-8 gap-3">
             {
                colors.map((color, index) => 
                    <span key={index} className={`default-color bg-white w-7 h-7 border-2 cursor-pointer ${color.borderClassName} rounded-lg ${color.hoverBgClassName} transition-all duration-300 animate-scale-up`} onClick={() => setPickedColor(color.hexCode)}></span>
                )
             }       
            
        </div>
    );
};
export default DefaultColorPicker;