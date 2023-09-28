"use strict";
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers);
// outras sintaxes array
const nums = [100, 200]; //Array Interface
nums.push(300);
console.log(nums);
// Funcoes anonimas
setTimeout(function () {
    const sallary = 200;
    //console.log(sallary);
}, 2000);
// Tipos de Objetos
function passCoordinates(coord) {
    console.log("X coodinates: " + coord.x);
    console.log("Y coodinates: " + coord.y);
}
const objCoord = { x: 16.86, y: 85.99 };
passCoordinates(objCoord);
function getName(fullname) {
    console.log(fullname.nome + " ", fullname.sobrenome);
}
const objNames = { nome: "PAtrick", sobrenome: "Nascimento" };
getName(objNames);
//propriedades opicionais
function showNumbers(a, b, c) {
    console.log(a, b);
    if (c) {
        console.log(c);
    }
}
showNumbers(2, 1);
//only return
function advancedGreeting(firstname, lastname) {
    lastname
        ? console.log(`Olá, ${firstname} ${lastname}, tudo bem?`)
        : console.log(`Olá, ${firstname}, tudo bem?`);
}
advancedGreeting("Patrick", "Nascimento");
//union types
function showBalance(balance) {
    console.log(balance);
}
showBalance("100");
// Outra forma com arrayType
const arr2 = [1, "teste"];
console.log(arr2);
//Avançando com union types
function showUserRole(role) {
    return typeof role === "boolean"
        ? "Usuario não aprovado"
        : `A função do usuário é : ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("admin"));
//Type alias resumindo unio types
//metoro comum
function showIdComun(id) {
    console.log(`Id é ${id}`);
}
function showId(id) {
    //usando Alias com types
    console.log(`Id é ${id}`);
}
showId(200);
showId("200");
function showCoords(obj) {
    console.log(`x: ${obj.x} y: ${obj.y} x: ${obj.z} }`);
}
const corrdObj = {
    x: 10,
    y: 15,
    z: 25,
};
showCoords(corrdObj);
const somePerson = { name: "matheus", age: 10 };
console.log(somePerson);
const sometype = { age: 10 };
console.log("sometypes", sometype);
// Literal Types
let test;
test = "testando";
function showDirection(direction) {
    console.log(`The direction is ${direction}`);
}
showDirection("right");
//Nom-null Assertion Operator
const p = document.getElementById("some-p");
//console.log(p?.innerText)
let n;
n = 1000n;
console.log(n);
console.log(n + 1000n);
//Symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
