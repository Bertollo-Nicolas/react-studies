// Definition
export const useReducerDefinition = "useReducer is a React hook that manages state using a reducer function. It’s an alternative to useState for more complex state logic where state transitions depend on the previous state."

// Code Block
export const codeBlockUseReducer = `
import React, { useReducer } from 'react';

type State = { count: number };
type Action = { type: 'increment' | 'decrement' };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
};
`

// Exercices
export const useReducerExercice1 = "Build a todo list application where the user can add, edit, delete, and filter todos by their status (completed, active, all). Use useReducer to manage the state of the todos and the active filter. Ensure that the app is capable of handling multiple todos and persists the filter and todo state across component re-renders."