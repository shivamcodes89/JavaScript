// Primitive
// 7 type: String, Number, Boolean, null, undefined, Symbol, BigInt


const score = 100;
const scoreValue = 100.3;

const isLoogedIn = false;
const outSideTemp = null; 
console.log(typeof outSideTemp);// null ka typeof se data type object aata hai.

let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123");
console.log(id === anotherId); // false

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

console.log(typeof bigNumber); // bigint

// +++++++++++++++++++ Memory ++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)
// Stack me variable ka copy milta hai 
// Heap me object ka refrence milta hai 

let myName = "Shivam"
let anotherName = myName
anotherName = "Arjit"

console.log(anotherName) // Arjit
console.log(myName) // Shivam

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shivam@google.com"

console.log(userOne.email);  // shivam@google.com
console.log(userTwo.email); // shivam@google.com 