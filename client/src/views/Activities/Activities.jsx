import { useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux'
import { getActivites } from '../../redux/actions.js';
import './Activities.css'

const Activities=()=>{
    const activities= useSelector(state=>state.activities)
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(getActivites())
        
    },[]);
 return   (
        <>
            <h1>Actividades</h1>
            {console.log(activities)}
            <table>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Actividad</th>
                    <th>Dificultad</th>
                    <th>Duración</th>
                    <th>Temporada</th>
                   
                    </tr>
                </thead>
                <tbody>
            { activities.map(act=> {
            return (
            <tr>  
                <td>{act.id}</td>
                <td>{act.name}</td>
                <td>{act.difficulty}</td>
                <td> {act.duration}</td>
                <td> {act.season}</td>
                  
           
            </tr>)
            }) 
           
            }  </tbody></table>
           
        </>
    )
 
}
export default Activities