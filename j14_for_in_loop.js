// for in loop use to print key of a object and array
let a={
    1:"a",
    2:"b",
    3:"c",
    4:"d"
}
for(let key in a){
    console.log("key : ",key," and value : ",a[key]);
}

console.log();

let b=[2,3,4,5,6];
for(let key in b){// here key is index
    console.log(key);
}

