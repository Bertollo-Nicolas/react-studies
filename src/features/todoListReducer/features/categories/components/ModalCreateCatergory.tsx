import React from 'react';
import DefaultColorPicker from './DefaultColorPicker';
import CustomColorPicker from './CustomColorPicker';

const ModalCreateCategory: React.FC = () => {
    return (
        <div className="modal-category w-full bg-white drop-shadow-lg p-2 rounded-md mb-3">
            <div className="input relative h-10 mb-2">
                <input type="text" placeholder='Create new List' className='bg-neutral-100 rounded-md  py-1 pl-11 pr-3 capitalize w-full mb-3 h-10' />
                <span className="default-color w-6 h-6 border-2 border-neutral-200 rounded-lg absolute left-2 bottom-1/2 transform translate-y-1/2"></span>
            </div>
            <div className="list-options flex mb-6 justify-between">
                <button className='bg-neutral-100 rounded-md w-[48%] hover:bg-neutral-950 hover:text-white transition-all duration-500 py-1 text-left px-2 flex'><span>&#x263A;</span><span className='ml-2'>Emoji</span></button>
                <button className='group bg-neutral-100 rounded-md w-[48%] hover:bg-neutral-950 hover:text-white transition-all duration-500 py-1 text-left px-2 flex items-center'><span className="w-4 h-4 border-2 border-neutral-950 rounded-md right-0 group-hover:border-white"></span><span className='ml-2'>Color</span></button>
            </div>
            <div className="list-options-color">
                <DefaultColorPicker />
                <CustomColorPicker />
            </div>
        </div>
    );
};
export default ModalCreateCategory;