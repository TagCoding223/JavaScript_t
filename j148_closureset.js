// closureset : function return with its lexical environment
// when you return a function from inside a function then return function hold its lexical environment

function hello(){
    let c=89//let has block level scope
    console.log(`hello inside c : ${c}`);
    let d=()=>{
        console.log(`inside function d with value c is : ${c}`);
    }
    return d
}

let g=hello()
g()

// when we return d then it hold its lexical environment and return with it
// d is a closure