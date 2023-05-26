const Goal = require('../Model/goalModel')

const getGoals = async (req, res) => {
    const goals = await Goal.find({ user : req.user.id });
    res.status(200).json(goals);
}
const postGoals = async (req, res) => {
    const goal = await Goal.create({
        user : req.user.id,
        text : req.body.text
    })
    res.status(200).json(goal);
}

const updateGoals = async (req, res) => {
    res.status(200).json({
        message : "Update Goals : " + req.params.id 
    })
}
const deleteGoals = async (req, res) => {
    res.status(200).json({
        message : "Delete Goals : " + req.params.id
    })
}

module.exports =  {
      getGoals,
      postGoals, 
      updateGoals, 
      deleteGoals 
}