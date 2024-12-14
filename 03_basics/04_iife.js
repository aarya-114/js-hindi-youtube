// Immediately Invoked Function Expressions (IIFE)
//Avoid polluting the global scope
//sometimes needed when to excute file as sooon as an application is satrted

//(--)()
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

