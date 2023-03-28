
import {useSelector}  from 'react-redux';

const ActivitiesContainer=()=>{
    const activities= useSelector(state=>state.activities)

return(
    <div >
        {
        activities.map(act=>{
        return <>        
            <p>id= {act.id}</p> 
            <p>name={act.name}</p>
              </>
         })
        } 
    </div>
)
}
export default ActivitiesContainer;
