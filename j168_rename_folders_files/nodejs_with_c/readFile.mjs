// const fs = require('fs');
import fs from 'fs'

export const nameFromFile=async ()=>{
    return fs.readFileSync('./filename.txt','utf-8')
}
// module.exports={nameFromFile}