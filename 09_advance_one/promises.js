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