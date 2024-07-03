// craete a new array those store square of orginal array elements
let arr=[1,2,3,4,5,6,7,8,9];

const square=(value)=>{
    return Math.pow(value,2)
}
// by map
let sq1=arr.map((value)=>{
    return square(value);
})

console.log("(using map)square of each number from 1 to 9 : ",sq1);

// by filter (not square pass , original value pass in new array)
let sq2=arr.filter((value)=>{
    value=square(value);
    return true;
})
console.log("(using filter)square of each number from 1 to 9 : ",sq2);
// result :
/*
(using filter)square of each number from 1 to 9 :  [
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/