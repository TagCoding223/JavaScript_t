// toString() method : convert array into string
let arr=["hello","my","name","is","vishal"]
let str=arr.toString();
console.log(str, typeof str);

// join method : joined array element withhelp of a character and return a new string
str=arr.join(" ");
console.log(str, typeof str);

// pop method : update orignal array and delete element from end and return deleted element
let d=arr.pop();
console.log("current array : ",arr," and poped return : ",d," or type is : ",typeof d)

// push method : update original array and insert element from end and return new length of the array 
// Appends new elements to the end of an array, and returns the new length of the array.
let c=arr.push("welcome");
console.log("current array : ",arr," and push return : ",c," or type is : ",typeof c)

// shift method : Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
c=arr.shift();
console.log("current array : ",arr," and shift (deleted) return : ",c," or type is : ",typeof c)

// unshift method : Inserts new elements at the start of an array, and returns the new length of the array.
c=arr.unshift("joker");
console.log("current array : ",arr," and unshift return : ",c," or type is : ",typeof c)

// delete operator
delete arr[2];
console.log(arr);// return [ 'joker', 'my', <1 empty item>, 'is', 'welcome' ]
console.log(arr.length) // when we use delete operator to delete a element then , element will be deleted but there place hold "<1 empty item" that's why array length not affected when we use delete opertor

// concat method : Combines two or more arrays. This method returns a new array without modifying any existing arrays.
arr=["hello","my","name","is","vishal"]
let arr1=["i","am","very","happy"]
let arr2=["because","today","is","holi"]
let n_arr=arr.concat(arr1,arr2);
console.log("arr is : ",arr)
console.log("arr1 is : ",arr1)
console.log("arr2 is : ",arr2)
console.log("n_arr is : ",n_arr)

// sort method : sort as a file name update current array
// Sorts an array in place. This method mutates the array and returns a reference to the same array.If omitted, the elements are sorted in ascending, ASCII character order.
arr1=[34,24,11,90,1,19,27,3,89,6,67,87,9,94]
arr.sort() // result -> [ 'hello', 'is', 'my', 'name', 'vishal' ]
arr1.sort() // result -> [1, 11, 19, 24, 27, 3, 34, 6, 67, 87, 89, 9, 90, 94]

console.log("sort method : ",arr);
console.log("sort method : ",arr1)

// sort as number wise using compare function
let compare=(a,b)=>{
    return a-b;
}

// [11,2,22,1].sort((a, b) => a - b)

arr1.sort(compare); // result -> [ 1,  3,  6,  9, 11, 19, 24, 27, 34, 67, 87, 89, 90, 94 ]
console.log("sort method as number wise : ",arr1)

// reverse method : Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array. update current array
arr1.reverse();
console.log("reverse method : ",arr1);
