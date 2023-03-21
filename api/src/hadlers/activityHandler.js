const {createActivity}=require('../controllers/activitiesController');

const getActivitiesHandler=(req,res)=>{
    res.status(200).send('Obtiene un arreglo de objetos,,, donde cada objeto es una actividad turística')
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