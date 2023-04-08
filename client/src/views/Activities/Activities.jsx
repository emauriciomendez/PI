import { useEffect, useState } from 'react';
import { useDispatch , useSelector} from 'react-redux'
import { getActivites } from '../../redux/actions.js';
import Paginacion from '../../components/Paginacion/Paginacion.jsx';
import './Activities.css'

const Activities=()=>{
    const activities= useSelector(state=>state.activities);
    const itemsPerPage=6;
    const [pageCurrent,setPageCurrent]=useState(1);
    let totalItems=activities.length;
    let indInicial=(pageCurrent-1)*itemsPerPage;
    let indFinal= indInicial+itemsPerPage;
    const dispatch= useDispatch();

    useEffect(()=>{
        dispatch(getActivites())
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
 return   (
        <>
            <h1 className='h1Title'>Actividades</h1>
            {/* {console.log(activities)} */}
            <table>
                <thead>
                    <tr>
                    <th>No.</th>
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
                <td>{ act.name.substr(0,1).toUpperCase() + act.name.substr(1).toLowerCase()}</td>
                <td>{act.difficulty}</td>
                <td> {act.duration}</td>
                <td> {act.season}</td>
            </tr>)
            }).slice(indInicial,indFinal) 
           
            }  </tbody></table>
           
        <Paginacion 
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            pageCurrent={pageCurrent}
            setPageCurrent={setPageCurrent}
            />
        </>
    )
 
}
export default Activities