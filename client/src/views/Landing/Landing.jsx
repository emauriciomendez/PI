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
                    <h5>Aquí podras conocer todos los paises del mundo</h5>
                    <button  className={st.bton} onClick={goToHome}  >
                    <div className={st.icon}>▷▷  ▷</div>
                      <span className={st.span}>Empecemos</span> </button>
              
                </div>
                </div>
       )
    
   }
   export default Landing