const express = require('express')
const router = require('./routes/routes')
const app = express()

app.use('/',router)
app.listen(4000,(err)=>{
    if(!err){
        console.log('server is started in port 4000')
    }else{
        console.log("error is deteted ")
    }
})