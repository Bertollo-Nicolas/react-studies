export interface Todo {
    id: string,
    title: string,
    status: boolean,
    category: string
}

export interface TaskPanelState {
    isTaskPanelOpen: boolean;
}