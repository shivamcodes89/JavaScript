const user = {
    username: "shivam",
    price: 999,

    welcomeMassage: function(){
        console.log(`${username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMassage();
// user.username = "sam";
// user.welcomeMassage();
console.log(this);


function one(){
    let username = "shivam"
    console.log(this.username); // function ke ander this ka use nahi karte => output > undefined
    
}
one();

const two = function one(){
    let username = "shivam"
    console.log(this.username); 
    
}
one();


const user1 = () => {
    let username = "shivam"
    console.log(this.username);
    
}
user1();

// () => {}

// // const addTwo = (num1, num2) => {
// //     return num1 + num2
// // }
// const addTwo = (num1, num2) =>   num1 + num2
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(3, 4));

// const addTwo = (num1, num2) => (num1 + num2) object return karne ke liye aaise likhte hai