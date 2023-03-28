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

  function format(num)  {    
      if(!isNaN(num)){
        num = num.toString().split("").reverse().join("").replace(/(?=\d*\.?)(\d{3})/g,'$1.');
        num = num.split("").reverse().join("").replace(/^[\.]/, "");
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
            <p><strong>Poblacion: </strong>{format(country.population)}  habitantes</p></div>
            
         
        </div>
        <button onClick={backToHome} className={style.btn}> Volver</button>
    </div>
)


}
export default Detail;