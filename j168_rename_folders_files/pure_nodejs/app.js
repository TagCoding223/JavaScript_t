// .bat for window to run this utility
// .sh for mac
const fs = require('fs')
const path = require('path');


// const replaceThis = "vishal"
// const replaceWith = "kumkum"
let replaceThis
let replaceIt
let replaceWith
const preview = true // true just show changes not implement , false then implement
const folder = path.join(__dirname, '/Rename_folder');
// find where node js install cmd -> where node.exe
// paste those file in Rename_folder you want to rename
// when pass old name = * then apply on all 

renameFile = () => {
    fs.readdir(folder, (err, data) => {
        console.log(data);
        for (let index = 0; index < data.length; index++) {
            const item = data[index]
            let oldFile = path.join(folder, item)
            if(replaceThis=='*'){
                replaceIt=data[index]
            }else{
                replaceIt=replaceThis
            }
            let newFile = path.join(folder, item.replaceAll(replaceIt, replaceWith))
            if (!preview) {
                fs.rename(oldFile, newFile, () => {
                    console.log(`Rename success " ${item} " to " ${newFile} "`);
                })
            } else {
                if (folder + "/" + item !== newFile) {
                    console.log(`" ${folder}\\${item} "\n will be renamed to \n" ${newFile} "\n`);
                }
            }
        }
    })
}



(async () => {

    // read user input using nodejs -> cli.js
    const {readArg}= await import('./cli.js')
    replaceThis = await readArg("Old file name (use * to select all files) : ")
    console.log(replaceThis);

    replaceWith = await readArg("New file name : ")
    console.log(replaceWith);

    // files/folder rename code
    try {
        renameFile()
    } catch (error) {
        console.log(error);
    }
})()

