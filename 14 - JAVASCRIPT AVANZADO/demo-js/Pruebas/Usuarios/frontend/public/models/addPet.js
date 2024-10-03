const axios = require("axios");

const handlerPet = async () => {

    const petName = document.getElementById("petName");
    const petImage = document.getElementById("petImage");
    const petAnimal = document.getElementById("petAnimal");
    const petRace = document.getElementById("petRace");
    const petAge = document.getElementById("petAge");

    if (petName.value === "" || petImage.value === "" || petAnimal.value === "" || petRace.value === "" || petAge.value === "") return alert("Por favor, completa todos los datos para agregar a la mascota.");

    const pets = {
        name: petName.value,
        image: petImage.value,
        animal: petAnimal.value,
        race: petRace.value,
        age: petAge.value,
    };

    try {

        await axios.post("http://localhost:3000/pets", pets);

    } catch (err) {

        console.log(err);

    };

    petName.value = "";
    petImage.value = "";
    petAnimal.value = "";
    petRace.value = "";
    petAge.value = "";

};

module.exports = handlerPet;