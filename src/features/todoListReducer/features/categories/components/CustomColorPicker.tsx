import React from 'react';

const CustomColorPicker: React.FC = () => {
    return (
        <div className="list-options-custom-color">
            <div className="header flex justify-between items-center mt-5 mb-5">
                <span className='w-1/3 h-px bg-neutral-300' ></span>
                <p>Custom Color</p>
                <span className='w-1/3 h-px bg-neutral-300' ></span>
            </div>
            <div className="input relative h-10">
                <input placeholder="#000000" type="text" className='bg-neutral-100 w-full py-1 rounded-md px-3 h-10' />
                <span className="w-6 h-6 border-2 border-neutral-950 rounded-lg absolute right-3 bottom-1/2 transform translate-y-1/2"></span>
            </div>
        </div>
    );
};
export default CustomColorPicker;