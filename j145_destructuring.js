// destructuring
let arr=[3,5,6,7,8,9,10,11,12]

let [a,b]=arr // a and b store first and second value and ignore other values , a and b are different variables
console.log("a : ",a);
console.log("b : ",b);

let [x,y,z,...remain]=arr
console.log("x : ",x);
console.log("y : ",y);
console.log("z : ",z);
console.log("remain : ",remain);// remain is an array that store remain values of arr

let [m,,n,,o,...f]=arr// skip index values
console.log("m : ",m);
console.log("n : ",n);
console.log("o : ",o);
console.log("f : ",f);

let {p,q}={p:1,q:2} // name will be same on both side
// let {p,q}={a:1,b:2}  // values are undefined
console.log("p : ",p);
console.log("q : ",q);
console.log("typeof(p) : ",typeof(p));

let obj={g:1,b:2,h:3,d:4,i:5,f:6,g:7,h:8}
// let {g,,h,,i,...remain1}=obj // SyntaxError: Unexpected token ',' when you try this type of destructuring on objects
let {g,h,i,...remain1}=obj
console.log("g : ",g);
console.log("h : ",h);
console.log("i : ",i);
console.log("remain1 : ",remain1);//remain1 is an object of remain key value paires
console.log("typeof(remain1) : ",typeof(remain1));