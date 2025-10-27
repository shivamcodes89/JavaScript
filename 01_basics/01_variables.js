const accountId = 144553;
let accountEmail = "shivam99@gmail.com";
var accountPassword = "12345";
accountCity = "Kanpur";
let accountState;

// accountId = 2; // not allowed
console.log(accountId);

accountEmail = "shivamrajput99@gmail.com"; // allow
console.log(accountEmail);

accountCity = "Kannauj";
console.log(accountCity);

console.log(accountState);    // output is --> undefined

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity]);