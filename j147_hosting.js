// hosting in js : use first but declare later
// js engine work like that it put all declareation it top(interpreter)

greet()
function greet(){console.log("good morning");}
// code like that but when js interprreter execute it then we imaginate js engine put decalartion it first at top after call it 
// its work with declared variable not be initiaztion

console.log(a); // if below line not exsits then ReferenceError: a is not defined but if exsit then undefined
var a=6
// let a // throw error ReferenceError: Cannot access 'a' before initialization
// const a=6 //ReferenceError: Cannot access 'a' before initialization
console.log(a);

// decalration hosted but initialization not

// let and var has different behaviour on hosting when we change var to let we see variable go to tempory dead zone something happen with const

// declareation hosted at the top when you see let or const , but not be initilaztion (variable goes to tempory dead zone)
// also declareaction will be but not be initilazation

// function expretion and class expretion are not be hosted
// let/const/var a=()=>{}
// let/const/var a=class A{}
// not allow
console.log("j : ",j);//undefined
var j=()=>{console.log("jio");}
// let j=()=>{console.log("jio");} // ReferenceError: Cannot access 'j' before initialization ,same error comes with const