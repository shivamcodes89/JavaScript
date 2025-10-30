const name = "shivam"
const repoCount = 5

// console.log(name + repoCount + "value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("shivam")

console.log(gameName[4]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("h"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,2)
console.log(anotherString);