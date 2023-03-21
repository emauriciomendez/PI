const { Activity } =require ('../db.js')

const createActivity=async(name, difficulty, duration, season)=> 
await Activity.create({name, difficulty, duration, season})



module.exports= {createActivity};