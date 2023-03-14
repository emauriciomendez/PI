const { Router } = require('express');
const createActivities = require('../controllers/createActivities');
const getActivities = require('../controllers/getActivities');

const activitiesRouters= Router();

activitiesRouters.post("/",createActivities)  ;   
activitiesRouters.get('/',getActivities)  ;   



module.exports = activitiesRouters;