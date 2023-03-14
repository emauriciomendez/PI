const { Router } = require('express');
const activitiesRouters = require('./activitiesRouter.js');
const countriesRouters = require('./countriesRouter.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/',(req,res)=>{
      res.status(200).send('ok en ruoter')
     });

router.use('/countries',countriesRouters)  ;   

router.use('/activities',activitiesRouters)


module.exports = router;
