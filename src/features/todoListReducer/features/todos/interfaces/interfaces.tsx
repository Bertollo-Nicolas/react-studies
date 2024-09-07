export interface Todo {
    id: string,
    title: string,
    status: boolean,
    category: string
}

export interface Category {
    id: string,
    title: string,
    icon?: string,
    color?: string 
}

export interface TaskPanelState {
    isTaskPanelOpen: boolean;
}