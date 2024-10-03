const axios = require("axios");

const handlerUser = async () => {

    const userName = document.getElementById("userName");
    const userEmail = document.getElementById("userEmail");
    const userAge = document.getElementById("userAge");
    const userDni = document.getElementById("userDni");

    if (userName.value === "" || userEmail.value === "" || userAge.value === "" || userDni.value === "") {

        return alert("Faltan datos.");

    };

    const user = {
        name: userName.value,
        email: userEmail.value,
        age: userAge.value,
        dni: userDni.value,
    };

    try {

        await axios.post("http://localhost:3000/users", user);

    } catch (err) {

        console.log(err);

    };

    userName.value = "";
    userEmail.value = "";
    userAge.value = "";
    userDni.value = "";

};

module.exports = handlerUser;