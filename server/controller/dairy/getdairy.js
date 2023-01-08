const diaryModel = require('../../models/diaryModel')

async function getAllDiary(req, res){
    let allDiary = await  diaryModel.find({})
    res.json(allDiary)
}

module.exports = getAllDiary