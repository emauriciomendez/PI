const { getCountriesApi } =require('../controllers/countriesController.js');

const getCountriesApiHandler = async(req,res)=>{  
     console.log('en handler') 
    try {      
        const allContriesApi= await getCountriesApi();       
        res.status(200).json(allContriesApi);    
       // console.log(allContriesApi)    
    } catch (error) {
        res.status(400).json({error: error.message});
    }   
}
module.exports = getCountriesApiHandler ;