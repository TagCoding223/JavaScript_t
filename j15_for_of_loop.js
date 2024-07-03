// for of loop use to print value of an object and array
const a={
    1:"a",
    2:"b",
    3:"c",
    4:"d"
}

// TypeError: a is not iterable
// for(let value of a){
//     console.log(value);
// }

let c={
    1:"a",
    2:"vishal",
    3:"c",
    4:"d"
}

for (let value of "vishal"){
    console.log(value);
}

console.log();

let b=[2,3,4,5,6];
for(let value of b){
    console.log(value);
}