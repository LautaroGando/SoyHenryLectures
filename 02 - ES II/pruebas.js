/* class Activity {

    constructor(id, title, description, imgUrl) {

        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;

    };

};

class Repository {

    constructor() {

        this.activities = [];

    };

    getAllActivities() {

        return this.activities;

    };

    createActivity(id, title, description, imgUrl) {

        const activity = new Activity(id, title, description, imgUrl);

        this.activities.push(activity);

    };

    deleteActivity(id) {

        this.activities = this.activities.filter(activity => activity.id != id);

    };

};

const repository = new Repository();

repository.createActivity(1, 'Jugar al futbol', 'Es apasionante', 'https://www.google.com');

repository.createActivity(2, 'Ir a la cancha', 'Es mi pasion', 'https://www.google.com');

repository.createActivity(3, 'Jugar a la pc', 'Es divertido', 'https://www.google.com');

repository.createActivity(4, 'Salir con seres queridos', 'Es un lindo momento', 'https://www.google.com');

repository.deleteActivity(2);

console.log(repository.getAllActivities()); */