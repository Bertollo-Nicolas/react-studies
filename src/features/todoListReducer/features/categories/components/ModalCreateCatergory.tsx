import React, { useState } from 'react';
import DefaultColorPicker from './DefaultColorPicker';
import CustomColorPicker from './CustomColorPicker';

const ModalCreateCategory: React.FC = () => {

    const [showColorOptions, setShowColorOptions] = useState(true)
    const [showEmojiOptions, setShowEmojiOptions] = useState(false)
    const [pickedColor, setPickedColor] = useState("#D946EF")

    console.log("color now: "+pickedColor);
    

    return (
        <div className="modal-category w-full bg-white drop-shadow-lg p-2 rounded-md mb-3">
            <div className="input relative h-10 mb-2">
                <input type="text" placeholder='Create new List' className='bg-neutral-100 rounded-md  py-1 pl-11 pr-3 capitalize w-full mb-3 h-10' />
                <span className={"default-color w-6 h-6 border-2 rounded-lg absolute left-2 bottom-1/2 transform translate-y-1/2"} style={{borderColor: pickedColor}}></span>
            </div>
            <div className="list-options flex mb-6 justify-between">
                <button 
                    onClick={() => [setShowColorOptions(!showColorOptions), setShowEmojiOptions(!showEmojiOptions)]}
                    className={'bg-neutral-100 rounded-md w-[48%] hover:bg-neutral-950 hover:text-white transition-all duration-500 py-1 text-left px-2 flex items-center ' + (showEmojiOptions ? 'bg-neutral-950 text-white' : '')}
                >
                    <span>&#x263A;</span>
                    <span className='ml-2'>Emoji</span>
                </button>
                <button 
                    onClick={() => [setShowColorOptions(!showColorOptions), setShowEmojiOptions(!showEmojiOptions)]} 
                    className={'bg-neutral-100 rounded-md w-[48%] hover:bg-neutral-950 hover:text-white transition-all duration-500 py-1 text-left px-2 flex items-center ' + (showColorOptions ? 'bg-neutral-950 text-white' : '')}
                >
                    <span className={"w-4 h-4 border-2 rounded-md right-0 group-hover:border-white "+ (showColorOptions ? "border-white": "border-neutral-950")}></span>
                    <span className='ml-2'>Color</span>
                </button>
            </div>
            <div className="list-options-color">
                <DefaultColorPicker setPickedColor={setPickedColor} />
                <CustomColorPicker setPickedColor={setPickedColor} />
            </div>
        </div>
    );
};
export default ModalCreateCategory;