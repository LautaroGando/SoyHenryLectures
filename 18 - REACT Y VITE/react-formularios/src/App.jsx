import './App.css'
import { useState } from 'react'
import { validate } from './helpers/validate';

function App() {

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "Username is require",
    password: "Password is require",
  });

  const handleInputChange = (event) => {

    const {name, value} = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors(validate(userData));
    
  };

  const handleOnSubmit = (event) => {

    event.preventDefault();

    alert(`Username: ${userData.username}, Password: ${userData.password}`);

  };

  return (

    <form onSubmit={handleOnSubmit}>
      <h2>LOGIN</h2>
      <div>
        <label>Username: </label>
        <input
          type='text'
          value={userData.username}
          name='username'
          placeholder='example@gmail.com'
          onChange={handleInputChange}
        />
        {errors.username && <p style={{color: "red"}}>{errors.username}</p>}
      </div>
      <div>
        <label>Password: </label>
        <input
          type='password'
          value={userData.password}
          name='password'
          placeholder='********'
          onChange={handleInputChange}
        />
        {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
      </div>
      <button>Submit</button>
    </form>

  )

}

export default App