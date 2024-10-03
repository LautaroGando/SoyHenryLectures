import './App.css';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Pokedex from './views/Pokedex/Pokedex';
import Detail from './views/Detail/Detail';
import Register from './views/Register/Register';
import Login from './views/Login/Login';
import Footer from './components/Footer/Footer';
import Error from './views/Error/Error';

function App() {

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {

    if (location.pathname === "/") navigate("/home");

  }, [location, navigate]);

  return (

    <>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/pokedex' element={<Pokedex />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/pokedex/detail/:id' element={<Detail />} />
        <Route path='*' element={<Error />}/>
      </Routes>
      <Footer />
    </>

  );

};

export default App;