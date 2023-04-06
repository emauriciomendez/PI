const { Activity, Countries } =require ('../db.js');


const createActivity=async(name, difficulty, duration, season,countries)=> {
    let actNew=await Activity.create({name, difficulty, duration, season}) 
    actNew.addCountries(countries)
}

const getActivitiesAll=async()=>await Activity.findAll(
    // {include: Countries
    // }
)
const getCountryForIdActiv=async(id)=>{
    
    let actividad = await Activity.findByPk(id)
    return actividad.getCountries() 
    // let countriesForAct=actividad.setCountries() 
    // console.log('controller contri',countriesForAct)

    }
//const createCountryActivity=async(countryId,activityId)=> await Country_Activities.create(countryId,activityId)

module.exports= {createActivity, getActivitiesAll,getCountryForIdActiv};