let a = (text,n=2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, 1000*n)
    })
}
// if any error occur in that code in browser with iife than use semicolon after end of above line

(async () => {
    console.log(await a("hello"));
    console.log(await a("world",4));
})()

// simple intrest (p*r*t)100