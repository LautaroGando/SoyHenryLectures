const axios = require("axios");

const containerHTML = document.getElementById("container");

const fetchData = async () => {

    const response = await axios.get("http://localhost:3000/teams");

    try {

        renderTeams(response.data)

    } catch (error) {

        console.log(error);

    };

};

fetchData();

const renderTeams = (data) => {

    data.forEach(data => {

        const divHTML = document.createElement("div");
        const imgHTML = document.createElement("img");
        const nameHTML = document.createElement("h2");
        const titlesHTML = document.createElement("h2");
        const stadiumCapacityHTML = document.createElement("h2");

        imgHTML.src = data.img;

        nameHTML.innerHTML = `Equipo: ${data.name}`;

        titlesHTML.innerHTML = `Titulos: ${data.titles}🏆`;

        if(data.titles < 10) {

            titlesHTML.innerHTML = `Titulos: <span style="color: transparent;">0</span>${data.titles}🏆`

        };

        stadiumCapacityHTML.innerHTML = `Capacidad del Estadio: ${data.stadiumCapacity}👥`;

        if(data.stadiumCapacity < 10000) {

            stadiumCapacityHTML.innerHTML = `Capacidad del Estadio: <span style="color: transparent;">0</span>${data.stadiumCapacity}👥`

        };

        divHTML.append(imgHTML);
        divHTML.append(nameHTML);
        divHTML.append(titlesHTML);
        divHTML.append(stadiumCapacityHTML);

        containerHTML.append(divHTML);

    });

};