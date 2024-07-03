// JavaScript has two type of datatpyes
// Primitive datatype -> 7 types -> bbssnnu( boolean , bigint , symbol , string , null , number , undefined )
// Non-Primitive datatype -> objects , array

// primitive datatype
let a=true;
let b=BigInt("673636");
// let b=BigInt("673636")+BigInt("4");
let c=Symbol("hi , i am nice symbol");
let d="vishal";
let e=null;
let f=78;
let g=undefined;
let h; // undefined

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log(h);

// find type of a variable
console.log("type of b : ",typeof b);

// Object in Javascript (js object know as a dictionary)

const marks={
// key : value
    aman:56,
    "durgas":89, // double qoutes not nessecary
    nman:76,
    abimanu:90
}

console.log(marks["nman"]); // when print object by key necessary to use double qoutes
console.log(marks);
console.log(typeof marks);
