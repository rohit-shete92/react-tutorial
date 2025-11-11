import React from 'react';
import { useNavigate } from 'react-router-dom';
function Setup() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/component');
  };
  return (
    <div className="container mt-5">
      <section className="mb-5">
        <h2 className="h4">What is create-react-app?</h2>
        <p>
          Create React App (CRA) is an officially supported way to set up a new React application. It provides a
          ready-to-use development environment with zero configuration.
        </p>
        <ul>
          <li>Official tool by the React team</li>
          <li>Includes Webpack, Babel, and ESLint pre-configured</li>
          <li>Best suited for beginners starting with React</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h4">What is Vite?</h2>
        <p>
          Vite is a modern build tool that provides a faster and optimized development environment for React and other frameworks.
          It leverages native ES modules and offers blazing-fast performance.
        </p>
        <ul>
          <li>Builds faster with optimized output</li>
          <li>Features instant server startup using native ES modules</li>
          <li>Supports Hot Module Replacement (HMR) for quick updates</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h4">Steps to Create a React App</h2>

        <h3 className="h5">Using Create React App:</h3>
        <ul>
          <li>
            <strong>Initialize the project:</strong>
            <code>npx create-react-app app-name</code>
            <br />
            This command generates a new React project with a pre-configured setup.
          </li>
          <li>
            <strong>Navigate to the project folder:</strong>
            <code>cd app-name</code>
            <br />
            Changes the directory to the newly created React app.
          </li>
          <li>
            <strong>Start the development server:</strong>
            <code>npm start</code>
            <br />
            Launches the React development server and opens the app in your browser.
          </li>
        </ul>

        <h3 className="h5">Using Vite:</h3>
        <ul>
          <li>
            <strong>Step 1:</strong> Open your terminal.
          </li>
          <li>
            <strong>Step 2:</strong> Run the command:
            <code>npm create vite@latest</code>
            <br />
            Initializes a new Vite project.
          </li>
          <li>
            <strong>Step 3:</strong> Follow the prompts:
            <ul>
              <li><strong>Enter Project Name:</strong> Provide a name for your project.</li>
              <li><strong>Select Framework:</strong> Choose <code>React</code>.</li>
              <li><strong>Select Variant:</strong> Choose <code>JavaScript</code>.</li>
            </ul>
          </li>
          <li>
            <strong>Step 4:</strong> Navigate to your project folder:
            <code>cd project_name</code>
          </li>
          <li>
            <strong>Step 5:</strong> Install dependencies:
            <code>npm i</code>
          </li>
          <li>
            <strong>Step 6:</strong> Start the development server:
            <code>npm run dev</code>
            <br />
            Launches the Vite development server with Hot Module Replacement (HMR).
          </li>
        </ul>
      </section>

      <section>
        <h2 className="h4">Key Differences Between create-react-app and Vite</h2>
        <ul>
          <li>
            <strong>Performance:</strong> Vite offers faster builds and server startup compared to CRA.
          </li>
          <li>
            <strong>Customization:</strong> CRA is zero-config, while Vite allows greater flexibility for advanced setups.
          </li>
          <li>
            <strong>Bundle Size:</strong> Vite often produces smaller bundles due to its optimized architecture.
          </li>
          <li>
            <strong>Development Experience:</strong> Vite's Hot Module Replacement (HMR) is faster and more efficient.
          </li>
          <li>
            <strong>Popularity:</strong> CRA is widely adopted and beginner-friendly; Vite is quickly gaining traction for modern projects.
          </li>
        </ul>
      </section>
      <button className='btn btn-light px-5 fw-bold d-block w-100 m-2' onClick={handleClick}>Click To Next</button>
    </div>
  );
}

export default Setup;
