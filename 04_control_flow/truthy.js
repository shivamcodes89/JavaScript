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