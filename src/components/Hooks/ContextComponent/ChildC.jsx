import React,{useContext} from 'react'
import ThemeContext from '../createcontext'

function ChildC() {
    const {theme,setTheme} = useContext(ThemeContext);
    function handleClick(){
        if(theme === 'light'){
            setTheme('dark');
        }else{
            setTheme('light');
        }
    }
  return (
    <div>
        <div className="componentc border border-3 d-flex align-items-center justify-content-center p-5" style={{backgroundColor: theme==='light'?'beige':'black'}}>
            <button className='btn btn-danger' onClick={handleClick}>Change Theme &#123;{theme}&#125;</button>
        </div>
    </div>
  )
}

export default ChildC
