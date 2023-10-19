import React, {useReducer} from 'react';

function UseReducerComponent(props) {

    function reducer(state, action){
        switch (action.type) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            default:
                throw new Error();
        }
    }
    const [state, dispatch] = useReducer(reducer, 0)
    return (
        <div>
            <h1>UseReducer</h1>
            <div>The "useReducer" Hook is similar to the useState Hook.</div>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <div>
                {state}
            </div>
        </div>
    );
}

export default UseReducerComponent;