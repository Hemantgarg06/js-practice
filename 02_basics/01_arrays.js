// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktimaan", "nagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[3]);

// Array Methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);    //will convert all values of array in a string comma seperated
// console.log(typeof newArr);

//slice, splice

console.log("A", myArr);

// slice() creates a new array with a portion of elements copied from the original array
const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);

// splice() mutates the original array itself by removing, replacing or adding elements to it
const myn2 = myArr.splice(1, 3)
console.log("C", myArr);
console.log(myn2);

