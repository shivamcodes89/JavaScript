const userEmail = "arjit857@gmail.com";

if(userEmail){
    console.log("go user email");
} else{
    console.log("don't have user email");
}

// false, 0, -0, BigInt 0n, "", null, undefined, NaN <= falsy values
// "0", "false", " ", [], {}, function(){}  <= truthy value

const user = []
if(user.length === 0){
    console.log("array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}


// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 15 ?? 10
console.log(val1);


// Terniary Operator

// condition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
