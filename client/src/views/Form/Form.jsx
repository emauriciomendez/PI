import axios from 'axios';
import { useState } from "react";
import {validate} from './validation'
import st from './Form.module.css'

const Form=()=>{

    const [form,setForm]=useState({
        name:'',
        difficulty:5,
        duration:1,
        season:'',
        countries:[]
    })
    
    const [errors,setErrors]=useState({
        name:'',
        difficulty:'',
        duration:'',
        season:'',
        countries:''
    })
    
    const changeHandler=(e)=>{
        const property= e.target.name;
        const value= e.target.value;
        setErrors(validate({...form,[property]:value})) 
        setForm({...form,[property]:value})         
    }
   
     const submitHandler=(e)=>{ alert('click')
        e.preventDefault();
        axios.post("http://localhost:3001/activities/",form)
        .then(res=>alert(res))
        .catch(err=>alert(err))       
     }

    return   (
           <form onSubmit={submitHandler} className={st.container}>
            <h1 className={st.title}>Creacion de actividades</h1>
            <div className={st.cont1}> 
                <div className={st.cont2}>
                    <label  htmlFor='name' className={st.h}>Actividad:</label>
                    <input type='text' value= {form.name} name='name' onChange={changeHandler} className={st.inpText}/>
                </div> 
                <div  className={st.contError}> 
                    {errors.name && <span className={st.spErr}>{errors.name}</span>}
                </div>
                    
            </div>
            <div>
                <div className={st.cont2}>
                    <label>Dificultad:</label>
                    <div>    
                        <input type='text' value={form.difficulty} name='difficulty' onChange={changeHandler} className={st.inpNum}/>
                        <span>1-5.</span>
                    </div> 
                </div> 
                <div  className={st.contError}>  
                    {errors.difficulty && <span className={st.spErr}>{errors.difficulty}</span>}
                </div>
            </div>
            <div>
                <div className={st.cont2}>
                    <label>Duracion: </label>
                   <div> 
                        <input type='text' value={form.duration} name='duration' onChange={changeHandler} className={st.inpNum}/> 
                        <span>horas.</span>
                   </div>
                </div> 
                <div className={st.contError}>  
                    {errors.duration && <span className={st.spErr}>{errors.duration}</span>}
                </div>
            </div>
            <div>
                <div className={st.cont2}>
                    <label> Temporada:   </label>
                    <select value={form.season} name='season' onChange={changeHandler} className={st.inpSelCount}>
                        <option value='-1' >Seleccione...</option>
                        <option value="Verano" >Verano</option>
                        <option value="Otoño" >Otoño</option>
                        <option value="Invierno">Invierno</option>
                        <option value="Primavera">Primavera</option>
                    </select>
                  
                </div> 
                <div className={st.contError}>  
                    {errors.season && <span className={st.spErr}>{errors.season}</span>}
                </div>
            </div>
            <div>
                <div className={st.cont2}>
                    <label>Paises: </label>
                   <div> 
                        {/* <input type='text' value={form.countries} name='countries' onChange={changeHandler} className={st.inpNum}/>  */}
                        <select value={form.countries} name='countries' onChange={changeHandler} className={st.selCountries} multiple>
                            <option value="1">Opción 1</option>
                            <option value="2">Opción 2</option>
                            <option value="3">Opción 3</option>
                            <option value="11">Opción 11</option>
                            <option value="21">Opción 21</option>
                            <option value="31">Opción 31</option>
                        </select>
                    </div>
                </div> 
                <div className={st.contError}>  
                    {errors.countries && <span className={st.spErr}>{errors.countries}</span>}
                </div>
            </div>
            <button type="submit" className={st.botSubmit}> Enviar</button>
           </form>
       )
    
   }
   export default Form