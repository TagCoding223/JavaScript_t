// .bat for window to run this utility
// .sh for mac
// const fs = require('fs')

// const {nameFromFile} = require('./readFile.mjs')
// const {renameFile}=require("./renameFile.js")

// off preview and want change implement then open renameFile.js and change preview to false

(async () => {

    // read user input that store in readFliename.txt
    const {nameFromFile} = await import('./readFile.mjs')
    renFileNames = await nameFromFile()
    // console.log(renFileNames);
    // console.log(typeof(renFileNames))
    renFileNames=renFileNames.replace('\r\n','\n');
    renFileNames=renFileNames.replace('\r\n','\n');
    renFileNames=renFileNames.split('\n')
    // console.log(renFileNames);
    
    // files/folder rename code
    try {
        const {renameFile} = await import('./renameFile.js')
        // console.log("App :",renFileNames[0],renFileNames[1]);
        await renameFile(renFileNames[0],renFileNames[1])
    } catch (error) {
        console.log(error);
    }
})()
