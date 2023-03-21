import Card from '../Card/Card.jsx';
import style from './CardsContainer.module.css';
import {useSelector}  from 'react-redux'
const CardsContainer=()=>{
    const countries= useSelector(state=>state.countries)
// const contries=[{
// 	"id": "CUB",
// 	"name": "Cuba",
// 	"flags": "https://flagcdn.com/cu.svg",
// 	"region": "Americas",
// 	"capital": "Havana",
// 	"subregion": "Caribbean",
// 	"area": 109884,
// 	"population": "11326616"
// },{
// 	"id": "COL",
// 	"name": "Colombia",
// 	"flags": "https://flagcdn.com/co.svg",
// 	"region": "Americas",
// 	"capital": "Bogota",
// 	"subregion": "SurAmerica",
// 	"area": 9109884,
// 	"population": "8326616"
// }]
return(
    <div className={style.container}>
        {
        countries.map(cont=>{
        return <Card
        // id= {cont.id}
        // name={cont.name}
        // flags={cont.flags}
        // region={cont.region}
        // capital={cont.capital}
        // subregion={cont.subregion}
        // area={cont.area}
        population={cont.population}
        
        />
        })
        } 

    </div>
)
}
export default CardsContainer;

//               Debe rendrizar un array  de paises y por cada uno debe renderizar un componente card  
