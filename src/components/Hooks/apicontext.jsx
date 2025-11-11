import React from 'react'
import ChildA from './ContextComponent/ChildC'
import { useNavigate } from 'react-router-dom';

export default function Apicontext(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/usecallback')
    }
    let codeString = `
    //Create Context Object
    import  { createContext } from 'react';
    
    const ThemeContext = createContext();
    export default ThemeContext;
    
    //Parent component&
    import ThemeContext from './Component/createcontext'

        const [theme, setTheme] = useState('light');
        <ThemeContext.Provider value={{theme,setTheme}}>;
            //Wrape Child Component;
        </ThemeContext.Provider>   

    //Child Component Where to use useContext
    import React,{useContext} from 'react'
    import ThemeContext from '../createcontext'

    const {theme,setTheme} = useContext(ThemeContext);
    function handleClick(){
        if(theme === 'light'){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }

    <div>
        <div className="componentc border border-3 d-flex align-items-center justify-content-center" style={{backgroundColor: theme==='light'?'beige':'black'}}>
            <button className='btn btn-danger' onClick={handleClick}>Change Theme &#123;{theme}&#125;</button>
        </div>
    </div>
    `;
    return (
        <div className='container p-3 bg-dark mt-5 rounded border border-3'>
            <h2>React useContext Hook</h2>
            <ol>
                <li>It Is Used To <strong>Avoide Prop Drilling</strong>.</li>
                <li><strong>Steps to Use Context API in React: </strong></li>
                <ul style={{ listStyle: 'square' }}>
                    <li>
                        <dl>
                            <dt>Create a context:</dt>
                            <dd>Use React.createContext() to create a context object.</dd>
                            <dd><code className='bg-dark text-white p-2 d-block'>const MyContext = React.createContext();</code></dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>Provide Context Value</dt>
                            <dd>Wrap your components with the Provider component and pass the context value using the value prop.</dd>
                            <dd>
                                <code className='bg-dark text-white p-2 d-block'>
                                    &lt;MyContext.Provider value="some value"&gt;
                                    &lt;App /&gt;
                                    &lt;/MyContext.Provider&gt;
                                </code>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>Consume Context Value</dt>
                            <dd>Using useContext Hook.</dd>
                            <dd>
                                <code className='bg-dark text-white p-2 d-block' style={{ whiteSpace: 'pre-wrap' }}>
                                    import &#123;useContext&#125; from 'react';
                                    const value = useContext(MyContext);
                                </code>
                            </dd>
                        </dl>
                    </li>
                </ul>
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
                <ChildA />
            </div>
            <button className='btn btn-light px-5 fw-bold d-block w-100 m-2' onClick={handleClick}>Click To Next</button>
        </div>
    )
}
