// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("V");
//     console.log("C");
// }

// sayMyName();


// function addTwoNumber(number1, number2){
//     console.log(number1+number2);
// }
// addTwoNumber(2, 3); // 5
// const result = addTwoNumber(2, 3); //5
// console.log("result: " + result);  // undefined


// function addTwoNumber(number1, number2){
    
//     let result = number1 + number2;
//     return result;
// }
// const result = addTwoNumber(2, 3);
// console.log("RESULT: ", result);     // 5

function addTwoNumber(number1, number2){
    
    return number1 + number2;
}
const result = addTwoNumber(2, 3);
console.log("RESULT: ", result);     // 5

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage()); // undefined just logged in
console.log(loginUserMessage("SHIVAM"));  // SHIVAM just logged in