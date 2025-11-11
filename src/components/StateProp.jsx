import React from 'react';

function StateProp() {
  return (
    <div className="container mt-5">
      <section className="mb-5">
        <h2 className="h4">What is State in React?</h2>
        <p>
          State is a built-in object in React that allows components to store and manage dynamic data that can change over time. 
          State is mutable and is used primarily in class components or with hooks in function components.
        </p>
        <ul>
          <li>
            <strong>Private:</strong> State is local to the component and cannot be accessed by other components directly.
          </li>
          <li>
            <strong>Managed Internally:</strong> Changes to state trigger re-rendering of the component.
          </li>
          <li>
            <strong>Example:</strong> Managing user input, toggling views, or updating counters.
          </li>
        </ul>
        <h3 className="h5">Example of State in a Function Component</h3>
        <pre className='bg-dark fw-bold'>
          <code>
            {`
            import React, { useState } from 'react';

            function Counter() {
              const [count, setCount] = useState(0); // Initialize state with useState

              const increment = () => setCount(count + 1);

              return (
                <div>
                  <p>Count: {count}</p>
                  <button onClick={increment}>Increment</button>
                </div>
              );
            }

            export default Counter;
            `}
          </code>
        </pre>
      </section>

      <section className="mb-5">
        <h2 className="h4">What are Props in React?</h2>
        <p>
          Props (short for properties) are used to pass data from a parent component to a child component. Props are immutable 
          and help make components reusable by allowing them to accept dynamic inputs.
        </p>
        <ul>
          <li>
            <strong>Read-Only:</strong> Props cannot be modified by the child component.
          </li>
          <li>
            <strong>Reusable:</strong> Enable components to be dynamic and reusable by passing different props.
          </li>
          <li>
            <strong>Example:</strong> Displaying user details, passing configuration options, etc.
          </li>
        </ul>
        <h3 className="h5">Example of Props in a Function Component</h3>
        <pre className='bg-dark fw-bold'>
          <code>
            {`
            import React from 'react';

            function Greeting({ name }) { // Destructure props
              return <h1>Hello, {name}!</h1>;
            }

            function App() {
              return (
                <div>
                  <Greeting name="Avinash" /> {/* Passing props */}
                  <Greeting name="John" />
                </div>
              );
            }

            export default App;
            `}
          </code>
        </pre>
      </section>

      <section className="mb-5">
        <h2 className="h4">State Lifting in React</h2>
        <p>
          State lifting is a technique where the state is moved up to a common ancestor component to allow multiple child 
          components to share the same state. This is useful when two or more child components need to communicate or 
          synchronize their data.
        </p>
        <h3 className="h5">Example of State Lifting</h3>
        <pre className='bg-dark fw-bold'>
          <code>
            {`
            import React, { useState } from 'react';

            function Child({ count, onIncrement }) {
              return (
                <div>
                  <p>Count in Child: {count}</p>
                  <button onClick={onIncrement}>Increment</button>
                </div>
              );
            }

            function Parent() {
              const [count, setCount] = useState(0);

              const increment = () => setCount(count + 1);

              return (
                <div>
                  <h1>State Lifting Example</h1>
                  <p>Count in Parent: {count}</p>
                  <Child count={count} onIncrement={increment} />
                </div>
              );
            }

            export default Parent;
            `}
          </code>
        </pre>
        <p>
          In this example:
          <ul>
            <li>The <strong>state</strong> (<code>count</code>) is managed in the <code>Parent</code> component.</li>
            <li>The <code>Child</code> component receives the current count and the <code>increment</code> function as props.</li>
            <li>Both the parent and child components share the same state, allowing synchronized updates.</li>
          </ul>
        </p>
      </section>

      <section className="mb-5">
        <h2 className="h4">Difference Between State and Props</h2>
        <ul>
          <li>
            <strong>Mutability:</strong> 
            <ul>
              <li>State is mutable and managed within the component.</li>
              <li>Props are immutable and passed from parent to child.</li>
            </ul>
          </li>
          <li>
            <strong>Scope:</strong> 
            <ul>
              <li>State is local to the component.</li>
              <li>Props are used for communication between components.</li>
            </ul>
          </li>
          <li>
            <strong>Usage:</strong> 
            <ul>
              <li>State is used to manage dynamic data within a component.</li>
              <li>Props are used to pass data and configurations to child components.</li>
            </ul>
          </li>
          <li>
            <strong>Triggering Re-renders:</strong> 
            <ul>
              <li>Changes in state trigger a re-render of the component.</li>
              <li>Changes in props trigger a re-render of the child component.</li>
            </ul>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default StateProp;
