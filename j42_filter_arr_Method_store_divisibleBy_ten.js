// use filter method of array that store those values they was divisible by ten and store in new array
let arr=[90,52,14,20,30,40,55,84,6,5,7,56,54,8,20,4560,610,48];
let ten_div=arr.filter((value)=>{
    return value%10==0;
})
console.log("those values divisible by zero : ",ten_div);