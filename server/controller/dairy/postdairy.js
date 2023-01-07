const diaryModel = require('../../models/diaryModel')

async function postDiary(req,res){
    let {content , thoughts} = req.body
    let dairy = new diaryModel({content , thoughts})
    try{
    let result = await dairy.save()
    res.send(result)
    }
    catch(err){
        res.status(400).json({"error":err})
    }
}

module.exports = postDiary