import React from 'react';

import "./app.scss"
import Header from '@/components/exercices/ui/Header';
import { useReducerExercice1 } from '@/lib/constant';
import FakeBrowserHader from '@/components/exercices/ui/FakeBrowserHeader';
import DashboardLayout from './components/layout/Dashboard-layout';
import TodoList from './components/dashboard/TodoList';
import AppProvider from './provider';

export const theme = 'useReducer()';

const App: React.FC = () => {

    return (
        <>
            <AppProvider>
                <Header exercice={useReducerExercice1} />
                <div className="content-exercice pt-8 roboto-medium w-5/6 mx-auto mb-10 drop-shadow-md">
                    <FakeBrowserHader />
                    <div className="app-todo relative bg-gray-100 p-5 text-neutral-950" style={{height: "600px"}}>
                        <DashboardLayout />
                        <TodoList />
                    </div>
                </div>
            </AppProvider>
        </>);
};

export default App;
