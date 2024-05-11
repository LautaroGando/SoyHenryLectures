class Team {

    constructor(id, title, description, imgURL) {

        this.id = id;
        this.title = title;
        this.description = description;
        this.imgURL = imgURL;

    };
    
};

class Repository {

    constructor() {

        this.teams = [];

    };

    getTeams() {

        return this.teams;

    };

    addTeam(title, description, imgURL) {

        const id = this.teams.length + 1;

        this.teams.push(new Team(id, title, description, imgURL));

    };

    deleteTeam(id) {

        this.teams = this.teams.filter(team => team.id !== id);

    };

};

const repository = new Repository();

const createElements = (team) => {

    const {id, title, description, imgURL} = team;

    const divHTML = document.createElement("div");
    const titleHTML = document.createElement("h3");
    const descriptionHTML = document.createElement("p");
    const imgURLHTML = document.createElement("img");

    titleHTML.innerHTML = title;
    descriptionHTML.innerHTML = description;
    imgURLHTML.src = imgURL;

    divHTML.classList.add("card");

    divHTML.append(titleHTML);
    divHTML.append(descriptionHTML);
    divHTML.append(imgURLHTML);

    divHTML.addEventListener("click", () => {

        deleteTeam(id);

    });

    return divHTML;

};

const addElements = () => {

    const containerCards = document.getElementsByClassName("container-cards")[0];

    containerCards.innerHTML = "";

    const getTeamsRepository = repository.getTeams();

    const convertElements = getTeamsRepository.map(team => createElements(team));

    convertElements.forEach(team => containerCards.append(team));

    if(repository.getTeams() == "") {

        const span = document.createElement("span");

        span.textContent = "No hay elementos disponibles.";

        containerCards.append(span);

    };

};

addElements();

const handler = () => {

    const inputTitle = document.getElementById("title");
    const inputImgURL = document.getElementById("imgURL");
    const inputDescription = document.getElementById("description");

    const titleValue = inputTitle.value;
    const imgURLValue = inputImgURL.value;
    const descriptionValue = inputDescription.value;

    if(titleValue == "" || imgURLValue == "" || descriptionValue == "") {

        return alert("Ingresa todos los datos para continuar!");

    };

    repository.addTeam(titleValue, descriptionValue, imgURLValue);

    addElements();

};

const deleteTeam = (id) => {

    repository.deleteTeam(id);

    addElements();
    
};

const sendForm = document.getElementById("sendForm");

sendForm.addEventListener("submit", e => {

    e.preventDefault();

    handler();
    
    sendForm.reset();
    
});