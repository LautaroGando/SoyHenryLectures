import './App.css'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Home from './views/Home/Home'
import Contact from './views/Contact/Contact'
import Register from './views/Register/Register'
import Login from './views/Login/Login'
import NavBar from './components/NavBar/NavBar'
import { useEffect } from 'react'
import Error from './views/Error/Error'

function App() {

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {

    if (location.pathname === "/") navigate("/home");
    
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </>
  )
}

export default App
