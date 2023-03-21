const { Router } = require('express');
const {createActivitiesHandler, getActivitiesHandler} = require('../hadlers/activityHandler');


const activitiesRouters= Router();

activitiesRouters.post("/",createActivitiesHandler)  ;   
activitiesRouters.get('/',getActivitiesHandler)  ;   



module.exports = activitiesRouters;