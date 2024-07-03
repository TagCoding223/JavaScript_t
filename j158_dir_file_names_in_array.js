const fs = require('fs')
// import fs from "fs"
const dirPath="../../Music"

fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.log(err);
        return
    }
    files.forEach(file => {
        console.log(file);
    });
})

// run command : node G:\vscode\JavaScript_t\j158_dir_file_names_in_array.js