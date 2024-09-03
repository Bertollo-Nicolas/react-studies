import React, { useState } from 'react';
import { TaskPanelState } from '../../interfaces/interfaces';
import Todo from './Todo';
import { Button } from '../ui/button/Button';
import ButtonContentCreate from '../ui/button/ButtonContentCreate';
import { useTodos } from '../../hooks/useTodos';


const TodoList: React.FC = () => {

    const [isTaskPanelOpen, setIsTaskPanelOpen] = useState<TaskPanelState["isTaskPanelOpen"]>(false);

    const [todo, setTodo] = useState('')
    const { state, dispatch } = useTodos();
    const todosToDisplay = state.isFiltered ? state.filteredTodos : state.todos;

    const handleAddTodo = () => {
        if (todo.trim()) {
            dispatch({ type: 'ADD_TODO', payload: todo });
            setTodo('');
        }
    }

    const handleDeleteTodo = (id: string) => {
        dispatch({ type: 'DELETE_TODO', payload: id})
    }

    const handleSave = ( id: string, title: string, status: boolean ) => {
        dispatch({ type: 'UPDATE_TODO', payload: {id: id, title: title, status: status }})
    }

    return (
       <div>
            <div className="todo-list mt-6">
                {
                    todosToDisplay.map((item) => 
                        <Todo
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            handleSave={handleSave}
                            handleDelete={handleDeleteTodo}
                            status={item.status}
                        />
                    )
                }
                <div className="button-add-todo-content mb-5 absolute bottom-0 w-2/4">
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
                    <Button variant='black' className='' onClick={() => setIsTaskPanelOpen(prevState => !prevState)}>
                        <ButtonContentCreate label="Create new task" shortcut='N' variant='black' />
                    </Button>
                </div>
            </div>
       </div>
    );
};
export default TodoList;