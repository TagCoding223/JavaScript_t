// iife (immediately invoked function expression)
(()=>{
    console.log("i am invoked immediately!");
})();

let z =() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(500)
        }, 5000);
    })
}
// if any error occur in that code in browser with iife than use semicolon after end of above line
(async () => {
    let b = await z()
    console.log(b);
    let c = await z()
    console.log(c);
    let d = await z()
    console.log(d);
})()

// console.log(d); //ReferenceError: d is not defined

// when this block execution finished then js engine release memory of that block and variables  this variable scope not present outside this block 
// use to avoid global namespace (global a differ to local a), use with async , await , etc.)