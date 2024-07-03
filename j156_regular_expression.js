// regxr.com
const regex=/very/g
// g -> global
const text="i am very very most very bad very bad boy"
console.log(text.replace("very","VERY"));
console.log(text.replace(regex,"VERY"));