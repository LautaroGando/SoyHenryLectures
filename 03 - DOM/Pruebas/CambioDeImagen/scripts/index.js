const imageHTML = document.getElementById("image");
const buttonPrev = document.getElementById("buttonPrev");
const buttonNext = document.getElementById("buttonNext");

const images = [
    "charizard.jpeg",
    "ivysaur.jpg",
    "pikachu.jpg",
    "umbreon.png",
];

let i = 0;

const renderImage = (i) => {

    return imageHTML.src = `../assets/images/${images[i]}`;

};

setInterval(() => {
    
    i++

    if(i >= images.length) {

        i = 0;

    };

    renderImage(i);

}, 5000);

buttonPrev.addEventListener("click", () => {

    i--;

    if(i < 0) {

        i = images.length - 1;

    };
    
    renderImage(i);

});

buttonNext.addEventListener("click", () => {

    i++;

    if(i >= images.length) {

        i = 0;

    };

    renderImage(i);

});