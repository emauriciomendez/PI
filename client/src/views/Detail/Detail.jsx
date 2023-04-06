import React from "react";
import { useParams, useHistory} from "react-router-dom";

import style from './Detail.module.css'

   
const Detail = ()=>{
    const { id } = useParams();   
    const [country, setCountry] = React.useState({}); 
    const [act, setAct] = React.useState([]);  
 
    React.useEffect(() => {
         fetch(`http://localhost:3001/countries/${id}` )
           .then((response) => response.json())
           .then((char) => {
            
             if (char.length>=1) {
                setCountry(char[0]);                
               if(char[0].activities.length!==0) setAct(char[0].activities) ;
  
             } else {
               window.alert("No hay un país con ese ID ");
             }
           })
           .catch((err) => {
             window.alert("Se genero un error en la busqueda de ese país " );
           });
         return setCountry({});
       }, [id]);


  const history = useHistory()
  function backToHome(){ history.push("/home")    }

  function format(num)  {    
      if(!isNaN(num)){
        num = num.toString().split("").reverse().join("").replace(/(?=\d*\.?)(\d{3})/g,'$1.');
        num = num.split("").reverse().join("").replace(/^[.]/, "");
        return num;      
      }  
    }
  
return(
    <div className={style.container}>
        <div className={style.contTitle}>
          <h1 className={style.title}>{country.name}</h1>
          <p><strong>{country.id}</strong></p>
        </div>
        <div className={style.container2}>
          <img src={country.flags} alt={country.name} width="320" height="320"/>
          <div className={style.contInf} >
            <p><strong>Capital:</strong> {country.capital}</p>
            <p><strong>Continente: </strong>{country.region}</p>
            <p><strong>Región: </strong>{country.subregion}</p>
            <p><strong>Area:</strong> {format(country.area)} km<sup>2</sup></p>
            <p><strong>Poblacion: </strong>{format(country.population)}  habitantes</p>
            <p><strong>Actividades: </strong>  
                     {  act.length===0 && 'Sin  registros asignados'}
            </p>
          
            { act.length!==0 &&
            <table className={style.table}>
            <thead> <tr>                    
                      <th>Nombre</th>
                      <th>Dificultad</th>
                      <th>Duración</th>
                      <th>Temporada</th>
                    </tr>
              </thead>
              {act.map(ele=>(
                  <tr>
                    <td>{ ele.name.substr(0,1).toUpperCase() + ele.name.substr(1)}</td>
                    <td>{ele.difficulty}</td>
                    <td>{ele.duration}</td>
                    <td>{ele.season}</td>
                  </tr>
                ))} 
                </table>}
          </div>
            
           
        </div>
        <button onClick={backToHome} className={style.btn}> Volver</button>
    </div>
)


}
export default Detail;