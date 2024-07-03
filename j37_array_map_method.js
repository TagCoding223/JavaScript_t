let arr=[1,2,3,4,5,6,7,8,9];
// map(callbackfn: (value: number, index: number, array: number[]) => any, thisArg?: any): any[]
// A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
// Calls a defined callback function on each element of an array, and returns an array that contains the results.
arr.map((a,index,array)=>{
    // console.log(value,index,array);
    process.stdout.write(a.toString()) // that run onlt for string
})

const power_x=(value)=>{
    return Math.pow(value,2)
}

let new_arr=arr.map(value=>{
    // return Math.pow(value,2);
    // power_x(value); in that statement all value of new array is undefined
    return power_x(value)
})
console.log("\nx power of 2 from 1 to 9 is ",new_arr);
console.log("cannot modify orignal array : ",arr)

// one parameter is necessary using map() method in value,index,array(they are just a variable name so it can be changeable)