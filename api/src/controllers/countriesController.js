const {Country}=require('../db.js');
const axios=require('axios')

const getCountriesApi= async()=>{
    const countriesAll= await axios.get('https://restcountries.com/v3/all');
     //console.log(countriesAll.data.length, 'longitud')
    let allContriesApi=[];

     for(let i=0;i<countriesAll.data.length;i++){
        let country=countriesAll.data[i]
        const capital= Array.isArray(country.capital)? country.capital[0]:country.capital
        let c= { 
                id:country.cca3,
                name: country.name.common,
                capital,
                region:country.region,
                subregion:country.subregion,
                area:country.area,
                population: country.population,
                flags: country.flags[0],
                }
        await Country.create(c)
        allContriesApi.push(c);
     }
    
// console.log(allContriesApi);
    return allContriesApi;
}
const getCountries= async()=>{
    const countriesAllBd= await Country.findAll()
   // console.log(countriesAllBd);
    return countriesAllBd
}
const getCountryForName= async(name)=>{
    const countryForName= await Country.findAll({where:{name}})
    return countryForName
}
const getCountryForId=async(id)=>{
    const countryForId= await Country.findByPk(id)
    return countryForId
}

module.exports={getCountries, getCountryForName,getCountryForId, getCountriesApi}