const router = require('express').Router()






router.get('/',(req,res)=>{
    res.send('this is from router')
})

module.exports = router