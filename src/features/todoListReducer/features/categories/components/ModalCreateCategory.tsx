import React, { useEffect, useState } from 'react';
import DefaultColorPicker from './DefaultColorPicker';
import CustomColorPicker from './CustomColorPicker';
import EmojiPicker, { Emoji, EmojiStyle } from 'emoji-picker-react';
import { IconMoodSmile } from '@tabler/icons-react';
import { Button } from '@/features/todoListReducer/components/ui/button/Button';
import { useCategories } from '../hooks/useCategories';

const ModalCreateCategory: React.FC = () => {

    const { dispatch } = useCategories();
    const [category, setCategory] = useState("")
    const [showColorOptions, setShowColorOptions] = useState(true)
    const [showEmojiOptions, setShowEmojiOptions] = useState(false)
    const [pickedColor, setPickedColor] = useState("")
    const [pickedEmoji, setPickedEmoji] = useState("")

    const handleAddCat = () => {
        if (category.trim()) {
            dispatch({ type: 'ADD_CAT', payload: {title: category, icon: pickedEmoji, color: pickedColor} });
            setCategory('');
        }
    }

    useEffect(() => {
        setPickedEmoji("")
    }, [pickedColor])
    useEffect(() => {
        setPickedColor("")
    }, [pickedEmoji])


    return (
        <div className="modal-category w-full bg-white drop-shadow-lg p-2 rounded-md mb-3 border border-neutral-200 ">
            <div className="input relative h-10 mb-2 ">
                <input type="text" value={category} onChange={e => setCategory(e.target.value)} placeholder='Create new List' className='bg-neutral-100 rounded-md  py-1 pl-11 pr-3 capitalize w-full mb-3 h-10' />
                {
                    (showEmojiOptions) ?
                    <div className="absolute left-2 bottom-1/2 transform translate-y-1/2">
                        <Emoji emojiStyle={EmojiStyle.NATIVE} unified={pickedEmoji} size={20} />   
                    </div>
                    
                    :<span className={"default-color w-6 h-6 border-2 rounded-lg absolute left-2 bottom-1/2 transform translate-y-1/2"} style={{borderColor: pickedColor}}></span>
                }
                
            </div>
            <div className="list-options flex mb-6 justify-between ">
                <button 
                    onClick={() => [setShowColorOptions(false), setShowEmojiOptions(true)]}
                    className={'bg-neutral-100 rounded-md w-[48%] hover:bg-neutral-950 hover:text-white transition-all duration-500 py-1 text-left px-2 flex items-center ' + (showEmojiOptions ? 'bg-neutral-950 text-white' : '')}
                >
                    <span><IconMoodSmile /></span>
                    <span className='ml-2'>Emoji</span>
                </button>
                <button 
                    onClick={() => [setShowColorOptions(true), setShowEmojiOptions(false)]} 
                    className={'bg-neutral-100 rounded-md w-[48%] hover:bg-neutral-950 hover:text-white transition-all duration-500 py-1 text-left px-2 flex items-center ' + (showColorOptions ? 'bg-neutral-950 text-white' : '')}
                >
                    <span className={"w-4 h-4 border-2 rounded-md right-0 group-hover:border-white "+ (showColorOptions ? "border-white": "border-neutral-950")}></span>
                    <span className='ml-2'>Color</span>
                </button>
            </div>
            {
                (showEmojiOptions) ?
                    <div className='transition-all duration-500'>
                        <div className="header flex justify-between items-center mt-5 mb-5 text-center">
                            <span className='w-[30%] h-px bg-neutral-300' ></span>
                            <p>Select Emoji</p>
                            <span className='w-[30%] h-px bg-neutral-300' ></span>
                        </div>
                        <EmojiPicker 
                            width="100%" 
                            height="400px" 
                            style={{ border: "none", '--epr-emoji-size': '25px' } as React.CSSProperties} 
                            emojiStyle={EmojiStyle.NATIVE}
                            previewConfig={{ showPreview: false }} 
                            onEmojiClick={e => setPickedEmoji(e.unified)} lazyLoadEmojis={true} 
                        />
                    </div>
                     :
                    <div className="list-options-color transition-all duration-500">
                        <DefaultColorPicker setPickedColor={setPickedColor} />
                        <CustomColorPicker setPickedColor={setPickedColor} />
                    </div>
            }
            <Button className='h-8 mt-5' onClick={handleAddCat}>
                <span>Save</span>
            </Button>
        </div>
    );
};
export default ModalCreateCategory;