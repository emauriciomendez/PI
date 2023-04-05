import { useEffect } from 'react';
import { getCountriesApi } from '../../redux/actions.js';
import st from './Landing.module.css'
import {  useHistory } from "react-router-dom";


const Landing=()=>{

   
    useEffect(()=>{
       getCountriesApi()//trae los datos de la API
    },[]);
   
    const history = useHistory()
    function goToHome(){ history.push("/home")   }

    return   (
           <div className={st.container}>
                <div className={st.mundo}></div>
                <div className={st.leyenda}>
                    <h1>Bienvenidos</h1>
                    <p>Aqui podras conocer todos los paises del mundo</p>
                    <button  className={st.bton} onClick={goToHome}  >
                    <div className={st.icon}>▷▷  ▷</div>
                      <span className={st.span}>Empecemos</span> </button>
              
                </div>
                {/* <h3>en Landing</h3> */}
              
             {/* <img src='../../imagenes/mundo2.png' alt='mundo'  width="400" height="400"/> */}
           </div>
       )
    
   }
   export default Landing