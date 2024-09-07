import { Emoji } from 'emoji-picker-react';
import React from 'react';

interface CategoryProps {
    label: string,
    icon?: string,
    color?: string,
    count: number,
    selected: boolean
}

const Category: React.FC<CategoryProps> = ({label, icon, color, count, selected}) => {

    console.log(label, color);
    
    return (
        <div className={"category-list--item cursor-pointer flex justify-between items-center px-2 h-10 rounded-lg mb-2 transition-all duration-500 hover:bg-neutral-100 " + (selected && " bg-neutral-100")}>
            <div className="category-list--item-left flex items-center relative">
                {
                    color?
                        <span className="w-6 h-6 border-2 rounded-lg" style={{borderColor: color}}></span>
                    :
                    <Emoji unified={icon || ""} />
                }
                <div className="title pl-2 text-md capitalize">{label}</div>
            </div>
            <div className="category-list--item-right">
                <span className="item-count text-xs bg-neutral-200 px-2 py-1 rounded-lg text-neutral-500">{count}</span>
            </div>
        </div>
    );
};
export default Category;