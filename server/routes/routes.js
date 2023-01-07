const router = require('express').Router()
const postdairy = require('../controller/dairy/postdairy')

router.get('/',(req,res)=>{
 res.send(process.env.CRUSH)
})

router.post('/dairy', postdairy)


module.exports = router