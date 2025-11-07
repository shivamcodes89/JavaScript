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