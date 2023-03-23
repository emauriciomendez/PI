const { Activity } =require ('../db.js')

const createActivity=async(name, difficulty, duration, season)=> 
await Activity.create({name, difficulty, duration, season})

const getActivitiesAll=async()=>await Activity.findAll()



module.exports= {createActivity, getActivitiesAll};