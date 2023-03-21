
import {  useHistory } from "react-router-dom";
const Landing=()=>{
    //const navigate = Redirect();
    const history = useHistory()
    function goToHome(){ history.push("/home")   }
    return   (
           <>
               <h1>en Landing</h1>
               <button onClick={goToHome}  > Home</button>
           </>
       )
    
   }
   export default Landing