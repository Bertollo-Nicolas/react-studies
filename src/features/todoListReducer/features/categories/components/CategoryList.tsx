import React from 'react';
import Category from './Category';
import { Button } from '@/features/todoListReducer/components/ui/button/Button';
import ButtonContentCreate from '@/features/todoListReducer/components/ui/button/ButtonContentCreate';
import ModalCreateCategory from './ModalCreateCategory';
import { useCategories } from '../hooks/useCategories';

const CategoryList: React.FC = () => {

    const { state, dispatch } = useCategories();
    const categoriesDisplay = state.categories;
    
    return (
        
        <div className='category w-2/5 h-full bg-white rounded-lg relative p-5'>
            <h2 className='text-xl mb-4 mt-2'>Private</h2>
            <div className="category-list overflow-y-scroll h-3/4 relative">
                {
                    categoriesDisplay.map((category) => 
                        <Category key={category.id} selected={true} icon={category.icon} color={category.color} label={category.title} count={8} />
                    )
                }
            </div>
            <div className='absolute bottom-5 left-2/4 -translate-x-2/4 w-full px-5'>
                <ModalCreateCategory />
                <Button variant='neutral' >
                    <ButtonContentCreate label="Create new category" shortcut='l' />
                </Button>
            </div>
        </div>
           
    );
};
export default CategoryList;
