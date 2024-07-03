let arr=[1,2,3,4,5,6,7,8,9];
// A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
// Returns the elements of an array that meet the condition specified in a callback function.

arr.filter((value,index,array)=>{
    console.log(value,index,array)
})

function isPass(value){
    return (value%2==0)?true:false;
}

let new_arr=arr.filter((value)=>{
    // return value%2==0;// when a statement is true for an element then it pass to a new array
    return isPass(value)
})
console.log("\nnumber those divisible by 2 : ",new_arr);
console.log("cannot modify orignal array : ",arr)

// one parameter is necessary using filter() method in value,index,array(they are just a variable name so it can be changeable)