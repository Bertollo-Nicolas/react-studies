import React from 'react';
import Category from './Category';
import { Button } from '@/features/todoListReducer/components/ui/button/Button';
import ButtonContentCreate from '@/features/todoListReducer/components/ui/button/ButtonContentCreate';

const CategoryList: React.FC = () => {
    
    return (
        <div className='category w-2/5 h-full bg-white rounded-lg relative p-5'>
            <h2 className='text-xl mb-4 mt-2'>Private</h2>
            <div className="category-list overflow-y-scroll h-3/4 relative">
                <Category selected={true} icon="&#x1F3E0;" label="Home" count={8} />
            </div>
            <div className='absolute bottom-5 left-2/4 -translate-x-2/4 w-full px-5'>
                <div className="modal-category w-full bg-white drop-shadow-lg p-2 rounded-md mb-3">
                    <input type="text" className='bg-neutral-100 rounded-md px-3 py-1 w-full mb-3' />
                    <div className="list-options flex mb-3 justify-between">
                        <button className='bg-neutral-100 rounded-md w-[48%] hover:bg-neutral-950 hover:text-white transition-all duration-500 py-1 text-left px-2 flex'><span>&#x263A;</span><span className='ml-2'>Emoji</span></button>
                        <button className='group bg-neutral-100 rounded-md w-[48%] hover:bg-neutral-950 hover:text-white transition-all duration-500 py-1 text-left px-2 flex items-center'><span className="w-4 h-4 border-2 border-neutral-950 rounded-md right-0 group-hover:border-white"></span><span className='ml-2'>Color</span></button>
                    </div>
                    <div className="list-options-color">
                        <div className="grid grid-cols-8 gap-3">
                            <span className="default-color w-6 h-6 border-2 cursor-pointer border-blue-500 rounded-lg"></span>
                            <span className="default-color w-6 h-6 border-2 cursor-pointer border-sky-500 rounded-lg"></span>
                            <span className="default-color w-6 h-6 border-2 cursor-pointer border-cyan-500 rounded-lg"></span>
                            <span className="default-color w-6 h-6 border-2 cursor-pointer border-teal-500 rounded-lg"></span>
                            <span className="default-color w-6 h-6 border-2 cursor-pointer border-emerald-500 rounded-lg"></span>
                            <span className="default-color w-6 h-6 border-2 cursor-pointer border-green-500 rounded-lg"></span>
                            <span className="default-color w-6 h-6 border-2 cursor-pointer border-lime-500 rounded-lg"></span>
                            <span className="default-color w-6 h-6 border-2 cursor-pointer border-yellow-500 rounded-lg"></span>
                            <span className="default-color w-6 h-6 border-2 cursor-pointer border-amber-500 rounded-lg"></span>
                            <span className="default-color w-6 h-6 border-2 cursor-pointer border-orange-500 rounded-lg"></span>
                            <span className="default-color w-6 h-6 border-2 cursor-pointer border-red-500 rounded-lg"></span>
                            <span className="default-color w-6 h-6 border-2 cursor-pointer border-pink-500 rounded-lg"></span>
                            <span className="default-color w-6 h-6 border-2 cursor-pointer border-fuchsia-500 rounded-lg"></span>
                            <span className="default-color w-6 h-6 border-2 cursor-pointer border-purple-500 rounded-lg"></span>
                            <span className="default-color w-6 h-6 border-2 cursor-pointer border-neutral-500 rounded-lg"></span>
                            <span className="default-color w-6 h-6 border-2 cursor-pointer border-neutral-950 rounded-lg"></span>
                        </div>
                        <div className="list-options-custom-color">
                            <div className="header flex justify-between items-center mt-5 mb-5">
                                <span className='w-1/3 h-px bg-neutral-300' ></span>
                                <p>Custom Color</p>
                                <span className='w-1/3 h-px bg-neutral-300' ></span>
                            </div>
                            <div className="input relative">
                                <input type="text" className='bg-neutral-100 w-full py-1 rounded-md px-3' />
                                <span className="w-6 h-6 border-2 border-blue-500 rounded-lg absolute right-0"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <Button variant='neutral' >
                    <ButtonContentCreate label="Create new category" shortcut='l' />
                </Button>
            </div>
        </div>
    );
};
export default CategoryList;