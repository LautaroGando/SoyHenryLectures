import CharacterList from '../../microfrontend2/src/components/CharacterList';
import './App.css'
/* import { Cart } from "cart/Cart";
import { Catalog } from "catalog/Catalog";
import { MessageBus } from './message'; */

function App() {

  /* const messageBus = new MessageBus(); */

  return (

    <>
      {/* <Catalog messageBus={messageBus} />
      <Cart messageBus={messageBus} /> */}
      <h1>Microfrontend 1</h1>
      <CharacterList />
    </>

  )

};

export default App;