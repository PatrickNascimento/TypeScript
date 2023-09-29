//1  revisão dos generics
function showData<T>(arg: T): string {
  return `O dado é ${arg}`;
}

console.log(showData(5));
console.log(showData("testando generics"));

//2 Constraints em generics
//Ele garante que só aceitará o elemento name na chamada do metodo
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é ${obj.name}`;
}
const myobj = { name: "porta", cor: "Branca" };
const otherProduct = { name: "carro", wheels: 4 };
console.log(showProductName(myobj));
console.log(showProductName(otherProduct));

//generic interfaces

interface myobj<T, U> {
  name: string;
  age: T;
  genero: U;
}

type People = myobj<string, number>;

const ipeople = { name: "Patrick", age: 41 };
console.log(ipeople);

//type Paraments

// function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
//   return `a key é ${key} esta no objeto ${obj[key]}`;
// }

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave é ${String(key)} está no objeto ${obj[key]}`;
}

const server = {
  hd: "2TB",
  ram: "32GB",
};
console.log(getSomeKey(server, "ram"));
//console.log(getSomeKey(server,"Memoria"))  Neste caso, ele não aceitara porque não esta dentro do server.



// Keyof Type Operator

type Char = { name: string; age: number; drive: boolean };
type C = keyof Char;

function showChar(obj: Char, name: C): string {
  return `${obj.name}`;
}

const myChar: Char = {name:"matheus",age:30, drive: true}

console.log(showChar(myChar,'name'));

// typeof type operator

const userName: string = "matheus"
const userName2: typeof userName = "Patrick"

console.log(userName2,"Nascimento")


