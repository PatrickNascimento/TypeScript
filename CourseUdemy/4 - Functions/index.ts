// 1 - typeguard

function soma(a: number | string, b: number | string): void {
  if (typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log("Pelo menos um dos valores não é um número válido.");
  }
}

const a = "10";
const b = "5";

soma(a, b);

//Checking Value exists
function operations(
  arr: number[],
  operation: "sum" | "average" | "max" = "sum"
): number {
  switch (operation) {
    case "sum":
      return arr.reduce((acc, curr) => acc + curr, 0);
    case "average":
      const sum = arr.reduce((acc, curr) => acc + curr, 0);
      return sum / arr.length;
    case "max":
      return Math.max(...arr);
    default:
      throw new Error("Operação não reconhecida");
  }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumResult = operations(numbers, "sum");
console.log("Soma:", sumResult);

const averageResult = operations(numbers, "average");
console.log("Média:", averageResult);

const maxResult = operations(numbers, "max");
console.log("Máximo:", maxResult);

//Operator InstanceOf

class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name); //Informa que é do Pai dela neste caso o User
  }
}

const jhon = new User("john");
const Paul = new SuperUser("Paul");

console.log(jhon);
console.log(Paul);

function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    console.log(`Olá ${user.name} deseja ter acesso total?`);
  } else if (user instanceof User) {
    console.log(
      `Olá ${user.name} Você pode somente visualizar algumas informações`
    );
  }
}

userGreeting(jhon)
userGreeting(Paul)


// Operador in



