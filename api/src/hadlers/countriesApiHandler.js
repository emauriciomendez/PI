const {getCountriesApi} =require('../controllers/countriesController');

const getCountriesApiHandler=async(req,res)=>{    
    try {      
        const allContriesApi= await getCountriesApi();       
        res.status(200).json(allContriesApi);        
    } catch (error) {
        res.status(400).json({error: error.message});
    }   
}
module.exports= getCountriesApiHandler;