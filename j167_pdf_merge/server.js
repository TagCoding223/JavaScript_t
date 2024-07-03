const express = require('C:/Users/a1/AppData/Roaming/npm/node_modules/express');
// import express from 'file://C:/Users/a1/AppData/Roaming/npm/node_modules/express/index.js'
const app = express()
const multer = require('C:/Users/a1/AppData/Roaming/npm/node_modules/multer')
// import multer  from 'file://C:/Users/a1/AppDa?ta/Roaming/npm/node_modules/multer/index.js'
const upload = multer({ dest: 'uploads/' })
const bodyParser = require('C:/Users/a1/AppData/Roaming/npm/node_modules/body-parser');
const path = require('path')
const fs = require('fs')

const publicDIR = './public'
const uploadsDIR = './uploads'
let public_filename
let uploads_filename
let curr_Time
// DELETE FILES ON SERVER AFTER AN INTERVAL (only 3 file at a time)

readDirFile = async (Dir) => {
    return fs.readdirSync(Dir)
}


setInterval(async () => {
    curr_Time = new Date().getTime() - 60000 // currenttime - 1 min (i delete those file they create before 1 min from current time)
    console.log("curr_time : ", curr_Time);
    curr_Time = curr_Time.toString()
    console.log("curr_time : ", curr_Time);
    // public_filename =await fs.readdirSync(publicDIR)// readdirSync is a async function means return a promise after its fullfillmend
    public_filename = await readDirFile(publicDIR)// readdirSync is a async function means return a promise after its fullfillmend
    // uploads_filename = fs.readdirSync(uploadsDIR)
    uploads_filename = await readDirFile(uploadsDIR)
    console.log("Those files deleted from server,");
    console.log("Files in public DIR ,");


    for (let i = 0; (public_filename[i] == undefined) ? false : public_filename[i].replace('.pdf', '') < curr_Time; i++) {

        fs.unlink(`${publicDIR}/${public_filename[i]}`, (err) => { // this is a promise by system -> i'm going to delete file when i'm delete it then i inform you
            if (err) {
                console.log(err);
                return
            }
            console.log(`File '${public_filename[i]}' deleted successfully.`);
        })

    }

    // in this algorithm file store it sever for 2 min(file servive time is 2 min , because invoke after 1 min and delete from current time - 1min)(servive time depend on many factor )(in simple word when cleanup call then those file deleted those created 1 min before )

    console.log("Files in uploads DIR ,");
    for (let i = 0; i < uploads_filename.length - 2; i++) {
        if (uploads_filename[i] != undefined) {
            fs.unlink(`${uploadsDIR}/${uploads_filename[i]}`, (err) => {
                if (err) {
                    console.log(err);
                    return
                }
                console.log(`File '${uploads_filename[i]}' deleted successfully.`);
            })

        }
    }
}, 60000) // 1min 
// this delete file algorithm is static algorithm beacuse it delete a number of set files they are 3 we need to compare public folder file to current time and delete previous time files they are created before current time (use substr at . point)


// import path from 'path'

// import mergePDFs from './merge.js'

// const mergePDFs = require('./merge.mjs')

app.use(bodyParser.urlencoded({ extended: false }))
const PORT = 3000

// server static files
app.use('/static', express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "./templates/index.html"))
})
redirectMe = async (res, filename) => {
    res.redirect(`http://localhost:3000/static/${filename}.pdf`)
}
app.post('/merge', upload.array('pdfs', 2), async (req, res, next) => {
    console.log(req.files);
    if (req.files.length == 0 || req.files.length==1) {
        res.status(404).send("No file Selected.")
    } else {
        console.log(req.body.filename);
        const { mergePDFs } = await import('./merge.mjs')// this is dynamic import it use when a nodejs project use require and import both but package.json not have 'type':'module' 
        // in that codition pdf-merge-js package only accept import that why we need to change merge.js to merge.mjs(module js) and need to use it with dynamic import 

        await mergePDFs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path), req.body.filename) // this is return a promise and we cant redirect without file creation
        console.log(req.body.filename);
        // res.redirect(`http://localhost:3000/static/${req.body.filename}.pdf`)
        await redirectMe(res, req.body.filename)
        // res.send({data:req.files})
        // res.send({data:req})
    }
})

app.all('*', (req, res) => {
    res.status(404).send("<h1>Error : 404 , File not Found</h1>");
})

app.listen(PORT, () => {
    console.log("Server running on http://localhost:3000")
})