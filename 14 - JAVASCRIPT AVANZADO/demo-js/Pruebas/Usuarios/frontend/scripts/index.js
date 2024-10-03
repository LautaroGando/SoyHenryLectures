const registerBtn = document.getElementById("register");
const formRegister = document.getElementById("form-register");
const closeForm = document.getElementById("close-form");

registerBtn.addEventListener("click", e => {

    e.preventDefault();

    formRegister.classList.add("toggleClass");

});

closeForm.addEventListener("click", e => {

    e.preventDefault();

    formRegister.classList.remove("toggleClass");

});

const loginBtn = document.getElementById("login");
const formLogin = document.getElementById("form-login");
const closeFormLogin = document.getElementById("close-formLogin");

loginBtn.addEventListener("click", e => {

    e.preventDefault();

    formLogin.classList.add("toggleClassLogin");

});

closeFormLogin.addEventListener("click", e => {

    e.preventDefault();

    formLogin.classList.remove("toggleClassLogin");

});

const axios = require("axios");

const containerPets = document.getElementById("containerPets");

axios.get("http://localhost:3000/pets").then(res => {

    res.data.forEach(data => {

        const divPet = document.createElement("div");
        const namePet = document.createElement("h3");
        const imgPet = document.createElement("img");
        const descriptionPet = document.createElement("ul");
        const animalPet = document.createElement("li");
        const racePet = document.createElement("li");
        const agePet = document.createElement("li");
        const buttonPet = document.createElement("button");

        namePet.innerHTML = data.name;
        imgPet.src = data.image;
        animalPet.innerHTML = `<strong>Animal: </strong>${data.animal}`;
        racePet.innerHTML = `<strong>Raza: </strong>${data.race}`;
        agePet.innerHTML = `<strong>Edad: </strong>${data.age}`;

        divPet.classList.add("pet-card");

        buttonPet.innerHTML = "ADOPTAR";

        buttonPet.addEventListener("click", async () => {

            const userName = prompt("Ingresa tu usuario:");
            const petName = data.name;

            try {

                await axios.put("http://localhost:3000/users/addPet", {userName, petName});

                alert("Mascota adoptada.");
                
            } catch (err) {
              
                console.log(err);

            };

        });

        descriptionPet.append(animalPet);
        descriptionPet.append(racePet);
        descriptionPet.append(agePet);

        divPet.append(namePet);
        divPet.append(imgPet);
        divPet.append(descriptionPet);
        divPet.append(buttonPet);

        containerPets.append(divPet);

    });

}).catch(err => {

    console.log(err);

});

const handlerPet = require("../public/models/addPet");

const form = document.getElementById("form");
const removeValues = document.getElementById("removeValues");
const sendValues = document.getElementById("sendValues");

removeValues.addEventListener("click", e => {

    e.preventDefault();

    form.reset();

});

sendValues.addEventListener("click", e => {

    e.preventDefault();

    handlerPet();

});

const handlerUser = require("../public/models/addUser");

const sendForm = document.getElementById("sendForm");

sendForm.addEventListener("click", e => {

    e.preventDefault();

    handlerUser();

    formRegister.classList.remove("toggleClass");

});

/* const repository = require("../public/models/Repository");

const createCard = (pet) => {

    const {name, image, animal, race, age} = pet;

    const divPet = document.createElement("div");
    const namePet = document.createElement("h3");
    const imgPet = document.createElement("img");
    const descriptionPet = document.createElement("ul");
    const animalPet = document.createElement("li");
    const racePet = document.createElement("li");
    const agePet = document.createElement("li");
    const buttonPet = document.createElement("button");

    namePet.innerHTML = name;
    imgPet.src = image;
    animalPet.innerHTML = `<strong>Animal: </strong>${animal}`;
    racePet.innerHTML = `<strong>Raza: </strong>${race}`;
    agePet.innerHTML = `<strong>Edad: </strong>${age}`;

    divPet.classList.add("pet-card");

    buttonPet.innerHTML = "ADOPTAR";

    descriptionPet.append(animalPet);
    descriptionPet.append(racePet);
    descriptionPet.append(agePet);

    divPet.append(namePet);
    divPet.append(imgPet);
    divPet.append(descriptionPet);
    divPet.append(buttonPet);

    return divPet;

};

const showCard = () => {

    

    containerPets.innerHTML = "";

    const pets = repository.getAllPets();

    const paintPet = pets.map(pet => createCard(pet));

    paintPet.forEach(pet => containerPets.append(pet));

};

showCard(); */