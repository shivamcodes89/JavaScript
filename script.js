// // // // function xyz(age){
// // // //     if(age >= 18){
// // // //         return "you are eligibal for vote";
// // // //     }
// // // //     else{
// // // //         return "not eligible for vote";
// // // //     }
// // // // }
// // // // const num = xyz(10);
// // // // console.log(num);

// // // // function greet(username = "Guest"){
// // // //     return "Hello " + username + "!";
// // // // }
// // // // // const mygreeting = greet();
// // // // const shivamsGreeting = greet("shivam");
// // // // console.log(shivamsGreeting);
// // // // // console.log(mygreeting);

// // // function sum(num1, num2, ...rest){
// // //     let total = num1 + num2;
// // //     for(let i=0; i < rest.length; i++){
// // //         total = total + rest[i];
        
// // //     }

// // //     return total;
// // // }
// // // const returnedsum = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// // // console.log("Total sum is: " + returnedsum);

// // function first(){
// //     console.log("first");
// //     second();
// // }
// // function second(){
// //     console.log("second");
// // }
// // first();
// // console.log("third");





// // const a = [1, 2, 3, 4, 5, 67, "sh", true, undefined, "C", 1.3];
// // const b = new Array(8).fill(0);
// // console.log(b);
// // b[9] = 20;
// // console.log(b);

// // const c = [1, 2, 3, 4, 5, 98, 87]
// // c[4] = 40;
// // c[c.length] = 20;
// // c.push(20);
// // c.push(45);
// // console.log(c);
// // console.log(c.length);
// // const lastValue = c.pop();
// // console.log(lastValue);
// // console.log(c);

// // const arr = [6, 8, 2, 9, 29, 67]
// // const firstValue = arr.shift();
// // console.log(firstValue);
// // console.log(arr);

// // const arr1 = [6, 8, 2, 9, 29, 67]
// // arr1.unshift(20);
// // console.log(arr1);

// const arr2 = [6, 8, 2, 9, 29, 67]
// arr2.unshift(20);
// console.log(arr2);
// const firstValue = arr2.shift();
// console.log(arr2);


// ++++++++++++++++++++++++++++++++ 03/11/2025 ++++++++++++++++++++++++++++++++++++++++++++


// const evenOdd=(num)=>num%2==0?"Even":"odd";
// console.log(evenOdd(112));
// console.log(evenOdd(9));

// const add=(a, b)=>a+b;
// console.log(add(3, 9));

// const greet=(name)=>"Hello " + name;
// console.log(greet("shivam"));

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(num => num * num);
// console.log(squares);

// const name = "Shivam";
// const age = 20;
// // console.log("Hello, my name is "+ name + " and I am " + age + " year old.");

// console.log(`Hello, my name is ${name} and I am ${age} year old.`);


// const user = "Shivam";
// const point = 120;
// const massage = "Hey " + user + ", you have " + point + " points!";
// console.log(massage);

// const person = {
//     firstName : "Shivam",
//     lastName : "Rajput",
//     age: 21,
//     // introduce: function(){
//     //     console.log(`Hi my name is ${this.firstName} ${this.lastName} and i am ${this.age} year old`);
//     // }
// };

// const hisAge = "age";
// console.log(person["hisAge"]);
// console.log(person.firstName);
// console.log(person.lastName);
// person.introduce();

// person.birthYear = 2025 - person.age;
// console.log(`Hey my birthday is ${this.birthYear}`)
// console.log(person);



// const fruits = ["apple", "banana", "kiwi", "mango"];

// // const firstFruit = fruit[0];
// // const secondFruit = fruit[0];
// const [firstFruit, , thirdFruit] = fruits;


// const color = ["red", "yellow", "blue", "pink", "green", "white", "black"];
// const [, secondcolor, , , fifthcolor] = color;
// console.log(secondcolor);
// console.log(fifthcolor);


// const person = {
//     name: "Shivam",
//     age: 25,
// };
// const {name: firstName, age: umr} = person;
// console.log(firstName);
// console.log(umr);

// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
// const aarr2 = [10, 11, 12, 13];
// const result = [...arr1, ...arr2];
// const [first, second , ...rest] = arr;
// console.log(first)
// console.log(second);
// console.log(rest);
// console.log(arr);


// const name = "Arjit";
// const age = 10;
// const person = {
//     name: name,
//     age: age,
// };


// console.log(20);
// console.log(30);
// console.log(40);
// setTimeout(() => console.log("hello"), 2000);
// console.log(50);


// let count = 10;
// const timer = setInterval(() => {
//     console.log("Hello " + count);
//     count--;
//     if(count < 0) clearInterval(timer);
// }, 1000)

