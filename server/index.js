const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('directing')
})
app.listen(4000,(err)=>{
    if(!err){
        console.log('server is started in port 4000')
    }else{
        console.log("error is deteted ")
    }
})