"use strict";
//funcão sem retorno.
function withouReturn() {
    console.log("esta funcao não tem return");
}
withouReturn();
//Callback
function greeting(name) {
    return `olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("preparando a função com Callback");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Matheus");
preGreeting(greeting, "joao");
//Generic funcion
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
//merge Objects
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2,
    };
}
const newObject = mergeObjects({ name: "matheus" }, { age: 30, job: "programer" });
console.log(newObject);
//Constraints nas Generic Functions
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 8));
console.log(biggestNumber("12", "8"));
// especificar tipo de argumento
function mergeArray(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArray([1, 2, 3], ["AA1", "BB2"]));
//Parametro Defalt
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(14, 15));
//function Unknows
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um numero");
    }
}
doSomething([1, 2, 3]);
doSomething(5);
//never
function showErrors(msg) {
    throw new Error(msg);
}
//showErrors("Any Error");
//  Rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(12, 22, 23, 24, 25));
//Destructuring
function showProductDetail({ name, price }) {
    return `O produto é ${name} e ele custa ${price}`;
}
const shirt = { name: "Camisa Lacoste", price: 249.90 };
console.log(showProductDetail(shirt));
