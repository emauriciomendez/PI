const {createActivity, getActivitiesAll, createCountryActivity }=require('../controllers/activitiesController');

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
       const newActivity= await createActivity(name, difficulty, duration, season)
       res.status(201).json(newActivity.id);
       //const respues= res.json(newActivity)'Actividad creada exitosamente'
      // console.log(newActivity)
       //buscar el id creado
    //    countries.map(async(element) => { console.log(element+'ell');
    //     const newActivityContry= await createCountryActivity(element,newActivity.id)
    //     res.status(201).json(newActivityContry);
        
    //    });
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
  
}  ;   

module.exports={
    createActivitiesHandler,
    getActivitiesHandler};