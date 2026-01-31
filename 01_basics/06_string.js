const name = "shivam"
const repoCount = 5

// console.log(name + repoCount + "value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("shivam")

console.log(gameName[4]);  // a
console.log(gameName.__proto__);  // {}

console.log(gameName.length); // 6
console.log(gameName.toLocaleUpperCase()); //SHIVAM
console.log(gameName.charAt(3));  // v
console.log(gameName.indexOf("h")); // 1

const newString = gameName.substring(0,4)
console.log(newString);  // shiv

const anotherString = gameName.slice(-4)
console.log(anotherString); // ivam

const newStringOne = "    shivam     ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://shivam.com/shivam%20rajput";
console.log(url.replace('%20', '-'));
console.log(url.includes('shivam'));  // true
console.log(url.includes('arpit'));  // false
console.log(gameName.split('-'));