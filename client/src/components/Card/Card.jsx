import { Link } from 'react-router-dom'
import style from './Card.module.css'
const Card = (props)=>{
return(
    <Link to={`/detail/${props.id}`} >
    <div className={style.container}>
        
        <h4>{props.name}</h4>
        <p>{props.id}</p>
        <img src={props.flags} alt={props.name} width="120" height="120"/>
       <p>Capital: {props.capital}</p>
        <p>Continente: {props.region}</p>
       
    </div>
    </Link>
)


}
export default Card;