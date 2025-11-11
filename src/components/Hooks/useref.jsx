import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Useref() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/usememo')
    }
    let codeString1 = `
    let refrances = useRef(null);
    useEffect(() => {
        refrances.current.classList.add('animate');
    });
    `;
    let codeString2 = `
    const [count, setCount] = useState(0);
    const prevCount = useRef(count);

    useEffect(() => {
        prevCount.current = count;
    });
    `;
    let refrances = useRef(null);
    useEffect(() => {
        refrances.current.classList.add('animate');
    });

    const [count, setCount] = useState(0);
    const prevCount = useRef(count);

    useEffect(() => {
        prevCount.current = count;
    });
    return (
        <div className='container p-3 bg-dark mt-5 rounded border border-3'>
            <h2>React useRef Hook</h2>
            <ol>
                <li><strong>Defination: </strong></li>
                <ul style={{ listStyle: 'disc' }}>
                    <li>useRef is a Hook provided by React that returns a mutable object with a .current property. This property can hold any value, similar to a container.</li>
                </ul>
                <li><strong>Syntax: </strong></li>
                <ul style={{ listStyle: 'disc' }}>
                    <li><code className='fw-bold'>const refContainer = useRef(initialValue);</code></li>
                </ul>
                <li>Primary Use Cases</li>
                <ul style={{ listStyle: 'disc' }}>
                    <li>Accessing DOM Elements: useRef is commonly used to directly access and manipulate DOM elements.</li>
                    <li>Storing Mutable Values: It can store mutable values that don't trigger re-renders when updated.</li>
                    <li><strong>Keeping Values Persistent: Values in a useRef object persist across re-renders.</strong>:-  means that the value stored in the <strong>.current</strong> property of a useRef object remains unchanged even when a React component re-renders.</li>
                </ul>
            </ol>
            <span className='badge bg-secondary px-5 py-2 m-2'>Code</span>
            <pre className='fw-bold text-primary p-3 bg-black'>
                <code>
                    <div>
                        <span className='text-success'>/Accessing DOM Element By useRef Hook.</span>
                        {codeString1}
                    </div>
                    <br />
                    <div>
                    <span className='text-success'>/Storing Previous Value.</span>
                        {codeString2}
                    </div>
                </code>
            </pre>
            <hr className='border border-5 border-danger' />
            <span className='badge bg-secondary px-5 py-2 m-2'>Output</span>
            <strong className='d-block mt-3'>[1] Accessing DOM Element By useRef Hook.</strong>
            <div className='p-3 fw-bold fs-3'>
                <p ref={refrances}>This Paragraph Element Style Is Changed By Using useRef Hook.</p>
            </div>
            <strong className='d-block mt-3'>[2] Storing Previous Value.</strong>
            <div>
                <div className='d-flex'>
                    <p>Current: {count}</p>
                    <p className='mx-5'>Previous: {prevCount.current}</p>
                </div>
                <button onClick={() => setCount(count + 1)} className='btn btn-success'>Increment</button>
            </div>
            <button className='btn btn-light px-5 fw-bold d-block w-100 m-2' onClick={handleClick}>Click To Next</button>
        </div>
    )
}
