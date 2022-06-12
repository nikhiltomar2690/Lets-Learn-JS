// primitive vs ref data types

//primitive behaviour
// primitive data types creates diff data items and works on their personal values
let num1 =2
num2=num1;
// console.log(num1)
// console.log(num2)
num1++;
// value doesnt change in one
// after incremementing 1 in num1
// console.log(num1)
// console.log(num2)
//values unchanged


//reference behaviour
// after change ref data types take values and reflect change in themself
// ref data types works on address basis
let arr1 = [1,2,3,4,5];
let arr2= arr1;
console.log("Printing")
console.log(arr1)
console.log(arr2)
arr1.push(22);
// printing after changing values
console.log(arr1)
console.log(arr2)
//values changed 
