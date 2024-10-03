import './App.css';
import { useState } from 'react';
import View from './View';
import ParentComponent from './ParentComponent';
/* import Card from './Card'; */

function App() {

  /* const [characters, setCharacters] = useState([
    {id: 1, name: "Hary Poter", house: "Gryffindor"},
    {id: 2, name: "Draco Malfoy", house: "Slytherin"},
  ]);

  const addCharacter = () => {

    setCharacters([...characters, {id: 3, name: "Hermione Granger", house: "Gryffindor"},]);

  };

  const modifyName = () => {

    characters[0].name = "Harry Potter";

    setCharacters([...characters]);

  }; */

  return (
    <>
      {/* {
        characters.map((character) => {

          return <Card key={character.id} character={character}/>

        })
      }

      <button onClick={addCharacter}>Agregar personaje</button>
      <button onClick={modifyName}>Corregir nombre</button> */}

      {/* <View /> */}

      <ParentComponent />
    </>
  );

}

export default App