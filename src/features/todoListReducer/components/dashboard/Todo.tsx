import React, { useState } from 'react';
import { Button } from '../ui/button/Button';

interface TodoProps {
    id: string,
    title: string,
    editTitle: string
    editMode: boolean,
    setEditMode: (editMode: boolean) => void
    setEditTitle: (title: string) => void,
    handleSave: (id: string, title: string) => void,
    handleDelete: (id: string) => void,
    handleEditTitle: (title: string) => void
}

const Todo: React.FC<TodoProps> = ({ id, title, handleSave, handleDelete, setEditMode, editMode }) => {

    const [editTitle, setEditTitle] = useState<string>('')
    
    const handleEditTitle = ( title: string ) => {
        setEditMode(!editMode)
        setEditTitle(title)
    }

    return (
        <div className="todo h-11 bg-white rounded-lg flex items-center justify-between p-4 mb-2">
            <div className="todo-left flex">
                <div className="checkbox w-6 h-6 rounded-md border-neutral-200 border-2 cursor-pointer">
                    <input type="checkbox" name="completed" className='hidden' />
                </div>
                <p className="capitalize font-medium ml-4">
                    {
                        (editMode) ? 
                            <input className="update-input" type='text' value={editTitle} onChange={e => setEditTitle(e.target.value)}/>
                        :
                            title
                    }
                </p>
            </div>
            <div className="flex">
                {
                    (editMode) ?
                        <Button onClick={() => handleSave(id, editTitle)} className='h-6 px-4'><span>save</span></Button>
                    :
                        <Button onClick={() => handleEditTitle(title)} className='h-6 px-4'><span>Update</span></Button>
                }
                
                <Button onClick={() => handleDelete(id)} className='h-6 px-4 ml-2'><span>Delete</span></Button>
                
            </div>
        </div>
    );
};
export default Todo;