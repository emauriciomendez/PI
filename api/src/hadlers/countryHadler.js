const {getCountries, getCountryForName, getCountryForId} =require('../controllers/countriesController')

const getCountriesHandler=async(req,res)=>{
    const { name }= req.query;
    try {
        if(name)
        { const countryForName= await getCountryForName(name)
           console.log(countryForName);
            if(countryForName)
            {res.status(200).json(countryForName)}            
            else {
                alert ('No se encontro el pais')}
                //'?????Esta ruta obtiene el detalle de un país específico por nombre '+name)}
        }
       else{
        const countriesAllBd= await getCountries()
       // console.log(allContries);
         res.status(200).json(countriesAllBd);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
   
}

const getForIdCountriesHandler=async(req,res)=>{
    const { id }= req.params
    try {
        const countryForId= await getCountryForId(id)
        console.log( 'por id',countryForId);
            res.status(200).json(countryForId)
            //res.status(200).send('Esta ruta obtiene el detalle de un país específico por id '+idPais)
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
}  ;    

module.exports={
    getForIdCountriesHandler,
    getCountriesHandler};