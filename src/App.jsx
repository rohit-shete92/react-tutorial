import React, {useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'aos/dist/aos.css'
import AOS from 'aos'
import ThemeContext from './components/Hooks/createcontext'
import './App.css'
import Introduction from './components/Introduction'
import Setup from './components/Reactsetup'
import Components from './components/Component'
import StateProp from './components/StateProp'
import Usestate from './components/Hooks/usestate'
import Useeffect from './components/Hooks/useeffect'
import Usereducer from './components/Hooks/usereducer'
import Useref from './components/Hooks/useref'
import Usememo from './components/Hooks/usememo'
import Apicontext from './components/Hooks/apicontext'
import Home from './components/Home'
import CssIntegration from './components/CssIntegration'
import Redux from './components/Redux'
import Usecallback from './components/Hooks/usecallback'

function App() {
  AOS.init();
  let Refrance = useRef(null);
  let date = new Date();
  useEffect(() => {
    Refrance.current.innerHTML = date.getFullYear();
  }, []);
  const [theme, setTheme] = useState('light');
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Router>
          <header>
            <h1 className='text-center fw-bold'>REACT TUTORIAL</h1>
          </header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border border-1">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">React</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/introduction" className="nav-link">Introduction</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/setup" className="nav-link">Setup</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/component" className="nav-link">Component</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/stateprop" className="nav-link">Prop-State</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/cssintegration" className="nav-link">CSS Integration</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/redux" className="nav-link">Redux</NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Hook
                    </NavLink>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <li><NavLink className="dropdown-item" to="/usestate">useState</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/useeffect">useEffect</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/usereducer">useReducer</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/useref">useRef</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/usememo">useMemo</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/usecontext">useContext</NavLink></li>
                      <li><NavLink className="dropdown-item" to="/usecallback">useCallback</NavLink></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <main>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/introduction' element={<Introduction />} />
              <Route path='/setup' element={<Setup />} />
              <Route path='/component' element={<Components />} />
              <Route path='/stateprop' element={<StateProp />} />
              <Route path='/usestate' element={<Usestate />} />
              <Route path='/useeffect' element={<Useeffect />} />
              <Route path='/usereducer' element={<Usereducer />} />
              <Route path='/useref' element={<Useref />} />
              <Route path='/usememo' element={<Usememo />} />
              <Route path='/usecallback' element={<Usecallback />} />
              <Route path='/usecontext' element={<Apicontext />} />
              <Route path='/cssintegration' element={<CssIntegration/>}/>
              <Route path='/redux' element={<Redux />}/>
            </Routes>
          </main>
          <footer className='p-3 text-center fw-bold' style={{ backgroundColor: '#222' }}>
            Copyright: &copy;<span ref={Refrance}></span> Reaserved By AvisTech.
          </footer>
        </Router>
      </ThemeContext.Provider>
    </>
  )
}

export default App
