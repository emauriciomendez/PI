import { useEffect } from 'react';
//import { useDispatch } from 'react-redux'

import { getCountriesApi } from '../../redux/actions.js';
import st from './Landing.module.css'




import {  useHistory } from "react-router-dom";
const Landing=()=>{

    //const dispatch= useDispatch();
    useEffect(()=>{
       getCountriesApi()//trae los datos de la API
    },[]);
    //const navigate = Redirect();
    const history = useHistory()
    function goToHome(){ history.push("/home")   }
    return   (
           <>
               
               <h1>Bienvenidos</h1>
               <button onClick={goToHome}  > Home</button>
               <h3>en Landing</h3>
               <div className={st.mundo}></div>
             <img src='../../imagenes/mundo2.png' alt='mundo'  width="400" height="400"></img>
           </>
       )
    
   }
   export default Landing