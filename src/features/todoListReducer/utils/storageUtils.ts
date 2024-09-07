export const initializeStorage = (name: string) => {
    try {
        const storedTodos = window.localStorage.getItem(name);
        return storedTodos ? JSON.parse(storedTodos) : { [name]: [] };
    } catch (error) {
        console.error("Failed to load todos from localStorage:", error);
        return { [name]: [] };
    }
};