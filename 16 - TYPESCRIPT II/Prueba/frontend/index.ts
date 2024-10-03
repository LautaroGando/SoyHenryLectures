import axios from "axios";

axios.get("http://localhost:3000/users").then(res => {

    console.log(res.data);
    
});

type TOperate = "s" | "n";

let operate: TOperate = "s";

const operateHTML: HTMLElement | null = document.getElementById("operate");

enum Bank {
    GALICIA = "Galicia",
    BBVA = "BBVA",
    SANTANDER = "Santander",
};

interface IUser {
    name: string,
    surname: string,
    age: number,
    dni: number,
    account: IAccount,
};

interface IAccount {
    user: string,
    pass: number,
    balance: number,
    deposit: Function,
    withdraw: Function,
    transfer: Function,
    bank: Bank,
};

const deposit = (cash: number): void => {

    alert(`Deposito exitoso! Su nuevo saldo es de: $${account.balance += cash}.`);

};

const withdraw = (cash: number): void => {

    if (account.balance < cash) {

        alert(`Fondos insuficientes! Tu saldo es de: $${account.balance}.`);

        return;

    };

    alert(`Retiro exitoso! Su nuevo saldo es de: $${account.balance -= cash}.`);

};

const transfer = (cash: number): void => {

    let alias: string = prompt("Ingresa el alias a transferir: ") as string;

    if (account.balance < cash) {

        alert(`Fondos insuficientes! Tu saldo es de: $${account.balance}.`);

        return;

    };

    alert(`Transferencia enviada exitosamente a ${alias}!, Su nuevo saldo es de: $${account.balance -= cash}`);

};

const account: IAccount = {
    user: "lgando100",
    pass: 1234,
    balance: 230000,
    deposit: deposit,
    withdraw: withdraw,
    transfer: transfer,
    bank: Bank.GALICIA,
};

const user: IUser = {
    name: "Lautaro",
    surname: "Gando",
    age: 23,
    dni: 43171024,
    account: account,
};

operateHTML?.addEventListener("click", () => {

    const userPrompt: string = prompt("Ingrese su usuario: ") as string;
    const passPrompt: number = Number(prompt("Ingrese su clave: ") as string);

    if (userPrompt === account.user && passPrompt === account.pass) {

        if (user.age >= 18) {

            alert(`Bienvenido al Banco ${account.bank}`);

            while (operate === "s") {

                const menu: string = prompt(`Elija una de las siguientes opciones:\n1 - Ver saldo\n2 - Depositar\n3 - Retirar\n4 - Transferir\n5 - Salir`) as string;

                switch (true) {

                    case menu === "1":
                        alert(`Tu saldo es de: $${account.balance}.`);
                        break;

                    case menu === "2":
                        const cashDeposit: number = Number(prompt(`Ingrese la cantidad a depositar: `) as string);
                        deposit(cashDeposit);
                        break;

                    case menu === "3":
                        const cashWithdraw: number = Number(prompt(`Ingrese la cantidad a retirar: `) as string);
                        withdraw(cashWithdraw);
                        break;

                    case menu === "4":
                        const cashTransfer: number = Number(prompt(`Ingrese la cantidad a transferir: `) as string);
                        transfer(cashTransfer);
                        break;

                    case menu === "5":
                        alert(`Gracias por visitarnos ${user.name} ${user.surname}, hasta pronto!`);
                        operate = "n";
                        break;

                };

            };

        } else {

            alert("Usted es menor, no puede seguir operando.");

        };

    } else {

        alert("Credenciales invalidas.");

    };
    
});

const titleHTML: HTMLElement | null = document.getElementById("title");

if (titleHTML !== null) {

    titleHTML.innerHTML = `Bienvenido al Banco ${account.bank}`;

} else {

    throw new Error("No se encontró ningún elemento con el ID 'title'.");

};