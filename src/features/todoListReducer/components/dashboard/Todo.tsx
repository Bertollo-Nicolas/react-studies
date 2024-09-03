import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button/Button';

interface TodoProps {
    id: string,
    title: string,
    handleSave: (id: string, title: string, status: boolean) => void,
    handleDelete: (id: string) => void,
    status: boolean
}

const Todo: React.FC<TodoProps> = ({ id, title, handleSave, handleDelete, status }) => {

    const [editTitle, setEditTitle] = useState<string>('')
    const [editMode, setEditMode] = useState(false);
    const [editStatus, seteditStatus] = useState(status);
    
    const handleEditTitle = ( title: string ) => {
        setEditMode(!editMode)
        setEditTitle(title)
    }

    useEffect(() => {
        handleSave(id, title, editStatus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editStatus])

    return (
        <div className="todo h-11 bg-white rounded-lg flex items-center justify-between p-4 mb-2">
            <div className="todo-left flex items-center">
                <div className=
                {(!editStatus)?"checkbox w-6 h-6 rounded-md border-neutral-200 border-2 cursor-pointer":
                    "checkbox w-6 h-6 rounded-md border-neutral-200 border-2 cursor-pointer bg-black"
                } 
                onClick={() => seteditStatus(!editStatus)} >
                    <input type="checkbox" name="completed" className='hidden' />
                </div>
                <p className="capitalize font-medium ml-4">
                    {
                        (editMode) ? 
                            <input className="update-input border-2 border-neutral-300 px-4 rounded-lg" type='text' value={editTitle} onChange={e => setEditTitle(e.target.value)}/>
                        :
                            title
                    }
                </p>
            </div>
            <div className="flex">
                {
                    (editMode) ?
                        <Button onClick={() => {handleSave(id, editTitle, editStatus); setEditMode(!editMode);}} className='h-6 px-4'><span>save</span></Button>
                    :
                        <Button onClick={() => handleEditTitle(title)} className='h-6 px-4'><span>Update</span></Button>
                }
                
                <Button onClick={() => handleDelete(id)} className='h-6 px-4 ml-2'><span>Delete</span></Button>
                
            </div>
        </div>
    );
};
export default Todo;