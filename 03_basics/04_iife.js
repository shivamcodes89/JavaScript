// Immediatly Invoked Function Expression (IIFE)

(function one(){  // named iife
    console.log(`DB CONNECTED`);
})();  // agar ; nahi lagayege to to angla code error dena

( () => {  // unnamed iife
    console.log(`DB CONNECTED TWO`);   
} )();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);   
} )("shivam");