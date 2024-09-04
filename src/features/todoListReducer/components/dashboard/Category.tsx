import React from 'react';

interface CategoryProps {
    label: string,
    icon: string,
    count: number,
    selected: boolean
}

const Category: React.FC<CategoryProps> = ({label, icon, count, selected}) => {
    return (
        <div className={"category-list--item cursor-pointer flex justify-between items-center px-2 h-10 rounded-lg mb-2 transition-all duration-500 hover:bg-neutral-100 " + (selected && " bg-neutral-100")}>
            <div className="category-list--item-left flex items-center">
                <div className="icon text-lg">{icon}</div>
                <div className="title pl-2 text-md">{label}</div>
            </div>
            <div className="category-list--item-right">
                <span className="item-count text-xs bg-neutral-200 px-2 py-1 rounded-lg text-neutral-500">{count}</span>
            </div>
        </div>
    );
};
export default Category;