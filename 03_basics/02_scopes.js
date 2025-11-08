// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }
// // console.log(a);
// // console.log(b);
// console.log(c); // ye 30 print karega jab ki isko scope ke bahar nahi aana chahiye 
//                 // islilye var ki jagah let use karege

// var c = 500;
// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }
// console.log(c); // 500 print hona chahiye lekin 30 print ho raha


let a = 300
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
console.log(a);


function one(){
    const username = "shivam";
    function two(){
        const wibsite = "youtube";
        console.log(username);
        
    }
    // console.log(website);
    two ();
    
}
one();



if(true){
    const username = "shivam";
    if(username === "shivam"){
        const website = "youtube"
        console.log(username + website);
        
    }
    //console.log(website); //out of scope
    
}
// console.log(username); // out of scope


// +++++++++++++++++++++++++ interesting +++++++++
function  addone(num){
    return num + 1;
}
addone(5);

const addtwo = function(num){
    return num + 2;
}
addtwo(5);

// *****************
console.log(addone1(5));  // output 6
function  addone1(num){
    return num + 1;
}


console.log(addtwo2(5)); // error 
const addtwo2 = function(num){
    return num + 2;
}