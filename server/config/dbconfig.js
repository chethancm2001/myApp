const mongoose = require('mongoose')

function dbconection(){
    mongoose.connect(process.env.DB_URL).then(()=>{console.log(' connect to db')}).catch(()=>{
        console.log("failed to connect to db")
    })
}
module.exports = dbconection