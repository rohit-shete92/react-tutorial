import React, { useState, useEffect, useCallback } from 'react'

function Usecallback() {
    let codeString = `
  const memoizedCallback = useCallback(() => {
    // Function logic
    doSomething(a, b);
  }, [a, b]);
  `;

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(function () {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then(result => {
                setData(result);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    const handleClick = useCallback(() => {
        if (data && data.title) {
            alert("Button clicked with data:", data.title);
        } else {
            alert("No data available yet.");
        }
    }, [data]);

    return (
        <>
            <div className='container p-3 bg-dark mt-5 rounded border border-3'>
                <h2>React useCallback Hook</h2>
                <ol>
                    <li>
                        <strong>useCallback</strong> is a hook used to memoize functions. It ensures the function reference remains the same between renders unless its dependencies change.
                    </li>
                    <li>
                        This optimization is useful when passing callbacks to child components, particularly if they rely on reference equality to prevent unnecessary re-renders.
                    </li>
                    <li>
                        <dl>
                            <dt>When to Use:</dt>
                            <dd className='text-muted'>
                                Use <strong>useCallback</strong> to memoize functions that are passed as props to child components or used in event listeners.
                            </dd>
                        </dl>
                    </li>
                </ol>
                <span className='badge bg-secondary px-5 py-2 m-2'>Syntax</span>
                <pre className='fw-bold text-primary p-3 bg-black'>
                    <code>{codeString}</code>
                </pre>

                <div>
                    <h3>Data Fetched</h3>
                    <hr className='border border-5 border-danger' />
                    <span className='badge bg-secondary px-5 py-2 m-2'>Output</span>
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        <strong className='bg-dark p-3 text-white d-block rounded'>
                            {data.title}
                        </strong>
                    )}
                    <button className="btn btn-primary mt-3" onClick={handleClick}>Log Data</button>
                </div>
            </div>
        </>
    )
}

export default Usecallback
