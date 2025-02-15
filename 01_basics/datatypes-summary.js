//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions
// Non primitive ka data type function hota hai
const heros = ["shaktiman", "nagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof id);
console.log(typeof null);   //typeof null is object

// https://262.ecma-international.org/5.1/#sec-11.4.3

// *******************************************************

// Stack (Primitive), Heap (Non-Primitive)
// Stack me copy milta hai aur Heap me reference milta hai
let myYouTubeName = "HemantGargdotcom"

let anotherName = myYouTubeName
anotherName = "chaiaurcode"

console.log(myYouTubeName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Hemant@google.com"

console.log(userOne.email);
console.log(userTwo.email);