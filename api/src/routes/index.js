const { Router } = require('express');
//const countriesRoutersApi = require('./countriesRouterApi.js');
const activitiesRouters = require('./activitiesRouter.js');
const countriesRouters = require('./countriesRouter.js');
const getCountriesApiHandler = require('../hadlers/countriesApiHandler.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.get('/',(req,res)=>{
//       res.status(200).send('ok en ruoter')
//      });

//router.use('/',countriesRoutersApi)  ; 

router.get('/', getCountriesApiHandler );
router.use('/countries',countriesRouters)  ;   

router.use('/activities',activitiesRouters)


module.exports = router;
