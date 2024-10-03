/* const nombre: string = "Jorge";

const saludar = (name: string): string => {

    return `Hola ${name}`;

};

console.log(saludar(nombre));

saludar("Pedro");
saludar("Maria");

const calcularTotal = (quantity: number, price: number): number => {

    return quantity * price;

};

calcularTotal(10, 150);
calcularTotal(5, 15); */

/* const user = {
    name: "Jorge Vega",
    age: 32,
    email: "jvega@gmail.com",
    active: true,
    address: {
        street: "Calle Falsa 123",
        city: "Posadas",
    },
}; */

/* interface IAddress {
    street: string,
    city: string,
}; */

/* interface IUser {
    name: string,
    age: number,
    email: string,
    active: boolean,
    address: IAddress,
};

const usuario: IUser = {
    name: "Jorge Vega",
    age: 32,
    email: "jvega@gmail.com",
    active: true,
    address: {
        street: "Calle Falsa 123",
        city: "Posadas",
    },
}; */

/* enum UserRole {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest",
};

type TUser = {
    name: string,
    age: number,
    email: string,
    active: boolean,
    address: IAddress,
    role: UserRole, // "admin", "user", "guest"
};

const user1: TUser = {
    name: "Jorge Vega",
    age: 32,
    email: "jvega@gmail.com",
    active: true,
    address: {
        street: "Calle Falsa 123",
        city: "Posadas",
    },
    role: UserRole.ADMIN,
};

console.log(user1); */

/* interface User {
    name: string,
    email: string,
    age: number,
};

interface AdminUser extends User {
    adminSince: Date,
};

interface GuestUser extends User {
    active: boolean,
};

const user1: AdminUser = {
    name: "Jorge",
    email: "jvega@email.com",
    age: 32,
    adminSince: new Date(),
}; */

interface ITrack {
    title: string,
};

interface ISong extends ITrack {
    artist: string,
    duration: number,
};

interface IPodcast extends ITrack {
    host: string,
    episodes: number,
};

interface IAudiobook extends ITrack {
    author: string,
    duration: number,
};

interface IPlaylist {
    name: string,
    playlist: ITrack[],
};

const song1: ISong = {
    title: "By the Way",
    artist: "Red Hot Chili Pappers",
    duration: 100,
};

const podcast1: IPodcast = {
    title: "Cuentos desde la cripta",
    host: "Una calavera",
    episodes: 100,
};

const audiobook1: IAudiobook = {
    title: "El principito",
    author: "Antoine de Saint-Exupery",
    duration: 100,
};

const myPlaylist: IPlaylist = {
    name: "myPlaylist",
    playlist: [song1, podcast1, audiobook1],
};

/* const miArr: (number | string | boolean)[] = [1, 2, "hola", true]; */

// IPersona => IDoctor