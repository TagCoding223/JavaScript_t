const mongoose = require('C:/Users/a1/AppData/Roaming/npm/node_modules/mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"title must be provided"],
    },
    news_link:{
        type:String,
        required:[true,"news_link must be provided"],
    },
    img_link:{
        type:String,
        required:[true,"img_link must be provided"],
    },
    news_host:{
        type:String,
        required:[true,"news_host must be provided"],
    },
    posted_in:{
        type:Date,
        default: Date.now(),
    }
})

// sql me table yaha collection
module.exports=mongoose.model("Product",productSchema)