import { useEffect, useState } from 'react'
import {  useSelector,useDispatch} from 'react-redux'
import st from './SelectCountries.module.css'
import { getCountries } from '../../redux/actions'



const SelectCountries=({setForm, form})=>{

    const [ countSelect,setCountSelect]= useState([]);
    const [ nomCountSel,setNomCountSel]= useState([]);  
  
    const [ countView,setCountView]= useState([])
   
    const countriesAll= useSelector(state=>state.countries)
    const dispatch= useDispatch();
    
    useEffect(()=>{
         dispatch(getCountries()) 
        setCountView(countriesAll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
//     useEffect(()=>{
//         setNomCountSel([]);
//    },[form.countries]);

  const  handlerSelectCoutry=(e)=>{
    //console.log(e);
    const optiones=e.target.options;
    const selects=[],nomSel=[];

    for(let i=0;i<optiones.length;i++){
        if(optiones[i].selected){
            selects.push(optiones[i].value);
            nomSel.push(optiones[i].text)
        }
    }
   
    setCountSelect(selects)
    setNomCountSel(nomSel)
    setForm({...form,countries:selects})  
    
  }
 
 

return(
    <div className={st.container}>
        <select onChange={handlerSelectCoutry} multiple value={countSelect} className={st.selCountriesAll}>
                {countView.map( count=>(
                    <option value={count.id} key={count.id}>{count.name}</option>
                ))
                }
        </select>
        <div className={st.flechas}>                    
                <p className={st.flechas}>Seleccionados</p>
                <p className={st.flechas}>▷▷▷</p>
        </div>
        
        <div className={st.seleccionados}> 
            {nomCountSel.length>0 ? nomCountSel.map((ele,index)=>{return(<p key={index}>{ele}</p>)}):<p className={st.spErr}>  Seleccione los Paises</p>} 
        </div>
        
    </div>

)


}
 export default SelectCountries