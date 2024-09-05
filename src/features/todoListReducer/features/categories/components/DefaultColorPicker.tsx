import React from 'react';
import colors from '../data/color';

const DefaultColorPicker: React.FC = () => {
    return (
        <div className="grid grid-cols-8 gap-3">
             {
                colors.map((color, index) => 
                    <span key={index} className={"default-color w-6 h-6 border-2 cursor-pointer border-"+color.colorName+"-"+color.colorShade+" rounded-lg"}></span>
                )
             }       
            
        </div>
    );
};
export default DefaultColorPicker;