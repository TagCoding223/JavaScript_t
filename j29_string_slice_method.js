// slice method slice a string from given index and return a new string
let a="please give me RS 1000";
let b="please give me RS 1000 from your bank";

// let amount=a.slice(a.length-4);
let amount=Number.parseInt(a.slice(a.length-4));
let amount1=b.slice(b.length-19,b.length-19+4);

console.log(amount,typeof amount);
console.log(amount1,typeof amount1);

a[4]="oop";// this line not make any sence because its not make changes in orignal string because string is immutable
console.log(a);