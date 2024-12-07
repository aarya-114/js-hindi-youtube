const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//arrays in array **************
// marvel_heros.push(dc_heros)  
// const allHeros = marvel_heros.concat(dc_heros)    //concaet and GIVE NEW ARRAY

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]   //usuage of SPREAD

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] 

const real_another_array = another_array.flat(Infinity)   //FLAT
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) 

console.log(Array.from("Hitesh"))     //CONVERT INTO ARRAY
console.log(Array.from({name: "hitesh"})) // interesting CASE *******

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


/*
Array.of
Purpose: Creates an array from the arguments provided.
Behavior: Treats each argument as a separate array element. 
This is useful when you want to create an array from individual values.

Array.from
Purpose: Converts array-like or iterable objects into arrays.
Behavior: It creates a real array from:
Strings
Array-like objects (e.g., objects with length property)
Iterables (e.g., Set, Map, or arguments object)
*/
