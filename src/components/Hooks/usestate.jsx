import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Usestate() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/useeffect')
    }
    const [count, increseCount] = useState(0);
    const codeString = ` 
    import React, { useState } from 'react'; 
    function Usestate() {
     const [count, increseCount] = useState(0); 
     return (
      <div className='container p-3 bg-light mt-5 rounded'> 
      <h2>React useState Hook</h2> 
      <div className='p-3 fw-bold fs-3'> Count: {count} </div> 
      <button onClick={() => { increseCount(count + 1) }}
       className='btn btn-success'>Increase Count</button> </div> );
    } `;
    return (
        <div className='container p-3 bg-dark mt-5 rounded border border-3'>
            <h2>React useState Hook</h2>
            <ol>
                <li>useState allows you to add state variables to functional components. It's used to hold and manage data that changes over time.</li>
                <li>
                    <dl>
                        <dt><strong>Syntax: </strong></dt>
                        <dd>
                            <ul style={{ listStyle: 'disc' }}>
                                <li className='badge bg-dark p-2'>const[state,setState]=useState(initialState)</li>
                                <li>state: The current state value.</li>
                                <li>setState: A function to update the state.</li>
                                <li>initialState: The initial value of the state.</li>
                            </ul>
                        </dd>
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
            <div className='p-3 fw-bold fs-3'>
                Count: {count}
            </div>
            <button onClick={() => { increseCount(count + 1) }} className='btn btn-success'>Increase Count</button>
            <button className='btn btn-light px-5 fw-bold d-block w-100 m-2' onClick={handleClick}>Click To Next</button>
        </div>
    )
}

export default Usestate
