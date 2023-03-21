const { Router } = require('express');
const {getCountriesHandler,getForIdCountriesHandler} = require('../hadlers/countryHadler');


const countriesRouters= Router();

countriesRouters.get("/",getCountriesHandler)  ; 
countriesRouters.get('/:id', getForIdCountriesHandler)  ;   

module.exports = countriesRouters;