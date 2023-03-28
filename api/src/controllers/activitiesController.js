const { Activity } =require ('../db.js');
const Country_Activities = require('../models/Country_Activities.js');

const createActivity=async(name, difficulty, duration, season)=> 
await Activity.create({name, difficulty, duration, season})

const getActivitiesAll=async()=>await Activity.findAll()

const createCountryActivity=async(countryId,activityId)=> await Country_Activities.create(countryId,activityId)

module.exports= {createActivity, getActivitiesAll,createCountryActivity};