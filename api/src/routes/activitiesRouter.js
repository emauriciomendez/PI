const { Router } = require('express');
const {createActivitiesHandler, getActivitiesHandler,getForIdActivitiesHandler } = require('../hadlers/activityHandler');


const activitiesRouters= Router();

activitiesRouters.post("/",createActivitiesHandler)  ;   
activitiesRouters.get('/',getActivitiesHandler)  ;   
activitiesRouters.get('/:id', getForIdActivitiesHandler)  ;   



module.exports = activitiesRouters;