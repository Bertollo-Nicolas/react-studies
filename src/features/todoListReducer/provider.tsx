import React from 'react';
import TodosProvider from './features/todos/stores/contexts/TodosContext';
import CategoryProvider from './features/categories/stores/contexts/CategoriesContext';


const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <TodosProvider>
            <CategoryProvider>
                {children}
            </CategoryProvider>
        </TodosProvider>
    );
};

export default AppProvider;
