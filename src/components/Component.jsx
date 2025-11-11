import React from 'react';
import { useNavigate } from 'react-router-dom';

function Components() {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate('/stateprop')
  }
  return (
    <div className="container mt-5">
      <section className="mb-5">
        <h2 className="h4">What are Class Components in React?</h2>
        <p>
          Class components are one of the foundational ways to define React components. They use ES6 classes 
          and include a built-in state object and lifecycle methods.
        </p>
        <ul>
          <li>Extend the <code>React.Component</code> class</li>
          <li>Support a state object to manage data</li>
          <li>Provide access to lifecycle methods like <code>componentDidMount</code> and <code>componentDidUpdate</code></li>
        </ul>
        <h3 className="h5">Lifecycle Methods in Class Components</h3>
        <ul>
          <li>
            <strong>componentDidMount:</strong> Called once the component is mounted (inserted into the DOM). Commonly used for API calls.
          </li>
          <li>
            <strong>componentDidUpdate:</strong> Invoked when the component updates due to changes in props or state.
          </li>
          <li>
            <strong>componentWillUnmount:</strong> Triggered just before the component is removed from the DOM. Used for cleanup tasks.
          </li>
        </ul>
        <h3 className="h5">Example of a Class Component</h3>
        <pre className='bg-dark fw-bold'>
          <code>
            {`
            import React, { Component } from 'react';

            class Welcome extends Component {
              constructor(props) {
                super(props);
                this.state = { count: 0 };
              }

              componentDidMount() {
                console.log('Component mounted');
              }

              componentDidUpdate() {
                console.log('Component updated');
              }

              componentWillUnmount() {
                console.log('Component will unmount');
              }

              increment = () => {
                this.setState({ count: this.state.count + 1 });
              };

              render() {
                return (
                  <div>
                    <h1>Welcome, {this.props.name}</h1>
                    <p>Count: {this.state.count}</p>
                    <button onClick={this.increment}>Increment</button>
                  </div>
                );
              }
            }

            export default Welcome;
            `}
          </code>
        </pre>
      </section>

      <section className="mb-5">
        <h2 className="h4">What are Function Components in React?</h2>
        <p>
          Function components are simpler, more concise components that rely on hooks to manage state and 
          lifecycle methods. They are the preferred way to write React components in modern applications.
        </p>
        <ul>
          <li>Simple JavaScript functions</li>
          <li>Use React hooks like <code>useState</code> and <code>useEffect</code> for state and lifecycle management</li>
          <li>Easier to read, write, and test</li>
        </ul>
        <h3 className="h5">Lifecycle Emulation in Function Components</h3>
        <ul>
          <li>
            <strong>useEffect:</strong> Combines the behavior of <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code>.
          </li>
        </ul>
        <h3 className="h5">Example of a Function Component</h3>
        <pre className='bg-dark fw-bold'>
          <code>
            {`
            import React, { useState, useEffect } from 'react';

            function Welcome({ name }) {
              const [count, setCount] = useState(0);

              useEffect(() => {
                console.log('Component mounted or updated');

                return () => {
                  console.log('Component will unmount');
                };
              }, [count]); // Dependency array controls when this runs

              return (
                <div>
                  <h1>Welcome, {name}</h1>
                  <p>Count: {count}</p>
                  <button onClick={() => setCount(count + 1)}>Increment</button>
                </div>
              );
            }

            export default Welcome;
            `}
          </code>
        </pre>
      </section>

      <section className="mb-5">
        <h2 className="h4">Class Components vs Function Components</h2>
        <ul>
          <li>
            <strong>Simplicity:</strong> Function components are simpler and shorter compared to class components.
          </li>
          <li>
            <strong>State and Lifecycle:</strong> Class components use state and lifecycle methods, while function components use hooks.
          </li>
          <li>
            <strong>Performance:</strong> Function components may offer better performance due to fewer abstractions.
          </li>
          <li>
            <strong>Preferred Choice:</strong> Modern React favors function components because of hooks and easier maintenance.
          </li>
        </ul>
      </section>
      <button className='btn btn-light px-5 fw-bold d-block w-100 m-2' onClick={handleClick}>Click To Next</button>
    </div>
  );
}

export default Components;
