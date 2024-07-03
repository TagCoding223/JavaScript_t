const fs = require('fs');
const path = require('path');
const folder = path.join(__dirname, '/Rename_folder');
const preview = true // true just show changes not implement , false then implement
let replaceIt

dirRead = async () => {
    return fs.readdirSync(folder);
}

fsFileRen = async (oldFile, newFile, item) => {
    return fs.rename(oldFile, newFile, () => {
        console.log(`Rename success " ${item} " to " ${newFile} "`);
        // set[index]=`Rename success " ${item} " to " ${newFile} "`;
    })
}

mainRun = async (replaceThis, replaceWith) => {
    let set = []
    let data = await dirRead()
    // console.log(data);
    for (let index = 0; index < data.length; index++) {
        const item = data[index]
        let oldFile = path.join(folder, item)
        if (replaceThis == '*') {
            replaceIt = data[index]
        } else {
            replaceIt = replaceThis
        }
        let newFile = path.join(folder, item.replaceAll(replaceIt, replaceWith))
        if (!preview) {
            await fsFileRen(oldFile, newFile, item)
        } else {
            if (folder + "/" + item !== newFile) {
                console.log(`" ${folder}\\${item} "\n will be renamed to \n" ${newFile} "\n`);
                // set[index]=`" ${folder}\\${item} "\n will be renamed to \n" ${newFile} "\n`;
            }
        }
    }

}

renameFile = async (replaceThis, replaceWith) => {
    await mainRun(replaceThis, replaceWith)
}

module.exports = { renameFile }