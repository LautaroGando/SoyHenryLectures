"use strict";
let operate = "s";
const operateHTML = document.getElementById("operate");
var Bank;
(function (Bank) {
    Bank["GALICIA"] = "Galicia";
    Bank["BBVA"] = "BBVA";
    Bank["SANTANDER"] = "Santander";
})(Bank || (Bank = {}));
;
;
;
const deposit = (cash) => {
    alert(`Deposito exitoso! Su nuevo saldo es de: $${account.balance += cash}.`);
};
const withdraw = (cash) => {
    if (account.balance < cash) {
        alert(`Fondos insuficientes! Tu saldo es de: $${account.balance}.`);
        return;
    }
    ;
    alert(`Retiro exitoso! Su nuevo saldo es de: $${account.balance -= cash}.`);
};
const transfer = (cash) => {
    let alias = prompt("Ingresa el alias a transferir: ");
    if (account.balance < cash) {
        alert(`Fondos insuficientes! Tu saldo es de: $${account.balance}.`);
        return;
    }
    ;
    alert(`Transferencia enviada exitosamente a ${alias}!, Su nuevo saldo es de: $${account.balance -= cash}`);
};
const account = {
    user: "lgando100",
    pass: 1234,
    balance: 230000,
    deposit: deposit,
    withdraw: withdraw,
    transfer: transfer,
    bank: Bank.GALICIA,
};
const user = {
    name: "Lautaro",
    surname: "Gando",
    age: 23,
    dni: 43171024,
    account: account,
};
operateHTML === null || operateHTML === void 0 ? void 0 : operateHTML.addEventListener("click", () => {
    const userPrompt = prompt("Ingrese su usuario: ");
    const passPrompt = Number(prompt("Ingrese su clave: "));
    if (userPrompt === account.user && passPrompt === account.pass) {
        if (user.age >= 18) {
            alert(`Bienvenido al Banco ${account.bank}`);
            while (operate === "s") {
                const menu = prompt(`Elija una de las siguientes opciones:\n1 - Ver saldo\n2 - Depositar\n3 - Retirar\n4 - Transferir\n5 - Salir`);
                switch (true) {
                    case menu === "1":
                        alert(`Tu saldo es de: $${account.balance}.`);
                        break;
                    case menu === "2":
                        const cashDeposit = Number(prompt(`Ingrese la cantidad a depositar: `));
                        deposit(cashDeposit);
                        break;
                    case menu === "3":
                        const cashWithdraw = Number(prompt(`Ingrese la cantidad a retirar: `));
                        withdraw(cashWithdraw);
                        break;
                    case menu === "4":
                        const cashTransfer = Number(prompt(`Ingrese la cantidad a transferir: `));
                        transfer(cashTransfer);
                        break;
                    case menu === "5":
                        alert(`Gracias por visitarnos ${user.name} ${user.surname}, hasta pronto!`);
                        operate = "n";
                        break;
                }
                ;
            }
            ;
        }
        else {
            alert("Usted es menor, no puede seguir operando.");
        }
        ;
    }
    else {
        alert("Credenciales invalidas.");
    }
    ;
});
const titleHTML = document.getElementById("title");
if (titleHTML !== null) {
    titleHTML.innerHTML = `Bienvenido al Banco ${account.bank}`;
}
else {
    throw new Error("No se encontró ningún elemento con el ID 'title'.");
}
;
