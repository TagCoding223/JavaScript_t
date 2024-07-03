let arr=[11,22,33,44,55,66,77,88,99];
// splice method : splice(where(index),how much remove,add elements); update current array
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// @returns — An array containing the elements that were deleted.
console.log("length of arr : ",arr.length)
let result=arr.splice(2,3,333,444,555,666,777);//return deleted element as an array
console.log("arr : ",arr,"\nresult : ",result,"\ntype of result : ",typeof result)
console.log("length of arr : ",arr.length)


// slice method : slice an array from given index and return a new array cannot update current array
let arr1=arr.slice(5);// from to end
let arr2=arr.slice(3,7);// from to n-1
console.log(arr)
console.log(arr1)
console.log(arr2)


