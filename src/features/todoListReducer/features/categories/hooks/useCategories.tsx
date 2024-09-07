import { useContext } from "react";
import { CategoryContext } from "../stores/contexts/CategoriesContext";

export const useCategories = () => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error(
            `useCategories must be used within a TodosProvider. 
            Ensure that the component calling useCategories is wrapped within a TodosProvider. 
            Component stack: ${new Error().stack}`
        );
    }
    return context;
};