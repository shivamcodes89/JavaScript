// singleton
// Object.create

// object literals

const mySym = Symbol("Key1")

const jsUser = {
    name: "Shivam",
    "full name": "Shivam Rajput",
    [mySym]: "mykey1",
    age: 18,
    location: "kanpur",
    email: "shiva@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);


jsUser.email = "raj@gmail.com";
// Object.freeze(jsUser);    //object ko freez kar deta hai koi bhi change nahi kar sakte 
jsUser.email = "shiva@gmail.com";
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());