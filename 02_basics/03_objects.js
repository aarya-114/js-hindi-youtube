/*
OBJECT CAN BE CREATED USING 2 TYPES
1.as a literal............singleton nahi banta hai
2.using constructor........singleton banega
*/




// singleton==ensures a class has only one instance and provides a global point of access to that instance
// Object.create      //constructor through

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",    //cannot be access using dot method
    [mySym]: "mykey1",                  //[]use square bracket to treat it as a SYMBOL
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser["full name"])
// console.log(JsUser[mySym])    

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)                       //LOCK THE VALUES  
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);       //THIS
}

console.log(JsUser.greeting());
console.log(JsUser.greeting);
console.log(JsUser.greetingTwo());
/*
myinfo.greeting();	Executes the function and returns its output.

myinfo.greeting;	Returns the function itself (does not execute it).
the function itself is returned as a reference but is not executed.
This is because JavaScript treats functions as first-class objects,
*/
//In JavaScript, functions being first-class objects makes the language highly flexible and powerful.
//search for what id=s FIRST CLASS OBJECT
