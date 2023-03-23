const {createActivity, getActivitiesAll}=require('../controllers/activitiesController');

const getActivitiesHandler=async(req,res)=>{
    try {
        const activitiesAll= await getActivitiesAll();
        res.status(200).json(activitiesAll)
        
    } catch (error) {
        res.status(400).json({error: error.message});
    }
   
}

const createActivitiesHandler=async(req,res) => {
    const { name, difficulty, duration, season}=req.body;
    try {
       const newActivity= await createActivity(name, difficulty, duration, season)
       res.status(201).json('Actividad creada exitosamente');
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
  
}  ;   

module.exports={
    createActivitiesHandler,
    getActivitiesHandler};