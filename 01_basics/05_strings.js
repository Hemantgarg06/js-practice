const name = "Hemant"
const repoCount = 50

// console.log(name + repoCount + "Value");  // not recommended at all

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String ('Hemant-hg-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "   Hemant     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hemant.com/hemant%20garg"
console.log(url.replace('%20', '-'))

console.log(url.includes('hemant'))

console.log(gameName.split('-'))



