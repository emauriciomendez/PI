import style from './Card.module.css'
const Card = (props)=>{
return(
    <div className={style.container}>
        <p>{props.id}</p>
        <p>Nombre:{props.name}</p>
        <p>Capital:{props.capital}</p>
        <p>Area:{props.area}</p>
        <p>Poblacion:{props.population}</p>

    </div>
)


}
export default Card;