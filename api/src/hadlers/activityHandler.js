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
       const newActivity= await createActivity(name, difficulty, duration, season, countries)
       res.status(201).json('creada');
      
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
  
}  ;   

module.exports={
    createActivitiesHandler,
    getActivitiesHandler};