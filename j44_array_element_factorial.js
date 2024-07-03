let arr=[1,2,3,4,5,6,7,8,9];
let fac=arr.reduce((pre_v,curr_v)=>{
    return pre_v*curr_v;
})

console.log("factorial from 1 to 9 is : ",fac)