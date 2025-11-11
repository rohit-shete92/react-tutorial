import React from 'react';
import { useNavigate } from 'react-router-dom';

function Redux() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/usestate');
    };

    return (
        <div className="container mt-5">
            <section className="mb-5">
                <h2 className="h4">Redux in React</h2>
                <p>
                    Redux is a popular state management library for JavaScript applications. It helps manage application state in a predictable way, making it easier to debug and maintain large applications.
                </p>
                <h3 className="h5">Core Principles of Redux</h3>
                <ul>
                    <li>
                        <strong>Single Source of Truth:</strong> The state of the application is stored in a single JavaScript object called the store.
                    </li>
                    <li>
                        <strong>State is Read-Only:</strong> The only way to change the state is by dispatching an action, which describes what should change.
                    </li>
                    <li>
                        <strong>Pure Functions:</strong> Reducers, which update the state, are pure functions that take the current state and an action as input and return the new state.
                    </li>
                </ul>

                <h3 className="h5">Key Components of Redux</h3>
                <ul>
                    <li>
                        <strong>Store:</strong> The central repository that holds the state of the application.
                    </li>
                    <li>
                        <strong>Actions:</strong> Plain JavaScript objects that describe the intention to change the state.
                    </li>
                    <li>
                        <strong>Reducers:</strong> Pure functions that specify how the state changes in response to actions.
                    </li>
                    <li>
                        <strong>Middleware:</strong> Optional extensions that allow you to handle asynchronous logic like API calls.
                    </li>
                </ul>

                <h3 className="h5">Basic Redux Workflow</h3>
                <ol>
                    <li>Define the initial state of the application.</li>
                    <li>Create actions that represent state changes.</li>
                    <li>Write reducers to specify how the state changes based on actions.</li>
                    <li>Set up the Redux store with <code>createStore</code> or <code>configureStore</code> from Redux Toolkit.</li>
                    <li>Use the <code>Provider</code> component from <code>react-redux</code> to make the store accessible to React components.</li>
                    <li>Access and modify the state using <code>useSelector</code> and <code>useDispatch</code> hooks.</li>
                </ol>

                <h3 className="h5">Example of Redux Setup</h3>
                <pre className="bg-dark fw-bold">
                    <code>
                        {`
            // actions.js
            export const increment = () => ({ type: 'INCREMENT' });
            export const decrement = () => ({ type: 'DECREMENT' });

            // reducer.js
            const initialState = { count: 0 };

            const counterReducer = (state = initialState, action) => {
              switch (action.type) {
                case 'INCREMENT':
                  return { count: state.count + 1 };
                case 'DECREMENT':
                  return { count: state.count - 1 };
                default:
                  return state;
              }
            };

            export default counterReducer;

            // store.js
            import { createStore } from 'redux';
            import counterReducer from './reducer';

            const store = createStore(counterReducer);
            export default store;

            // App.js
            import React from 'react';
            import { Provider } from 'react-redux';
            import store from './store';
            import Counter from './Counter';

            function App() {
              return (
                <Provider store={store}>
                  <Counter />
                </Provider>
              );
            }

            export default App;

            // Counter.js
            import React from 'react';
            import { useSelector, useDispatch } from 'react-redux';
            import { increment, decrement } from './actions';

            function Counter() {
              const count = useSelector((state) => state.count);
              const dispatch = useDispatch();

              return (
                <div>
                  <h1>Count: {count}</h1>
                  <button onClick={() => dispatch(increment())}>Increment</button>
                  <button onClick={() => dispatch(decrement())}>Decrement</button>
                </div>
              );
            }

            export default Counter;
            `}
                    </code>
                </pre>
            </section>

            <button
                className="btn btn-light px-5 fw-bold d-block w-100 m-2"
                onClick={handleClick}
            >
                Click To Next
            </button>
        </div>
    );
}

export default Redux;
