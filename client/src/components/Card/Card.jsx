import { Link } from 'react-router-dom'
import style from './Card.module.css'
const Card = (props)=>{
    function format(num)
      {    
      if(!isNaN(num)){
        num = num.toString().split("").reverse().join("").replace(/(?=\d*\.?)(\d{3})/g,'$1.');
        num = num.split("").reverse().join("").replace(/^[\.]/, "");
        return num;      
      }  
    }
return(
    <Link to={`/detail/${props.id}` } className={style.link}>
        <div className={style.container}>
        
            <h4>{props.name}</h4>
            <p>{props.id}</p>
            <img src={props.flags} alt={props.name} width="120" height="120"/>
            <p>Capital: {props.capital}</p>
            <p>Continente: {props.region}</p>
            <p>Poblacion: {format(props.population)}  habitantes</p>  
       
        </div>
    </Link>
)


}
export default Card;