const calculatedCm = () => {

    const cm = Math.round(Math.random() * 25);

    return cm;

};

const users = [
    {
        id: 1,
        name: "Javi",
        cm: calculatedCm(),
    },
    {
        id: 2,
        name: "Tilin",
        cm: calculatedCm(),
    },
    {
        id: 3,
        name: "Peluche",
        cm: calculatedCm(),
    },
    {
        id: 4,
        name: "Tuty",
        cm: calculatedCm(),
    },
    {
        id: 5,
        name: "Puchero",
        cm: calculatedCm(),
    },
    {
        id: 6,
        name: "Locura",
        cm: calculatedCm(),
    },
];

const containerHTML = document.querySelector(".container");
const buttonCloseHTML = document.querySelector(".closeButton");

const closeContainer = () => {

    containerHTML.style.display = "none";

};

const openContainer = () => {

    containerHTML.style.display = "flex";

    addUser(users);

};

const addUser = (array) => {

    array.forEach(user => {

        containerHTML.innerHTML += `
                                    <div class="user">
                                        <h2>${user.name}</h2>
                                        <h3>Tu pene mide: ${user.cm}cm</h3>
                                    </div>
                                `;
        
    });

};