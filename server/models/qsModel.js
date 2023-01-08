const mongoose = require('mongoose')

let qsSchema = mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    answer:{
        type:String,
        required:true,
    }
})

const qsModel = mongoose.model('qs',qsSchema)

module.exports = qsModel
