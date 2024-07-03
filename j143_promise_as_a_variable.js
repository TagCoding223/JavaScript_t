let a = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(400)
    }, 4000);
})
// in taht program b,c,d print at same time because a is a variable that a constant resolved promise but if we convert it into a function return a promise then each time a new promise resolved
let z =() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(500)
        }, 5000);
    })
}
let f = async () => {
    let b = await a
    console.log(b);
    let c = await a
    console.log(c);
    let d = await a
    console.log(d);
}
f()

let x = async () => {
    let b = await z()
    console.log(b);
    let c = await z()
    console.log(c);
    let d = await z()
    console.log(d);
}
x()
