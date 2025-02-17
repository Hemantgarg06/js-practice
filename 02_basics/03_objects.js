// Objects ko declare karne k do tareeke hai ek hai literals ki trh aur ek constructor ki trh
//singleton : constructor se bnega to hmesha singleton hi bnega
//Object.create

//jab literals ki trh declare krte hai to singleton nhi bnta hai

// Object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hemant",
    "full name": "Hemant Garg",
    [mySym]: "mykey1",  //a symbol key
    age: 23,
    location: "Ghaziabad",
    email: "Hemant@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

JsUser.email = "Hemant@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Hemant@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




