// 
function init(){
    let name="mozilla"
    function displayName(){
        // displayName() is The inner function , a closure
        console.log(name); // use variable, declare in the parent function
    }
    // displayName() // when we use it then c is not a function and c is undefiend
    name="kumkum"
    // when a closure return then return the reference of lexical environment variable nt be hard core value
    return displayName
}
let c = init()
// console.log(c);
c()