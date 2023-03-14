const createActivities=(req,res) => {
    const {nombre,dificultad, duracion, temporada}=req.body
    res.status(200).send(`Esta ruta recibirá todos los datos necesarios para crear una actividad turística , viene por body:
    nombre: ${nombre},
    dificultad: ${dificultad}
    duracion: ${duracion} y 
    temporada: ${temporada}  fin`);
}  ;   

module.exports=createActivities;