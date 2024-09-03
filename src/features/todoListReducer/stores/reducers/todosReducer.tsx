import { Todo } from "../../interfaces/interfaces";

type State = { 
    todos: Todo[],
    filteredTodos: Todo[], 
    isFiltered: boolean 
}
export type Action = 
    | { type: 'ADD_TODO'; payload: string}
    | { type: 'UPDATE_TODO'; payload: { id: string, title: string, status: boolean } }
    | { type: 'DELETE_TODO'; payload: string }
    | { type: 'INIT_TODOS'; payload: State  }
    | { type: 'FILTER_COMPLETED'; payload: boolean }
    | { type: 'FILTER_RESET'; }

export const todosReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: Date.now().toString(),
                        title: action.payload,
                        status: false
                    }
                ]
            };
        case 'UPDATE_TODO':
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id ? { ...todo, title: action.payload.title, status: action.payload.status } : todo
                )
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case 'INIT_TODOS':
            return {
                ...state,
                todos: action.payload.todos,
                filteredTodos: action.payload.todos,
                isFiltered: false,
            };
        case 'FILTER_COMPLETED':
            return {
                ...state,
                filteredTodos: state.todos.filter((todo) => todo.status === action.payload),
                isFiltered: true
            };
        case 'FILTER_RESET':
            return {
                ...state,
                isFiltered: false
            }
        default:
            return state;
    
    }
}