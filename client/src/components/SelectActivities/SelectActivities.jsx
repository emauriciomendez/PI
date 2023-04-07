import style from './SelectActivities.module.css';

import { useSelector } from "react-redux"

const SelectActivities= ({filter,setFilter})=>{
    
    const activ=useSelector(state=>state.activities);
   // console.log(activ)
    const handlerFilterAct=(e)=>{
       // console.log(e.target.value, 'en select act',filter)
        setFilter({...filter, opcion:e.target.value});
    }
    return( 
         
          <select name='filter' onChange={handlerFilterAct}  className={style.sel}> 
                <option value="-1">Seleccione...</option>
                {
                activ.map(act=>{ 
                    return( 
                        <option value={act.id} key={act.id}> {act.name} </option>
                        )
                })
                }          
            </select>
        
    )
}
export default SelectActivities;