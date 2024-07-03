// before ES6 variable declare using var
// avoid the use of var because it make bug in program
// const use to create a constant variable
// let use to create a variable that scoped block level
// var use to create a variable that scoped global level 
// const scoped block level

var a="vishal";
{ //  block
    var a="this"; // change global a
    console.log(a);
}
console.log(a);

let b="joker";
{
    let b="manish"; // this is block level variable
    console.log(b);
}
console.log(b);

// In var we redeclare variable but in let we cannot re-declare a variable

var c="many";
var c=89;

// below two lines show error
// let d=78;
// let d="hello"; // try to redeclare (that statement say to system create a new variable ,but system deny it and dsispaly error because d is already define in memory)

// let allow typecasting and update at runtime but deny redeclaretion 
b=45; // allow upadte (that statment say to system if b is not decalre in memory then create new otherwise create a new variable in memory)

const author="vishal";
// author="hello";// const cannot be update and redcalre in complete program

// const need initilaization it time of creation otherwise error
// const time; // 'const' declarations must be initialized.


// summary
/*
let -> update and typecasting allow , deny redecaletion
var -> allow update , typecasting and redecaletion
const -> deny update , typecasting and redecaletion and need decalration it time of creation
*/