// const tinderUser = new Object();   // singalton object


const tinderUser = {}  // non singalton object or litral object
tinderUser.id = "123abc";
tinderUser.name = "sapat";
tinderUser.isLoggedIn = false;
// console.log(tinderUser)

const regularUsr = {
    email: "sapat67@gmail.com",
    fullname: {
        userfullname: {
            firstname: "shivam",
            lastname: "rajput"
        }
    }
}
console.log(regularUsr.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign(obj1, obj2)
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const course = {
    coursname: "js in hindi",
    price: "999",
    courseInstructor: "shivam"
}
const{courseInstructor} = course
console.log(courseInstructor);


// const person = {
//     name: "Shivam",
//     age: 25,
// };
// const {name: firstName, age: umr} = person;    // name ko fistname bna diya aab fistname likhne par name aayega
// console.log(firstName);
// console.log(umr);

// {
//     "name": "shivam",
//     "coursname1": "js in hindi",
//     "price": "free"
// }

