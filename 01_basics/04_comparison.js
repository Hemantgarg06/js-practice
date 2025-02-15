// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

//The reason is that an equality check == and comparisons >, <, >=, <= works differently. 
// Comparisons convert null to a number, treating it as 0.
// That's why in 3rd null >= 0 is true and 1st null > 0 is false.

// console.log(null > 0);  //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

console.log(undefined > 0);  //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false
