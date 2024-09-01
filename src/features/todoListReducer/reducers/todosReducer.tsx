import { Todo } from "../interfaces/interfaces";

type State = { todos: Todo[] }
type Action = 
    | { type: 'ADD_TODO'; payload: string}
    | { type: 'UPDATE_TODO'; payload: { id: string, title: string } }
    | { type: 'DELETE_TODO'; payload: string }
    | { type: 'INIT_TODOS'; payload: State  }

export const todosReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
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
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id ? { ...todo, title: action.payload.title } : todo
                )
            };
        case 'DELETE_TODO':
            return {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            };
        case 'INIT_TODOS':
            return {
                todos: action.payload.todos
            };
        default:
            return state;
    }
}