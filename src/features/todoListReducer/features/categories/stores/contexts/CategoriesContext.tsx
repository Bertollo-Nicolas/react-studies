import React, { createContext, useEffect, useReducer } from 'react';

import { initializeStorage } from '@/features/todoListReducer/utils/storageUtils';
import { Action, categoriesReducer } from '../reducers/CategoriesReducer';
import { Category } from '../../../todos/interfaces/interfaces';

type State = { categories: Category[] };
type CategoryContextType = {
    state: State;
    dispatch: React.Dispatch<Action>;
};

export const  CategoryContext = createContext< CategoryContextType | undefined>(undefined);

const  CategoryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(categoriesReducer, initializeStorage('categories'));

    useEffect(() => {
        try {
            const storedCategories = window.localStorage.getItem('categories');
            if (storedCategories) {
                dispatch({ type: 'INIT_CAT', payload: JSON.parse(storedCategories) });
            }
        } catch (error) {
            console.error("Failed to load categories from localStorage:", error);
        }
    }, []);

    useEffect(() => {
        window.localStorage.setItem('categories', JSON.stringify(state));
    }, [state]);

    return (
        <CategoryContext.Provider value={{ state, dispatch }}>
            {children}
        </CategoryContext.Provider>
    );
};

export default CategoryProvider;