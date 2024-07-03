const mongoose = require('C:/Users/a1/AppData/Roaming/npm/node_modules/mongoose');


const connectDB= (uri)=>{
    return mongoose.connect(uri)
    // return mongoose.connect(uri,{
    //     useNewUrlParser:true,
    //     useUnifiedTopology:true,
    // })
}

module.exports=connectDB