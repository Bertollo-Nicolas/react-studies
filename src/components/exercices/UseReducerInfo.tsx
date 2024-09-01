import React from 'react';
import { Link } from 'react-router-dom';
import { Highlight, themes } from "prism-react-renderer"
import { codeBlockUseReducer } from '@/lib/constant';

const UseReducer: React.FC = () => {

    return(
        <>
            <div className="information bg-gray-300 rounded-xl outline outline-4 outline-offset-2 outline-blue-500 mb-10">
                <h3 className='text-4xl mt-4 font-bold tracking-tight sm:text-2xl p-4 pt-2'>UseReducer()</h3>
                <p className="mt-1 text-md font-bold leading-7 p-4 pt-0 pb-4" >useReducer is a React hook that manages state using a reducer function. It’s an alternative to useState for more complex state logic where state transitions depend on the previous state.</p>
                <Link className="mt-0 text-md font-bold leading-7 underline p-4" target="_blank" to="https://fr.react.dev/reference/react/useReducer">Doc</Link>
            </div>
            <Highlight
                theme={themes.okaidia}
                code={codeBlockUseReducer}
                language="tsx"
            >
                {({ style, tokens, getTokenProps }) => (
                <pre style={style} className="pl-5 rounded-xl mb-10">
                    {tokens.map((line, i) => (
                    <div key={i}>
                        {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token })} />
                        ))}
                    </div>
                    ))}
                </pre>
                )}
            </Highlight>
        </>
    )
};

export default UseReducer;