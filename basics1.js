// template string

let nm = "Nikhil";
let age = 13;

let info = `my name is ${nm} and my age is ${age}`;
// console.log(info)

// undefined
var fname
// console.log(typeof fname)

// null
var nan = null;
// console.log(typeof nan)
// typeof null is object , its a bug and is ignored bcoz of already built code bases 

// BigInt
// Biginit new added in 2020
let mynum = BigInt(1213)

// n can added at end to show it is Bigint
let samenum = 1213n;

// console.log(typeof mynum)
// console.log(mynum+samenum)
// console.log(typeof samenum)

// max_safe_integer is used to find max integer limit
// console.log(Number.MAX_SAFE_INTEGER)

// booleans and comparison operators

let num1 = 112;
let num2 = "112";

// console.log(num1>num2)
// console.log(num1<num2)

//  == vs ===
// == just checks the values
// === checks both values and datatypes

// console.log(num1==num2)

// console.log(num1===num2)

//  != vs !==
// console.log(num1!=num2)
// console.log(num1!==num2)

