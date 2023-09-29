//funcão sem retorno.

function withouReturn(): void {
  console.log("esta funcao não tem return");
}

withouReturn();

//Callback

function greeting(name: string): string {
  return `olá ${name}`;
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log("preparando a função com Callback");

  const greet = f(userName);
  console.log(greet);
}

preGreeting(greeting, "Matheus");
preGreeting(greeting, "joao");

//Generic funcion

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));

//merge Objects

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}

const newObject = mergeObjects(
  { name: "matheus" },
  { age: 30, job: "programer" }
);
console.log(newObject);

//Constraints nas Generic Functions

function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }
  return biggest;
}

console.log(biggestNumber(5, 8));
console.log(biggestNumber("12", "8"));

// especificar tipo de argumento

function mergeArray<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

console.log(mergeArray<number | string>([1, 2, 3], ["AA1", "BB2"]));

//Parametro Defalt

function somaDefault(n: number, m = 10) {
  return n + m;
}

console.log(somaDefault(10));
console.log(somaDefault(14, 15));

//function Unknows

function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0]);
  } else if (typeof x === "number") {
    console.log("X é um numero");
  }
}

doSomething([1, 2, 3]);
doSomething(5);

//never

function showErrors(msg: string): never {
  throw new Error(msg);
}
//showErrors("Any Error");

//  Rest operator

function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number);
}

console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(12, 22, 23, 24, 25));

//Destructuring

function showProductDetail({
  name,
  price,
}: {
  name: string;
  price: number;
}): string {
  return `O produto é ${name} e ele custa ${price}`;
}

const shirt = { name: "Camisa Lacoste", price: 249.9 };

console.log(showProductDetail(shirt));
