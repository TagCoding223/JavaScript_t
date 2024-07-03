// array intro
let a=[11,54,23,56];
console.log(a)

// save different datatype in sigle string
let b=[12,null,"hello",BigInt("73646"),undefined];
console.log(b)
// also access using index
console.log("access using index ",b[2])
// if index not exists then print undefied
console.log("100 index not present then ",a[100])

// length propties give number of elements
console.log("number of item in array b : ",b.length)

// adding a value
b[5]="mango";
// update a value
b[1]=65;
console.log(b)
// array is mutable

console.log(typeof a,typeof b) // array is a object

// array is a collection of multiple items
// array use to add multiple item in single variable