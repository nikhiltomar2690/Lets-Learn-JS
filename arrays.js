// intro to arrays

let anime = ['Demon slayer', ' Dragon Ball Super','Naruto','Jujustu Kaisen']
// console.log(anime)

// accessing specific elements by index
// console.log(anime[2])

// Js array can store any type of data items together
let mixed = ['string',23,undefined,null];
// console.log(mixed)

// replacement so easy 
anime[0]= "Tokyo revengers"
let obj = {} //object literal
// console.log(anime)

// array is object data type
// console.log(typeof anime)
// console.log(Array.isArray(anime)) //specifically tells whether it is array
// console.log(Array.isArray(obj))
// console.log(typeof obj)

// array methods
// push pop 
// shift unshift

let cartoon = ['Doraemon','Chota bheem','Pokemon']

// cartoon.push('Naruto') // adds an element to the last 
// console.log(cartoon)
// cartoon.pop() //deletes the last element
// console.log(cartoon)
// let deleted = cartoon.pop()
// console.log(deleted)

// shift -- deletes first element 
// unshift -- adds an elements at first

//  cartoon.unshift("DBZ");
//  console.log(cartoon)

// cartoon.shift()
// let removed = cartoon.shift()
// console.log(removed)
// console.log(cartoon)

//push pop faster than shift unshift bcoz push-pop simply can add/remove from last 
// but shift-unshift replaces all elements from their place which takes time

//  slice
// console.log(cartoon.slice(0,2))
// last index is not included 

//clone array
//cloning is done to stop reflect changed values in the copied array
//method 1
// let array1= [1,2,3,4]
// let array2 = array1.slice(0);
//slice array from 0th index to last index
// this is how we can stop changes in the other arrays even while cloning

// array1.push(11);
// console.log(array1)
// console.log(array2)

// method 2
// let arr2 = [].concat(array1);
//add in empty array the array you wanted
// array1.push(21);
// console.log(array1)
// console.log(arr2)

//method 3 new+easy
//using spread operator

// let array1= [1,2,3,4]
// let arr2 = [...array1] //spread original array elements in clone array
// array1.push(21);
// console.log(array1)
// console.log(arr2)

//out of these 3 slice is best performer
//but developers mostly use spread operator

//adding extra data items 
//using slice + concat
let array1= [1,2,3,4]
// let arr2 = array1.slice(0).concat([69])
// console.log(arr2)

// using only concat
let urr2 = [].concat(array1,[21,123])
// console.log(urr2)

//using spread operator
let ar2 = [...array1,233,696]
// console.log(ar2)

// 2 array merge into 1

let sm1= [1,2,3]
let sm2 = [4,5,6]
let sm = [...sm1,...sm2]
// console.log(sm)

//for loop in array 
// for(let i=0;i<sm.length;i++){
//     console.log(sm[i])
// }

let rr = []
for(let i=0;i<sm.length;i++){
    rr.push(sm[i]);
    // console.log(`pushing ${sm[i]}`)
}

console.log(rr)