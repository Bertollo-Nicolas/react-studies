import React from 'react';
import Category from './Category';
import { Button } from '../ui/button/Button';
import ButtonContentCreate from '../ui/button/ButtonContentCreate';

interface CategoryListProps {
    // Déclare ici les props du composant si nécessaire
}

const CategoryList: React.FC<CategoryListProps> = (props) => {
    
    return (
        <div className='category w-2/5 h-full bg-white rounded-lg relative p-5'>
            <h2 className='text-xl mb-4 mt-2'>Private</h2>
            <div className="category-list overflow-y-scroll h-3/4 relative">
                <Category selected={true} icon="&#x1F3E0;" label="Home" count={8} />
            </div>
            <div className='absolute bottom-5 left-2/4 -translate-x-2/4 w-full px-5'>
                <Button variant='neutral' >
                    <ButtonContentCreate label="Create new category" shortcut='l' />
                </Button>
            </div>
        </div>
    );
};
export default CategoryList;