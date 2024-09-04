import React from 'react';
import TodosProvider from './stores/contexts/TodosContext';


const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <TodosProvider>
            {children}
        </TodosProvider>
    );
};

export default AppProvider;
