const getForIdCountries=(req,res)=>{
    const { idPais }= req.params
    res.status(200).send('Esta ruta obtiene el detalle de un país específico por id '+idPais)
}  ;    

module.exports=getForIdCountries;