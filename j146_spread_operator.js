// spread operator -> array convert into an object with number as a key start with zero
// use 1
let arr=[1,2,3,4,5]
let obj={...arr}
console.log(obj);
console.log(`typeof(obj) : ${typeof(obj)}`);

// use 2 => i think this use is not a part of spread operator 50-50
function sum(...args){
    let sum=0
    console.log(`typeof(args) : ${typeof(args)}`); // args is an object
    args.forEach((Element)=>{
        sum=sum+Element
    })
    return sum
}

console.log(`sum of 1,2,3 : ${sum(1,2,3)}`);
console.log(`sum of 1,2,3,4 : ${sum(1,2,3,4)}`);
console.log(`sum of 1,2,3,4,5 : ${sum(1,2,3,4,5)}`);

// use 3
function multiplication(v1,v2,v3){
    return v1*v2*v3
}

console.log("pass arr in multiplication function : ",multiplication(...arr));// result is 6 because 1,2 and 3 pass as a arguments to function and other values are ignored

// use 4
let obje={
    name:"vishal",
    section:"M16"
}
console.log({...obje,name:"kumkum"});
// print with changes (mostly used in react and node js ) in that statement values comes first and then you override it.
console.log({name:"vishal",...obje});
// object vaues override given constant values(name can't change , print object name) no override in that case