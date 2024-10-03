const Pet = require("./Pets");

class Repository {

    constructor() {

        this.pets = [];

    };

    getAllPets() {

        return this.pets;

    };

    createPet(name, image, animal, race, age) {

        const id = this.pets.length + 1;

        const newPet = this.pets.push(new Pet(id, name, image, animal, race, age));

        return newPet;

    };

};

const repository = new Repository();

repository.createPet("Indio", "https://images.ctfassets.net/denf86kkcx7r/cfiQGTrKSKyg6sOFNXWjz/3935effb717f6d1bb255c80813ee74cc/boxer_seguro_perro_santevet-56", "Perro", "Boxer", "2 meses");
repository.createPet("Indio", "https://images.ctfassets.net/denf86kkcx7r/cfiQGTrKSKyg6sOFNXWjz/3935effb717f6d1bb255c80813ee74cc/boxer_seguro_perro_santevet-56", "Perro", "Boxer", "2 meses");
repository.createPet("Indio", "https://images.ctfassets.net/denf86kkcx7r/cfiQGTrKSKyg6sOFNXWjz/3935effb717f6d1bb255c80813ee74cc/boxer_seguro_perro_santevet-56", "Perro", "Boxer", "2 meses");
repository.createPet("Indio", "https://images.ctfassets.net/denf86kkcx7r/cfiQGTrKSKyg6sOFNXWjz/3935effb717f6d1bb255c80813ee74cc/boxer_seguro_perro_santevet-56", "Perro", "Boxer", "2 meses");
repository.createPet("Indio", "https://images.ctfassets.net/denf86kkcx7r/cfiQGTrKSKyg6sOFNXWjz/3935effb717f6d1bb255c80813ee74cc/boxer_seguro_perro_santevet-56", "Perro", "Boxer", "2 meses");

module.exports = repository;