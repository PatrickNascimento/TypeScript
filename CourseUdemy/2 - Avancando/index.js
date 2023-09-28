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
