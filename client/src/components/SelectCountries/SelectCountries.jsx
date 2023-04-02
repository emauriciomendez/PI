import { useEffect, useState } from 'react'
import {  useSelector} from 'react-redux'
import st from './SelectCountries.module.css'



const SelectCountries=({setForm, form})=>{
    const [ countSelect,setCountSelect]= useState([]);
    const [ nomCountSel,setNomCountSel]= useState([])
  
  
    const [ countView,setCountView]= useState([])
    // let nomCountSel=[]
    const countriesAll= useSelector(state=>state.countries)
  
    useEffect(()=>{
        
        setCountView(countriesAll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    // useEffect(()=>{
        
    //     countSelect1.map((c,index)=>
    //     <input type="text" value={c} key={index}/>)
    // },[countSelect1]);

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
     console.log(selects);
     console.log(nomCountSel);
  }
 
 //  const verContrie=()=>countSelect.map(c=>c.name)
    // return(
    //     countSelect.map(c=>c.name)
    // )
   //}

return(
    <div className={st.container}>

        {/* <p >Paises:</p> */}


            <select onChange={handlerSelectCoutry} multiple value={countSelect} className={st.selCountriesAll}>
                {countView.map( count=>(
                    <option value={count.id} key={count.id}>{count.name}</option>
                ))
                }
        </select>
<p>
    <div className={st.seleccionados}>
        {nomCountSel.length>0 ? nomCountSel.map(ele=>{return(<p>{ele}</p>)}):<p className={st.spErr}>Seleccione los Paises</p>} 
    </div>
  </p>
    </div>

)


}
 export default SelectCountries