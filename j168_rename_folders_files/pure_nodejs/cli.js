// user input using command line
const readline = require('readline');
const readArg = (query)=> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    return new Promise(resolve=>rl.question(query,ans=>{
        rl.close()
        resolve(ans)
    }))
}

module.exports={readArg}