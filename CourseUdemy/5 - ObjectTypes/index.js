"use strict";
// tipo de objeto para função com interface
function showProductDetail(product) {
    console.log(`O produto é ${product.name} e ele custa ${product.price}`);
    if (product.isAvaliable) {
        console.log('O produto está disponível');
    }
    else {
        console.log('Produto indisponível');
    }
}
const shirt = {
    name: "Camisa Polo",
    price: 99,
    isAvaliable: false
};
showProductDetail(shirt);
showProductDetail({ name: "Tenis", price: 299, isAvaliable: true });
function ShowDetailUser(user) {
    console.log(`O usuario é ${user.email}`);
    if (user.role) {
        console.log(`a função do usuário é ${user.role}`);
    }
}
const u1 = { email: "patrick@uol.com.br", role: "Admin" };
const u2 = { email: "matheus@uol.com.br" };
ShowDetailUser(u1);
ShowDetailUser(u2);
const fusca = {
    brand: "VW",
    whells: 4
};
console.log(fusca);
let coords = {
    x: 10
};
console.log(coords);
coords.y = 15;
console.log(coords.y);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 48
};
console.log(arnold.name);
console.log(arnold.type);
console.log(arnold.caliber);
console.log(arnold);
// 6 Read only Array
let myArray = ["maça", "Laranja", "Banana"];
//myArray[3] = "mamao"
console.log(myArray);
myArray.forEach((item) => {
    console.log("fruta:" + item);
});
myArray = myArray.map((item) => {
    return `fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
const nameAge = [41, "Patrick"];
console.log(nameAge);
//tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers);
}
showNumbers([1, 2]);
