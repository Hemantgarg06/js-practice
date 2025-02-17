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

// console.log(twitterUser);

// console.log(Object.keys(twitterUser));  //important
// console.log(Object.values(twitterUser));
// console.log(Object.entries(twitterUser));

// console.log(twitterUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor  
// we can also use below method to access
// const {courseInstructor} = course
// console.log(courseInstructor);

//OR if we want a smaller name we can use below one
const {courseInstructor: instructor} = course   //Destructuring of Object

console.log(instructor);

//This is a react concept just for idea 
// const navbar = ({company}) => { //Destructuring

// }
// navbar(company = "Hitesh")


// jSON

// {
//     "name": "Hemant",
//     "coursename": "Js in Hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]