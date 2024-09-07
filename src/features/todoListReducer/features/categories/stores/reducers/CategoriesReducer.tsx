import { Category } from "@/features/todoListReducer/features/todos/interfaces/interfaces";


type State = { 
    categories: Category[],
}
export type Action = 
    | { type: 'ADD_CAT'; 
        payload: {
            title: string, 
            category: string, 
            color?: string, 
            icon?: string
        }
    }
    | { type: 'INIT_CAT'; payload: State  }


export const categoriesReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'ADD_CAT':
            return {
                ...state,
                categories: [
                    ...state.categories,
                    {
                        id: Date.now().toString(),
                        title: action.payload.title,
                        icon: action.payload.icon,
                        color: action.payload.color
                    }
                ]
            };
        case 'INIT_CAT':
            return {
                ...state,
                categories: Array.isArray(action.payload.categories) ? action.payload.categories : [],
            };
        default:
            return state;
    
    }
}