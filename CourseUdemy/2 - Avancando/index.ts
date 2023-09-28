let numbers: number[] = [1, 2, 3];
numbers.push(5);
console.log(numbers);

// outras sintaxes array

const nums: Array<number> = [100, 200]; //Array Interface
nums.push(300);
console.log(nums);

// Funcoes anonimas

setTimeout(function () {
  const sallary: number = 200;
  //console.log(sallary);
}, 2000);

// Tipos de Objetos

function passCoordinates(coord: { x: number; y: number }) {
  console.log("X coodinates: " + coord.x);
  console.log("Y coodinates: " + coord.y);
}
const objCoord = { x: 16.86, y: 85.99 };
passCoordinates(objCoord);

function getName(fullname: { nome: string; sobrenome: string }) {
  console.log(fullname.nome + " ", fullname.sobrenome);
}

const objNames = { nome: "PAtrick", sobrenome: "Nascimento" };
getName(objNames);

//propriedades opicionais

function showNumbers(a: number, b: number, c?: number) {
  console.log(a, b);
  if (c) {
    console.log(c);
  }
}

showNumbers(2, 1);

//only return
function advancedGreeting(firstname: string, lastname?: string) {
  lastname
    ? console.log(`Olá, ${firstname} ${lastname}, tudo bem?`)
    : console.log(`Olá, ${firstname}, tudo bem?`);
}
advancedGreeting("Patrick", "Nascimento");

//union types

function showBalance(balance: string | number) {
  console.log(balance);
}

showBalance("100");

// Outra forma com arrayType

const arr2: Array<number | string> = [1, "teste"];
console.log(arr2);

//Avançando com union types

function showUserRole(role: boolean | string) {
  return typeof role === "boolean"
    ? "Usuario não aprovado"
    : `A função do usuário é : ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("admin"));

type ID = string | number;
//Type alias resumindo unio types

//metoro comum
function showIdComun(id: string | number) {
  console.log(`Id é ${id}`);
}
function showId(id: ID) {
  //usando Alias com types
  console.log(`Id é ${id}`);
}

showId(200);
showId("200");

// INTERFACES

interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoords(obj: Point) {
  console.log(`x: ${obj.x} y: ${obj.y} x: ${obj.z} }`);
}

const corrdObj: Point = {
  x: 10,
  y: 15,
  z: 25,
};

showCoords(corrdObj);

// Interface vs Alias

interface Person {
  name: string;
}
interface Person {
  age: Number;
}

const somePerson: Person = {name: "matheus", age: 10}

console.log(somePerson);

type personType = {
  age: number
}

const sometype: personType = {age: 10}
 console.log("sometypes", sometype);



// Literal Types

let test: "testando"
test = "testando"

function showDirection(direction: "left"|"right"|"center"){
  console.log(`The direction is ${direction}`);
}

showDirection("right");

//Nom-null Assertion Operator

const p = document.getElementById("some-p")
//console.log(p?.innerText)


let n: bigint
n = 1000n


console.log(n)
console.log(n+ 1000n)


//Symbol

let symbolA:symbol = Symbol("a")
let symbolB:symbol = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)

//Narrowing

//typeof type guard

//typeguard






