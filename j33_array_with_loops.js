let arr=[72,34,45,2,65,22,90]
// access array using for loop
for(let i=0;i<arr.length;i++){
    // console.log(arr[i]);
    process.stdout.write(arr[i].toString()+" ")//this line only print a string
}

console.log();

// for each 
// forEach(callbackfn: (value: number, index: number, array: number[]) => void, thisArg?: any): void
// A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
// Performs the specified action for each element in an array.
arr.forEach((element)=>{// element just a varaiable name so it can be changeable
    console.log(element);
})
console.log();
arr.forEach((element,index)=>{
    console.log(element," present at ",index," index.");
})

console.log();

// for of loop (valueable loop)
for(let value of arr){
    console.log(value);
}

// for in loop (key parssel loop)
for(let key in arr){
    console.log("key : ",key," and value : ",arr[key])
}

// of -> value and in -> key