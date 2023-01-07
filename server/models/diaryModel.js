const mongoose = require('mongoose')

const diarySchema = mongoose.Schema({
    content:{
        type:String,
        isrequired:true,
    },
    thoughts:{
        type:String,
    
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const diaryModel = mongoose.model('diary',diarySchema)
module.exports = diaryModel