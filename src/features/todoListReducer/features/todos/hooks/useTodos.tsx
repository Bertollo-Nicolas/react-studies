import { useContext } from "react";
import { TodosContext } from "../stores/contexts/TodosContext";

export const useTodos = () => {
    const context = useContext(TodosContext);
    if (!context) {
        throw new Error(
            `useTodos must be used within a TodosProvider. 
            Ensure that the component calling useTodos is wrapped within a TodosProvider. 
            Component stack: ${new Error().stack}`
        );
    }
    return context;
};