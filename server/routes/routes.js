const router = require('express').Router()

router.get('/',(req,res)=>{

    res.send(process.env.CRUSH)
})

module.exports = router