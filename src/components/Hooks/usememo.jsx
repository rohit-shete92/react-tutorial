import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';

function Usememo() {
  const navigate = useNavigate();
    const handleClick = () => {
        navigate('/usecontext')
    }
  let codeString = `
  const memoizedValue = useMemo(() => {
    // Expensive computation or derived state
    return computeExpensiveValue(a, b);
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

  const expensiveComputation = useMemo(() => {
    return data.title ? data.title.toUpperCase() : "No Data";
  }, [data]);

  return (
    <>
      <div className='container p-3 bg-dark mt-5 rounded border border-3'>
        <h2>React useMemo Hook</h2>
        <ol>
          <li>
            <strong>useMemo</strong> is a hook used to memoize values. It helps in optimizing performance by caching expensive computations or derived state that depend on certain inputs.
          </li>
          <li>
            It ensures the function runs only when dependencies change, preventing unnecessary recalculations.
          </li>
          <li>
            <dl>
              <dt>When to Use:</dt>
              <dd className='text-muted'>
                Use <strong>useMemo</strong> to memoize results of expensive calculations, especially in cases where rendering or state updates could trigger redundant computations.
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
          <hr className='border border-5 border-danger'/>
          <span className='badge bg-secondary px-5 py-2 m-2'>Output</span>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <strong className='bg-dark p-3 text-white d-block rounded'>
              {expensiveComputation}
            </strong>
          )}
        </div>
        <button className='btn btn-light px-5 fw-bold d-block w-100 m-2' onClick={handleClick}>Click To Next</button>
      </div>
    </>
  )
}

export default Usememo
