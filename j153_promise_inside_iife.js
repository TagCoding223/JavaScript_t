let a = (text) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text)
        }, 2000)
    })
}


(async () => {
    console.log(await a("hello"));
    console.log(await a("world"));
})()