// use logical operator to check age lies between 10 and 20
let age=18;
if(age>10 && age <20){
    console.log("your age lies between 10 and 20.")
}

// slove upper question using swtich case run below code in browser
// {
//     let age=prompt("what is your age ?");
//     prompt return a string
//      if(age=="4"){there are a string not a value}
//     switch (age) {
//         case (age>10 && age <20):
//             console.log("your age lies between 10 and 20.")
//             break;
//         default:
//             console.log("your age not lies between 10 and 20.")
//             break;
//     }
// }

// let age=prompt("what is your age ?");
//     switch (age) {
//         case "15":
//             console.log("your age lies between 10 and 20.")
//             break;
//         default:
//             console.log("your age not lies between 10 and 20.")
//             break;
//     }

// is number is divisible by 2 and 3
let num=78;
console.log(num," divided by 2 and 3 : ",(num%2==0 && num%3==0));

// is number is divisible by 2 or 3(using if else)
if((num%2==0 || num%3==0)){
    console.log(num," divided by 2 or 3");
}else{
    console.log(num," not divided by 2 or 3 : ");
}

// use ternary operator to define drive or not
console.log("You can ",(age>=18)?"drive":" not drive");