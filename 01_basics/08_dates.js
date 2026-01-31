let myDate = new Date();
console.log(myDate.toString());  // Sat Jan 31 2026 19:29:54 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Sat Jan 31 2026
console.log(myDate.toLocaleString()); // 1/31/2026, 7:29:54 PM
console.log(typeof myDate);  // Object


// let myCreateDate = new Date(2025, 0, 23);
// let myCreateDate = new Date(2023, 0, 23, 5, 3);
// let myCreateDate = new Date("2023-01-14");
let myCreateDate = new Date("01-14-2023");
console.log(myCreateDate.toDateString());

let myTimeStamp = Date.now();
console.log(myCreateDate);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})