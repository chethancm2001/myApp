const express = require('express')
const router = require('./routes/routes')

const dbconection = require('./config/dbconfig')

const app = express()

dbconection()


app.use('/',router)
app.listen(4000,(err)=>{
    if(!err){
        console.log('server is started in port 4000')
    }else{
        console.log("error is deteted ")
    }
})