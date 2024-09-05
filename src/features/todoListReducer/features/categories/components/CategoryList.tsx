import React from 'react';
import Category from './Category';
import { Button } from '@/features/todoListReducer/components/ui/button/Button';
import ButtonContentCreate from '@/features/todoListReducer/components/ui/button/ButtonContentCreate';
import ModalCreateCategory from './ModalCreateCatergory';

const CategoryList: React.FC = () => {
    
    return (
        <div className='category w-2/5 h-full bg-white rounded-lg relative p-5'>
            <h2 className='text-xl mb-4 mt-2'>Private</h2>
            <div className="category-list overflow-y-scroll h-3/4 relative">
                <Category selected={true} icon="&#x1F3E0;" label="Home" count={8} />
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