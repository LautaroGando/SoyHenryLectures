import { useState } from 'react';
import Form from './components/Form/Form'
import Theme, { THEMES } from './helpers/Theme';
import styled, { keyframes } from 'styled-components';

const MainContainer = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
`;

const ballAnimation = keyframes`
  25% {
    widht: 300px;
  }
  50% {
    transform: rotateZ(90deg);
  }
  75% {
    width: 0;
    height: 0;
    transform: rotateZ(-90deg);
  }
  100% {
    width: 550px;
    height: 300px;
  }
`;

const Ball = styled.div`
  background-color: red;
  border: 5px solid red;
  width: 550px;
  height: 300px;
  border-radius: 50%;

  animation: ${ballAnimation} 5s infinite;
`;

function App() {

  const [currentTheme, setCurrentTheme] = useState(THEMES.mainTheme);

  const handleThemeChange = () => {

    setCurrentTheme(
      prev => (
        prev === THEMES.mainTheme ? THEMES.secondaryTheme : THEMES.mainTheme
      ),
    );

  };

  return (

    <MainContainer>
      <button onClick={handleThemeChange}>Cambiar tema</button>
      <Theme theme={currentTheme}>
        <Form />
        <Ball />
      </Theme>
    </MainContainer>

  )

};

export default App;