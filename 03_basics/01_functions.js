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


// ++++++++++++++++++++++++++++++++++++++++++++

function calculateCarPrice(num1){
    return num1;
}
console.log(calculateCarPrice(200, 300, 400)); // 200


function calculateCarPrice2(...num2){
    return num2;
}
console.log(calculateCarPrice2(200, 300, 400)); // [200, 300, 400]


const user = {
    username: "shivam",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price} `);
    
}
// handleObject(user);
handleObject({
    username: "sam",
    price: 399
});

const myNewArray = [200, 300, 100, 600]
function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([45, 46, 78, 23, 90]));