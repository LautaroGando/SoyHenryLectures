const axios = require("axios");

const containerPokemon = document.getElementById("containerPokemon");
const containerImgPokemon = document.getElementById("containerImgPokemon");

const fetchData = async () => {

    const response = await axios.get(`http://localhost:3000/pokeapi/`);

    try {
      
        renderPokemon(response.data);

    } catch (error) {
        
        console.log(error);

    };

};

fetchData();

const renderPokemon = (data) => {

    data.forEach(data => {
        
        const idPokemonHTML = document.createElement("h2");
        const imgPokemonHTML = document.createElement("img");
        const namePokemonHTML = document.createElement("h2");

        idPokemonHTML.innerHTML = `#000${data.id}`;
        imgPokemonHTML.src = data.sprite;
        namePokemonHTML.innerHTML = data.name;

        containerPokemon.append(idPokemonHTML);

        containerImgPokemon.append(imgPokemonHTML);

        containerPokemon.append(namePokemonHTML);

    });

};