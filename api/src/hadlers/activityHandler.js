const {createActivity, getActivitiesAll, getCountryForIdActiv}=require('../controllers/activitiesController');

const getActivitiesHandler=async(req,res)=>{
    try {
        const activitiesAll= await getActivitiesAll();
        res.status(200).json(activitiesAll)
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
   
}

const createActivitiesHandler=async(req,res) => {
    const { name, difficulty, duration, season,countries}=req.body;
    console.log(countries)
    try {
       const newActivity= await createActivity(name, difficulty, duration, season, countries)
       res.status(201).json('creada');
      
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
  
}  ;   

const getForIdActivitiesHandler=async(req,res)=>{
    const { id }= req.params
    try {
        const countryForIdActiv= await getCountryForIdActiv(id)
        console.log( 'por id',countryForIdActiv);
            res.status(200).json(countryForIdActiv)
            //res.status(200).send('Esta ruta obtiene el detalle de un país específico por id '+idPais)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
}  ;    

module.exports={
    createActivitiesHandler,
    getActivitiesHandler,
    getForIdActivitiesHandler};