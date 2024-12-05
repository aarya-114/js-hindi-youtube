
//comparison    > >= < <= == !=


// console.log("2" > 1);   TRUE
// console.log("02" > 1);  TRUE
//Sometime didnt give predictable result ....necessary to check the datatype

// console.log(null > 0);    false 
// console.log(null == 0);   false
// console.log(null >= 0);   true


/*******
equality heck == and comparison check works differently
comparison convert null to number,treating as a 0
**********/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===  strict check...chevck VALUES & DATATYPES

console.log("2" === 2);
