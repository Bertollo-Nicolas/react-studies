import React from 'react';
import TodosProvider from './features/todos/stores/contexts/TodosContext';


const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <TodosProvider>
            {children}
        </TodosProvider>
    );
};

export default AppProvider;
