// array
//mixed datatypes
//resizable array
//when copy operation is done ===>shallow copy (by refernce)


/*
WHEN DO WE GET PROTOTYPE?....AND WHAT IS PROTOTYPE
*/

const myArr = [0, 1, 2, 3, 4, 5,"true","hello"]   //can accept all datatypes element in an array
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice
/*
DIFF IN SLICE AND SPLICE
SPLICE==>include last number element
         and make changes in original element
*/



const a1=[1,2,3,4,5];
console.log(`a1=> ${a1}`)
const sliced=a1.slice(1,3)
console.log(`slice =>${sliced}`)
const b1=a1;
console.log(`b1=>${b1}`);
const spliced=b1.splice(1,3)
console.log(`splice =>${spliced}`)
console.log(`b1=>${b1}`);




console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);
