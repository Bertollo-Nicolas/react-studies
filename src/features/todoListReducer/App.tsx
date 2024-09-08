import React from 'react';

import "./app.scss"
import FakeBrowserHader from '@/components/exercices/ui/FakeBrowserHeader';
import DashboardLayout from './components/layout/Dashboard-layout';
import TodoList from './features/todos/components/TodoList';
import AppProvider from './provider';
import CategoryList from './features/categories/components/CategoryList';

export const theme = 'useReducer()';

const App: React.FC = () => {

    return (
        <>
            <AppProvider>
                <div className="app-todo relative bg-gray-100 p-5 text-neutral-950 flex h-screen" >
                <CategoryList />
                    <div className='w-full ml-12'>
                        <DashboardLayout />
                        <TodoList />
                    </div>
                </div>
            </AppProvider>
        </>);
};

export default App;