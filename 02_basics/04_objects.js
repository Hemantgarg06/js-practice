// const twitterUser = new Object()    //singleton object
const twitterUser = {}   //non-singleton object, otherwise no internal difference 

twitterUser.id = "123abc"
twitterUser.name = "Sam"
twitterUser.isLoggedIn = false

// console.log(twitterUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Hemant",
            lastname: "Garg"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3   = {obj1, obj2} //wrong
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }    
]

users[1].email

console.log(twitterUser);

console.log(Object.keys(twitterUser));  //important
console.log(Object.values(twitterUser));
console.log(Object.entries(twitterUser));

console.log(twitterUser.hasOwnProperty('isLoggedIn'));

