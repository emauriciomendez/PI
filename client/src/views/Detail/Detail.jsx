import React from "react";
import { useParams, useHistory} from "react-router-dom";

import style from './Detail.module.css'
   
const Detail = ()=>{
    const { id } = useParams();  
    
    const [country, setCountry] = React.useState({});  
 
    React.useEffect(() => {
         fetch(`http://localhost:3001/countries/${id}` )
           .then((response) => response.json())
           .then((char) => {
            // console.log(char)
             if (char.name) {
                setCountry(char);
             } else {
               window.alert("No hay un pais con ese ID ");
             }
           })
           .catch((err) => {
             window.alert("No hay un pais con ese ID " );
           });
         return setCountry({});
       }, [id]);
       const history = useHistory()
  function backToHome(){ history.push("/home")    }
 
return(
    <div className={style.container}>
      
        <h1>{country.name}</h1>
         <p>{country.id}</p>
        
       
        <img src={country.flags} alt={country.name} width="320" height="320"/>
        <p>Capital: {country.capital}</p>
        <p>Continente: {country.region}</p>
        <p>Región: {country.subregion}</p>
        <p>Area: {country.area} km<sup>2</sup></p>
        <p>Poblacion: {country.population}  habitantes</p>  
        <button onClick={backToHome} className={style.boton}> Volver</button>
    </div>
)


}
export default Detail;