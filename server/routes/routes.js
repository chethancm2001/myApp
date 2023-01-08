const router = require('express').Router()
const postdairy = require('../controller/dairy/postdairy')
const getAllDiary = require('../controller/dairy/getdairy')
router.get('/',(req,res)=>{
 res.send(process.env.CRUSH)
})

router.post('/dairy', postdairy)
router.get('/diary',getAllDiary)

module.exports = router