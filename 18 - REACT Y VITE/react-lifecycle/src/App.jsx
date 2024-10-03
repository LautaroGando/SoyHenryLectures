/* import {Component} from 'react'; */
import './App.css';
import { useState, useEffect } from 'react';
import Card from './Card';
import Detail from './Detail';

/* const user = "Daiana";

class App extends Component {

  constructor() {
    super();
    this.state = {
      session: false,
      info: "No se ha cargado la info",
    }

    console.log("Ejecutando el constructor");
  }

  componentDidMount() {

    console.log("Ejecutando el componentDidMount");

    setTimeout(() => {
      this.setState({
        session: true,
        info: `Bienvenido/a ${user}`,
      });
    }, 3000);

  }

  componentDidUpdate() {

    console.log("Ejecutando el componentDidUpdate");

  }

  componentWillUnmount() {

    console.log("Ejecutando el componentWillUnmounted");

  }

  render() {

    console.log("Ejecutando el render");
    console.log(this.state.info);

    return (

      <div>
        {
          this.state.session ? (
            <h2>Estás conectado! 🦖</h2>
          ) : (
            <h2>Aún no has iniciado sesión 😭</h2>
          )
        }
      </div>

    )

  }

} */

const App = () => {

  const [characters, setCharacters] = useState([]);
  const [detail, setDetail] = useState(false);
  const [id, setId] = useState(0);

  useEffect(() => {
    fetch(`https://hp-api.onrender.com/api/characters`).then((response) => response.json()).then((data) => setCharacters(data));

    return () => { setId(0) };
  }, []);

  const handleOnClick = (id) => {

    setId(id);
    setDetail(true);

  };

  const handleOnClose = () => {

    setDetail(false);

  };

  return (

    <>
      {
        characters.map((character) => {
          return <Card key={character.id} character={character} handleOnClick={handleOnClick} />
        })
      }
      {
        detail && <Detail id={id} handleOnClose={handleOnClose} />
      }
    </>

  )

}

export default App