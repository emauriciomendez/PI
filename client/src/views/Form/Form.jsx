import axios from 'axios';
import { useState } from "react";
import {validate} from './validation';
//import Select from 'react-select';
import st from './Form.module.css';
import SelectCountries from '../../components/SelectCountries/SelectCountries'


const Form=()=>{

    const [mensaje,setMensaje]=useState('');
    const [mensajeExito,setMensajeExito]=useState('');
    const [form,setForm]=useState({
        name:'',
        difficulty:5,
        duration:1,
        season:'-1',
        countries:[]
    })
    
    const [errors,setErrors]=useState({
        name:'',
        difficulty:'',
        duration:'',
        season:'',
        countries:''
    })
   // const countries= useSelector(state=>state.countries);
   
    const changeHandler=(e)=>{
        setMensaje('');
        setMensajeExito('');
        const property= e.target.name;
        const value= e.target.value;
        setErrors(validate({...form,[property]:value})) 
        setForm({...form,[property]:value})         
    }
   

     const submitHandler=async(e)=>{ //alert('click')
        
        e.preventDefault();
        setMensaje('');
        setMensajeExito('');
       // console.log(form.countries.length+'sumit'+form.countries)
         if(form.name!==''&& errors.name===''&& form.season!=='-1'&& form.countries.length!==0){ 
                await  axios.post("http://localhost:3001/activities/",form)
                .then(res=> {setMensajeExito('Actividad creada con exito.')
                    console.log('res  '+res);
                setForm({
                        name:'',
                        difficulty:5,
                        duration:1,
                        season:'-1',
                        countries:[]
                })
                //setNomCountSel([])
                })
                .catch(err=>{alert(err+'aqui');
                        setMensaje('Actividad no se creo.')});       
            }
        else{
            console.log(errors)
            setMensaje('Informacion erronea.')
            }              
     }
    
     
    return   (
           <form onSubmit={submitHandler} className={st.container}>
            <h1 className={st.title}>Creación de Actividades</h1>
            
            <div className={st.cont1}> 
                <div className={st.cont2}>
                    <label  htmlFor='name' className={st.textAct} >Actividad:</label>
                    <input type='text' value= {form.name} 
                    name='name' onChange={changeHandler} 
                    className={st.textAct} placeholder='Digite el nombre...'/>
                </div> 
                </div>
                <div  className={st.contError}> 
                    {errors.name && <span className={st.spErr}>{errors.name}</span>}
                </div>
                    
          
            <div className={st.cont2B}>
                <div>
                    <div className={st.cont2}>
                        <label  className={st.label}>Dificultad:</label>
                        <div>    
                            <input type='text' value={form.difficulty} name='difficulty' onChange={changeHandler} className={st.inpNum}/>
                            <span> (De 1 a 5).</span>
                        </div> 
                    </div> 
                    <div></div>
                    <div  className={st.contError}>  
                        {errors.difficulty && <span className={st.spErr}>{errors.difficulty}</span>}
                    </div>
                </div>
                <div>
                    <div className={st.cont2}>
                        <label className={st.label}>Duración: </label>
                    <div> 
                            <input type='text' value={form.duration} name='duration' onChange={changeHandler} className={st.inpNum}/> 
                            <span> horas.</span>
                    </div>
                    </div> 
                    <div className={st.contError}>  
                        {errors.duration && <span className={st.spErr}>{errors.duration}</span>}
                    </div>
                </div>
            </div>
            <div>
                <div className={st.cont2}>
                    <label className={st.label}> Temporada:   </label>
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
            <div className={st.contPaises}>
                <div className={st.cont3}>
                    <label className={st.label}>Países: </label>
                   
                   <div>   
                    <SelectCountries setForm={setForm} form={form}  />
                      
                    </div>
                  
                </div> 
                <div className={st.contError}>  
                    {errors.countries && <span className={st.spErr}>{errors.countries}</span>}
                </div>
            </div>
            <button type="submit" className={st.botSubmit}> Crear</button>
           
           <p className={st.mensajes}>{mensaje}</p>
           <p className={st.mensajesE}>{mensajeExito}</p>
           </form>
       )
    
   }
   export default Form