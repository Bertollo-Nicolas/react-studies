import React, { createContext, useEffect, useReducer } from 'react';
import { Action, todosReducer } from '../reducers/todosReducer';
import { initializeTodos } from '../../utils/storageUtils';
import { Todo } from '@/features/todoListReducer/features/todos/interfaces/interfaces';

type State = { todos: Todo[], isFiltered: boolean, filteredTodos: Todo[] };
type TodosContextType = {
    state: State;
    dispatch: React.Dispatch<Action>;
};

export const TodosContext = createContext<TodosContextType | undefined>(undefined);

const TodosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(todosReducer, initializeTodos());

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
        window.localStorage.setItem('todos', JSON.stringify(state));
    }, [state]);

    return (
        <TodosContext.Provider value={{ state, dispatch }}>
            {children}
        </TodosContext.Provider>
    );
};

export default TodosProvider;