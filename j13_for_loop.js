let num=9;
for(let i=0;i<num;i++){
    console.log(i)
}
// console.log(i); that throw an error because i scope belongs to for loop block
// run in browser
// let num=prompt("Enter a Number !")
// for(let i=0;i<num;i++){
//     console.log(i);
// }


console.log();
for(var i=0;i<num;i++){
    console.log(i)
}
console.log(i); // here i is a global variable


// sum of first natural numbers
// let a=prompt("Enter a number");
// a=Number.parseInt(a);
let a=5;
let result=0;
for(let i=1;i<=a;i++){
    result=result+i;
}
console.log("sum of first natural numbers is : ",result);