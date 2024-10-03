import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './views/Header/Header';
import Home from './views/Home/Home';
import Pokedex from './views/Pokedex/Pokedex';

function App() {

  return (

    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/pokedex' element={<Pokedex />}/>
      </Routes>
    </>

  )

};

export default App;