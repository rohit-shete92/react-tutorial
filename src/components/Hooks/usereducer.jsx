import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Usereducer() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/useref')
    }
    let codeString = `
    function reducer(state, action) {
        switch(action.type) {
            case "Increment":
                return state + 1;
            case "Decrement":
                return state - 1;
            default:  
                return state;
        }
    }
    
    const [state, dispatch] = useReducer(reducer, 0);

    <button onClick={()=>{dispatch({type: "Increment"})}}>Increment</button>
        <div>
            Count: {state}
        </div>
    <button onClick={()=>{dispatch({type: "Decrement"})}}>Decrement</button>
    `;
    function reducer(state, action) {
        switch (action.type) {
            case "Increment":
                return state + 1;
            case "Decrement":
                return state - 1;
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div className='container p-3 bg-dark mt-5 rounded border border-3'>
            <h2>React useReducer Hook</h2>
            <ol>
                <li>The useReducer hook is a part of React that is used to manage more complex state logic than useState can handle.</li>
                <li>
                    <strong>Syntax: </strong>
                    <dl>
                        <dt style={{wordBreak: 'break-word'}}>const[state,dispatch]=useReducer(reducer,initialState)</dt>
                        <dd><strong>state:</strong> Represents the current state managed by the reducer.</dd>
                        <dd><strong>dispatch:</strong> A function used to send actions to the reducer to update the state.</dd>
                        <dd><strong>useReducer(reducer, initialState):</strong> Initializes the state with initialState and uses the <strong>reducer</strong> function to handle state updates based on dispatched actions.</dd>
                    </dl>
                </li>
            </ol>
            <span className='badge bg-secondary px-5 py-2 m-2'>Code</span>
            <pre className='fw-bold text-primary p-3 bg-black'>
                <code>
                    {codeString}
                </code>
            </pre>
            <hr className='border border-5 border-danger' />
            <span className='badge bg-secondary px-5 py-2 m-2'>Output</span>
            <div className='p-3 fw-bold fs-3 bg-dark text-white rounded'>
                <button className='btn btn-primary' onClick={() => { dispatch({ type: "Increment" }) }}>Increment</button>
                <div>
                    Count: {state}
                </div>
                <button className='btn btn-primary' onClick={() => { dispatch({ type: "Decrement" }) }}>Decrement</button>
            </div>
            <button className='btn btn-light px-5 fw-bold d-block w-100 m-2' onClick={handleClick}>Click To Next</button>
        </div>
    )
}