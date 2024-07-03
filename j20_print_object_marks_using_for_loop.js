// use for loop to print marks of a object
let a={
    aman:90,
    dyak:87,
    lakan:34,
    manish:76
}

for(let i=0;i<Object.keys(a).length;i++){
    console.log("marks of ",Object.keys(a)[i]," is : ",a[Object.keys(a)[i]]);
}

console.log(Object.keys(a)) // pass a array of keys of object
console.log(Object.keys(a).length)