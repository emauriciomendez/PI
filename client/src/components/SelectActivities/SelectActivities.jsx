import style from './SelectActivities.module.css';

import { useSelector } from "react-redux"

const SelectActivities=()=>{
    
    const activ=useSelector(state=>state.activities);
    console.log(activ)
    const handleFilter=(e)=>{
        console.log(e.target.value)
    }
    return(
        <div> 
          <select name='filter' onChange={handleFilter}  className={style.sel}> 
                <option value="All">Todos</option>
                {
                activ.map(act=>{ 
                    return( 
                        <option value={act.id} key={act.id}> {act.name} </option>
                        )
                })
                }          
            </select>
        </div>
    )
}
export default SelectActivities;