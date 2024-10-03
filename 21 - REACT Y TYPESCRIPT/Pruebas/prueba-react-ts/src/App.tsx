import './App.css';
import Product from './components/Product/Product';
import Saludo from './components/Saludo/Saludo';

function App() {

  return (

    <>
      <Saludo name='Lautaro'/>
      <Product title='Cama' image="" price={3000} stock={true}/>
    </>

  )

};

export default App;