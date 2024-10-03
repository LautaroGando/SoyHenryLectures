import NavBar from './components/NavBar';
import React, { Suspense } from 'react';
import './App.css';

const LazyDataLoader = React.lazy(() => import("./components/LazyDataLoader"));

function App() {

  return (

    <div className='app-container'>
      <NavBar />
      <Suspense fallback={<div style={{color: "black"}}>Loading...</div>}>
        <LazyDataLoader />
      </Suspense>
    </div>

  )

};

export default App;