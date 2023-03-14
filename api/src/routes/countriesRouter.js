const { Router } = require('express');
const getCountries = require('../controllers/getCountries');
const getForIdCountries = require('../controllers/getForIdCountries');

const countriesRouters= Router();

countriesRouters.get("/",getCountries)  ; 
countriesRouters.get('/:idPais', getForIdCountries)  ;   

module.exports = countriesRouters;