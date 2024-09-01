import React, { useEffect, useReducer, useState } from 'react';
import { todosReducer } from '../../reducers/todosReducer';
import { initializeTodos } from '../../utils/storageUtils';
import { TaskPanelState } from '../../interfaces/interfaces';
import { Button } from '@/components/ui/button';
import Todo from './todo';

const TodoList: React.FC = () => {

    const [isTaskPanelOpen, setIsTaskPanelOpen] = useState<TaskPanelState["isTaskPanelOpen"]>(false);

    const [todo, setTodo] = useState('')
    const [todos, dispatch] = useReducer(todosReducer, initializeTodos());
    const [updateTodoToggle, setUpdateTodoToggle] = useState(false)
    const [editTitle, setEditTitle] = useState<string>('')

    const handleAddTodo = () => {
        if (todo.trim()) {
            dispatch({ type: 'ADD_TODO', payload: todo });
            setTodo('');
        }
    }

    const handleEditTitle = ( title: string ) => {
        setUpdateTodoToggle(!updateTodoToggle)
        setEditTitle(title)
    }

    const handleDeleteTodo = (id: string) => {
        dispatch({ type: 'DELETE_TODO', payload: id})
    }

    const handleSave = ( id: string ) => {
        dispatch({ type: 'UPDATE_TODO', payload: {id: id, title: editTitle }})
        setUpdateTodoToggle(!updateTodoToggle)
    }

    useEffect(() => {
        try {
            const storedTodos = window.localStorage.getItem('todos');
            if (storedTodos) {
                dispatch({ type: 'INIT_TODOS', payload: JSON.parse(storedTodos) });
            }
        } catch (error) {
            console.error("Failed to load todos from localStorage:", error);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
       <div>
            <div className="todo-list mt-6">
                {
                    todos.todos.map((item) => 
                        <Todo
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            editTitle={editTitle}
                            updateTodoToggle={updateTodoToggle}
                            setEditTitle={setEditTitle}
                            handleSave={handleSave}
                            handleDelete={handleDeleteTodo}
                            handleEditTitle={handleEditTitle}
                        />
                    )
                }
                <div className="button-add-todo-content mb-6 ">
                    {
                        (isTaskPanelOpen) &&
                        <div className="input-add-todo-content bg-gray-800 text-white">
                            <input 
                                className="bg-gray-900" 
                                type="text" 
                                placeholder='Create a new task' 
                                value={todo} 
                                onChange={e => setTodo(e.target.value)}
                            />
                            <button onClick={handleAddTodo}>Save</button>
                        </div>
                    }
                    
                    <button onClick={() => setIsTaskPanelOpen(prevState => !prevState)} className="button-add-todo rounded-full text-left bg-gray-700 p-2 mt-1 pl-3 flex" >
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                        <p className="ml-2">Add a new task</p>
                    </button>

                    <Button className='bg-neutral-200 rounded-full w-full text-neutral-950 capitalize h-10 flex justify-between'>
                        <div>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                        </div>
                    </Button>
                </div>
            </div>
       </div>
    );
};
export default TodoList;