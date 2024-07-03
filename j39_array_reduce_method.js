let arr=[1,2,3,4,5,6,7,8,9];
// reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number): number
// A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

// do not use reduce method for display array elements

const sum=(perviousValue,currentValue)=>{
    return perviousValue+currentValue;
}

function multi(a,b) {
    return a*b;
}

let a=arr.reduce((perviousValue,currentValue)=>{
    // return perviousValue+currentValue;
    return sum(perviousValue,currentValue);
})

// also use like this
let b=arr.reduce(multi);

console.log("sum from 1 to 9 : ",a);// not return an array its return a value
console.log("multiplication from 1 to 9 : ",b);
console.log("cannot modify orignal array : ",arr)

// one parameter is necessary using redues() method in previous_value,current_value,index,array(they are just a variable name so it can be changeable)


// flowchart of reduce method

// at start index
// perviousValue hold index 0 value
// and currentValue hold index 1 value
// pass a single value after preforming operation to reduce method that use in next iteration

// at next iteration
// pass value in previous iteration store in perviousValue
// and currentValue hold index 2 value
// pass a single value after performing operation to reduce method that use in next iteration
// .
// .
// .
// at last iteration
// pass value in previous iteration store in perviousValue
// and currentValue hold last index value
// and perform operation and pass result value to a variable

