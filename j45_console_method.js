// script file is much better then script tag , reason
// 1 -> separation of concerns
// 2 -> Browser cashing (when browser load a site then browser store js file of site to improve browser experitions and reduce load time when js file size is too big and js file hass no changes)
// not allow look like that
// <script src="script.js">
//     console.log('hello');// this line can be ignore by browser (browser depented)
// </script>

// console object methods
// console.log(typeof console);//object
// console.log(console);// display all method of console object

// assert() method :
console.assert(5>4);// when condition is true nothing happen
console.assert(5<4);// when condition is false then display in console like taht -> Assertion failed

// clear() method
// console.clear(); clear console

// console.error()
console.error("hi i am an error")

// console.warn()
console.warn("it is a warning");

// Console.table()
console.table(console);
let a={
    1:"a",
    2:"b",
    3:"c",
    4:"d"
};
console.table(a);

// console.info()
console.info("this is info");

// console.time() start time counting
console.time("forLoop");// "foLoop" is label
for (let index = 0; index < 100; index++) {
}
console.timeEnd("forLoop");