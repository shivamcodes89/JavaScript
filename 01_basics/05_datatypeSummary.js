// Primitive
// 7 type: String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100;
const scoreValue = 100.3;

const isLoogedIn = false;
const outSideTemp = null;
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123");
console.log(id == anotherId);

const bigNumber = 123456789837328n



// Reference(Non-Primitive)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObject = {
    name: "shivam",
    age: 20
}

const myFunction = function(){
    console.log("Hello World");
}