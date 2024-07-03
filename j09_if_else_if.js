// singal if
let age=80;
// if block execute when condition is true
if(age>65){
    console.log("It's time to take rest.");
}

// if-else block execute any one if true or not 
if (age==100) {
    console.log("Congratulations for century"); 
} else {
    console.log("A long age is waiting for you !");
}

// if else-if block check another condition if persent is false , if present condition is true then execute block and skip other block(only one block one)
if(age<18){
    console.log("your are a kid");
}else if(age==18){
    console.log("ready for test drive");
}else if(age>18){
    console.log("Now you apply for dl"); // if condition is true execute block and skip complete block without check condition
}else if(age>=50){
    console.log("you need eye test");
}else if(age>70){
    console.log("you are not eigible to drive");
}else{
    console.log("your age not belongs to rto rlues");
}