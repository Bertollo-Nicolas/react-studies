export const initializeTodos = () => {
    try {
        const storedTodos = window.localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : { todos: [] };
    } catch (error) {
        console.error("Failed to load todos from localStorage:", error);
        return { todos: [] };
    }
};