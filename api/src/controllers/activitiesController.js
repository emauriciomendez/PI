const { Activity } =require ('../db.js');


const createActivity=async(name, difficulty, duration, season,countries)=> {
let actNew=await Activity.create({name, difficulty, duration, season}) 
actNew.addCountries(countries)
}

const getActivitiesAll=async()=>await Activity.findAll()

const createCountryActivity=async(countryId,activityId)=> await Country_Activities.create(countryId,activityId)

module.exports= {createActivity, getActivitiesAll,createCountryActivity};