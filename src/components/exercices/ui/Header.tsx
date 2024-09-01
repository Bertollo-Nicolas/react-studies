import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import UseReducer from '../UseReducerInfo';

interface HeaderProps  {
    exercice: string
}

const Header:React.FC<HeaderProps> = ({ exercice }) => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return ( <>
        <div className='content-exercices text-gray-900'>
                <nav className='content-exercices--nav'>
                    <Link className="" to="/">← Return Home</Link>
                </nav>
                
                <div className="header mt-10 mb-10">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Todo List with Multiple Filters</h1>
                </div>
                <button onClick={toggleVisibility}>
                    {isVisible ? 'Hide' : 'Show'} Definition
                </button>
                {isVisible && (
                    <UseReducer />
                )}
                <div className="information bg-gray-300 rounded-xl outline outline-4 outline-offset-2 outline-blue-500 mb-10">
                    <h3 className='text-4xl mt-4 font-bold tracking-tight sm:text-2xl p-4 pt-2'>Exercice</h3>
                    <p className="mt-1 text-md font-bold leading-7 p-4 pt-0 pb-4" >{exercice}</p>
                </div>
            </div>
    </> );
}
 
export default Header;