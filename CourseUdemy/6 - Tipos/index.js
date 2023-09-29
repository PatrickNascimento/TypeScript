"use strict";
//1  revisão dos generics
function showData(arg) {
    return `O dado é ${arg}`;
}
console.log(showData(5));
console.log(showData("testando generics"));
//2 Constraints em generics
//Ele garante que só aceitará o elemento name na chamada do metodo
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
const myobj = { name: "porta", cor: "Branca" };
const otherProduct = { name: "carro", wheels: 4 };
console.log(showProductName(myobj));
console.log(showProductName(otherProduct));
const ipeople = { name: "Patrick", age: 41 };
console.log(ipeople);
//type Paraments
// function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
//   return `a key é ${key} esta no objeto ${obj[key]}`;
// }
function getSomeKey(obj, key) {
    return `A chave é ${String(key)} está no objeto ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB",
};
console.log(getSomeKey(server, "ram"));
function showChar(obj, name) {
    return `${obj.name}`;
}
const myChar = { name: "matheus", age: 30, drive: true };
console.log(showChar(myChar, 'name'));
// typeof type operator
const userName = "matheus";
const userName2 = "Patrick";
console.log(userName2, "Nascimento");
const newtruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhao curto"
};
function showkm(km) {
    console.log('o veiculo esta com ', km, ' km');
}
showkm(newtruck.km);
