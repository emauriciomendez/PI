
//import style from './CardsContainer.module.css';
import {useSelector}  from 'react-redux';

const ActivitiesContainer=()=>{
    const activities= useSelector(state=>state.activities)
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
    <div >
        {
        activities.map(act=>{
        return <>
        
        <p>id= {act.id}</p> 
         <p>name={act.name}</p>
        {/* flags={act.flags}
         region={act.region}
        capital={act.capital}
         subregion={act.subregion}
         area={act.area}
        population={act.population} */}
        
        </>
        })
        } 

    </div>
)
}
export default ActivitiesContainer;
