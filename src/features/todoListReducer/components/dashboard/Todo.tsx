import React from 'react';

interface TodoProps {
    id: string,
    title: string,
    editTitle: string
    updateTodoToggle: boolean,
    setEditTitle: (title: string) => void,
    handleSave: (id: string) => void,
    handleDelete: (id: string) => void,
    handleEditTitle: (title: string) => void
}

const Todo: React.FC<TodoProps> = ({ updateTodoToggle, id, title, editTitle, setEditTitle, handleSave,  handleEditTitle, handleDelete}) => {

    return (
        <div className="todo h-11 bg-white rounded-lg flex items-center justify-between p-4 mb-2">
            <div className="todo-left flex">
                <div className="checkbox w-6 h-6 rounded-md border-neutral-200 border-2 cursor-pointer">
                    <input type="checkbox" name="completed" className='hidden' />
                </div>
                <p className="capitalize font-medium ml-4">
                    {
                        (updateTodoToggle) ? 
                            <input className="update-input" type='text' value={editTitle} onChange={e => setEditTitle(e.target.value)}/>
                        :
                            title
                    }
                </p>
            </div>
            <div className="block">
                {
                    (updateTodoToggle) ?
                        <button onClick={() => 
                        handleSave(id)
                        }>
                            Save
                        </button>
                    :
                        <button onClick={() => handleEditTitle(title)}>Update</button>
                }
                
                <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    );
};
export default Todo;