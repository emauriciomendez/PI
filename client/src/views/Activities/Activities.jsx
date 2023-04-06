import { useEffect } from 'react';
import { useDispatch , useSelector} from 'react-redux'
import { getActivites } from '../../redux/actions.js';
import './Activities.css'

const Activities=()=>{
    const activities= useSelector(state=>state.activities)
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(getActivites())
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
 return   (
        <>
            <h1>Actividades</h1>
            {/* {console.log(activities)} */}
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
            { activities.map((act,index)=> {
            return (
            <tr key={act.id}>  
                <td>{index+1}</td>
                <td>{ act.name.substr(0,1).toUpperCase() + act.name.substr(1)}</td>
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