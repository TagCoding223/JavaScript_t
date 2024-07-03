// const PDFMerger = require('C:/Users/a1/AppData/Roaming/npm/node_modules/pdf-merger-js');
// PDFMerger.default()
import PDFMerger from "file://C:/Users/a1/AppData/Roaming/npm/node_modules/pdf-merger-js/index.js"
// const {PDFMerger} = require('pdf-merger-js');
// import PDFMerger from 'pdf-merger-js/index.js'

var merger = new PDFMerger();

export const mergePDFs= async (p1,p2,d)=>{
    await merger.add(p1)
    await merger.add(p2)
    await merger.save(`public/${d}.pdf`)
    await merger.reset()// this line reset the object means remove previous merged files for new files
    // for more options visit npm pdf-merge-js
}

