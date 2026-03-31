const promiseOne = new Promise(function(resolve, reject){
  // Do an asyns task
  // DB calls, cryptography, network
  setTimeout(function(){
    console.log('Async task is complete');
    resolve();
    reject();
  }, 1000)
})

promiseOne.then(function(){
  console.log("promise consumed");
})

new Promise(function(resolve, reject){
  setTimeout(function(){
    console.log("Async task 2")
    resolve();
  }, 1000)
})
.then(function(){
  console.log("Async 2 resolve");
})


const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username: "shivamcodes", emial: "shivam@676.com"})
  }, 1000)
})

promiseThree.then(function(user){
  console.log(user);
  
})