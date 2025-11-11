import React from 'react';
import { useNavigate } from 'react-router-dom';

function CssIntegration() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/redux');
    };
    return (
        <div className="container mt-5">
            <section className="mb-5">
                <h2 className="h4">CSS Integration in React</h2>
                <p>
                    React provides several ways to integrate CSS into your application. Each method has its own advantages and is suited for different use cases.
                </p>
                <ul>
                    <li>
                        <strong>Inline Styling:</strong> Inline styles are written as JavaScript objects with camelCase property names. Ideal for dynamic or small styles.
                    </li>
                    <li>
                        <strong>CSS Modules:</strong> Scoped and modular CSS. Each CSS file is treated as a module, ensuring styles apply only to specific components.
                    </li>
                    <li>
                        <strong>Styled Components:</strong> A library that allows you to write component-level styles using tagged template literals. Best for dynamic styling.
                    </li>
                    <li>
                        <strong>Global Styles:</strong> Standard CSS files imported into components to apply styles globally. Common for base styles and themes.
                    </li>
                </ul>

                <h3 className="h5">Example of Inline Styling</h3>
                <pre className="bg-dark fw-bold">
                    <code>
                        {`
            import React from 'react';

            function InlineStyleExample() {
              const headingStyle = {
                color: 'blue',
                fontSize: '24px',
              };

              return (
                <div>
                  <h1 style={headingStyle}>This is a heading</h1>
                  <p style={{ color: 'gray', fontStyle: 'italic' }}>
                    This is a paragraph with inline styles.
                  </p>
                </div>
              );
            }

            export default InlineStyleExample;
            `}
                    </code>
                </pre>

                <h3 className="h5">Example of CSS Modules</h3>
                <pre className="bg-dark fw-bold">
                    <code>
                        {`
            // Button.module.css
            .btn {
              background-color: blue;
              color: white;
              padding: 10px 20px;
              border: none;
              border-radius: 5px;
            }

            // Button.js
            import React from 'react';
            import styles from './Button.module.css';

            function Button() {
              return <button className={styles.btn}>Click Me</button>;
            }

            export default Button;
            `}
                    </code>
                </pre>

                <h3 className="h5">Example of Styled Components</h3>
                <pre className="bg-dark fw-bold">
                    <code>
                        {`
            import React from 'react';
            import styled from 'styled-components';

            const Button = styled.button\`
              background-color: blue;
              color: white;
              padding: 10px 20px;
              border: none;
              border-radius: 5px;

              &:hover {
                background-color: darkblue;
              }
            \`;

            function StyledButton() {
              return <Button>Click Me</Button>;
            }

            export default StyledButton;
            `}
                    </code>
                </pre>
            </section>

            <button className="btn btn-light px-5 fw-bold d-block w-100 m-2" onClick={handleClick}>Click To Next</button>
        </div>
    );
}

export default CssIntegration;
