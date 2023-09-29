// tipo de objeto para função com interface

interface Product {
   name: string
   price:number
   isAvaliable: Boolean
}

function showProductDetail(product : Product){
  console.log(`O produto é ${product.name} e ele custa ${product.price}`)
  if(product.isAvaliable) {
    console.log('O produto está disponível')
  } else {
    console.log('Produto indisponível')
  }
} 

const shirt:Product = {
  name: "Camisa Polo",
  price: 99,
  isAvaliable: false
}



showProductDetail(shirt);
showProductDetail({name: "Tenis", price: 299, isAvaliable:true});


// Propriedade opcionais em interface

interface User {
  email: string,
  role?: string  
}

function ShowDetailUser(user:User){
  console.log(`O usuario é ${user.email}`)
  if(user.role){
    console.log(`a função do usuário é ${user.role}`)
  }
}

const u1:User = {email:"patrick@uol.com.br", role: "Admin"}
const u2:User = {email:"matheus@uol.com.br"}

ShowDetailUser(u1)
ShowDetailUser(u2)


//3 Propriedades Readonly

interface Car {
  brand: string
  readonly whells:number
}

const fusca: Car = {
  brand: "VW",
  whells: 4
}

console.log(fusca)

//fusca.brand = "GM"
//fusca.whells =3 


//4  Index Signature

interface CoordObject {
  [index: string]:number
}

let coords: CoordObject = {
  x:10
}

console.log(coords)
coords.y = 15
console.log(coords.y);

//5 intersections Types

interface Caracter {
  name:string
}

interface Gun {
  type:string
  caliber:number
}

type HumanWithGun = Caracter & Gun //Aqui vc faz union de interfaces.

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 48
}

console.log(arnold.name)
console.log(arnold.type)
console.log(arnold.caliber)

console.log(arnold);

// 6 Read only Array

let myArray:ReadonlyArray<string> = ["maça","Laranja","Banana"]
//myArray[3] = "mamao"
console.log(myArray);


myArray.forEach((item)=> { 
  console.log("fruta:"+item)
})

myArray = myArray.map((item)=> { // MAP adiciona enquanto percorre o array
  return `fruta: ${item}`
})

console.log(myArray);

//7  Tuplas

type fiveNumbers = [number,number,number,number,number]
type nameAnge = [number,string]

const myNumberArray: fiveNumbers = [1,2,3,4,5]

console.log(myNumberArray);

const nameAge: nameAnge = [41,"Patrick"]

console.log(nameAge);


//tuplas com readonly

function showNumbers(numbers:readonly [number,number]) {
console.log(numbers)
}

showNumbers([1,2])


















