//  Primitive
//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// Reference (Non primitive)==> Array, Objects, Functions


/*
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
*/


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

// const bigNumber = 3456543576654356754n
//n is used for BigInt





const heros = ["shaktiman", "naagraj", "doga"];     //array

let myObj = {
    name: "hitesh",
    age: 22,
}   

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//STACK(primitive)==>copy of og value
// HEAP (non primitive) ===>refernce to og value......if changes done change done in og value
//https://youtu.be/7gwc-1czolw?si=4dcLu82Wva2GY3kU 
