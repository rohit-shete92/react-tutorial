import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Useeffect() {
  const navigate = useNavigate();
    const handleClick = () => {
        navigate('/usereducer')
    }
  let codeString = `
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
  return (
    <>
      <div className='container p-3 bg-dark mt-5 rounded border border-3'>
        <h2>React useEffect Hook</h2>
        <ol>
          <li>useEffect is a powerful hook that enables you to handle side effects in functional components efficiently and cleanly, keeping your code organized and responsive to changes.</li>
          <li>Allows you to perform side effects in functional components (e.g., fetching data, subscriptions, manual DOM updates).</li>
          <li>
            <dl>
              <dt>In React DOM Manipulation Is Done Inside The useEffect Hook</dt>
              <dd className='text-muted'>Because useEffect hook in React is executed once the component is fully mounted.</dd>
            </dl>
          </li>

        </ol>
        <span className='badge bg-secondary px-5 py-2 m-2'>Code</span>
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
              {data.title}
            </strong>
          )}
        </div>
        <button className='btn btn-light px-5 fw-bold d-block w-100 m-2' onClick={handleClick}>Click To Next</button>
      </div>
    </>
  )
}

export default Useeffect
