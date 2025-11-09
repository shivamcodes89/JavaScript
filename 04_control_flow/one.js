// if

// const isUserloggedIn = true
// if(isUserloggedIn){

// }

// <, >, <=, >=, ==, !=, ===, !==

// const balance = 2000;
// if(balance < 500){
//     console.log("less than 2000");
// }else if(balance > 1000){
//     console.log("less than 2000 sdfgh");
// }else{
//     console.log("Shivam");  
// }

const isUserloggedIn = true;
const debitcard = true;
const loginFromMobile = false;
const loginFromEmail = true;
if(isUserloggedIn && debitcard){
    console.log("allow to buy course");
}

if(loginFromEmail || loginFromMobile){
    console.log("login allow");
}