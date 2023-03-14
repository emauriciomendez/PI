const getCountries=(req,res)=>{
    const { name }= req.query;
    if(name)
    {res.status(200).send('?????Esta ruta obtiene el detalle de un país específico por nombre '+name)}
   else{ res.status(200).send('buscar todos los paises');}
}


module.exports=getCountries;