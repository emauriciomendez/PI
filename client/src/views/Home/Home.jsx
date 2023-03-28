import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import CardsContainer from '../../components/CardsContainer/CardsContainer.jsx'
import { getCountries , orderCards, filterCards} from '../../redux/actions.js';
import style from './Home.module.css'
import SelectActivities from '../../components/SelectActivities/SelectActivities'

const Home=()=>{

const [orderType,setOrderType]=useState({direccion:'ascedente', criterio:'alfabetico'})

const dispatch= useDispatch();

useEffect(()=>{
    dispatch(getCountries())
},[]);

function handleOrderDir(e){
    setOrderType({...orderType, direccion:e.target.value})
 }
 
 function handleOrderCrit(e){ 
   // console.log(e.target.value);
    setOrderType({...orderType, criterio:e.target.value});
 }
 function handleFilter(e){
    // console.log(e.target.value)
     dispatch(filterCards(e.target.value))
  }
  function clickOrder(e){
    console.log(orderType)
    dispatch(orderCards(orderType))
  }
 return   (
        <>

            <h1 className={style.title}>Home</h1>
            <div className={style.contOrderFilter}>
            <div className={style.contOrderFilter2}>
                <h3>Orden</h3>
                
               <div>
                    <label htmlFor='sort1'><input type='radio'name='sort' onChange={handleOrderCrit} value="alfabetico" id='sort1' checked={orderType.criterio === "alfabetico"}/>Alfabeticamente</label>
                    <label htmlFor='sort2'><input type='radio'name='sort' onChange={handleOrderCrit} value="habitantes" id='sort2' checked={orderType.criterio === "habitantes"}/>Habitantes</label>
                </div> 
               
           
                <div>  <select name ='order' onChange={handleOrderDir} className={style.sel}>
                            <option value="ascendente" select>Ascendente</option>
                            <option value="descendente">Descendente</option>
                        </select>
                </div> 
                <div><button className={style.btn} onClick={clickOrder}> Ordenar</button></div> 
            </div>
            <div className={style.contOrderFilter2}>
                <h3>Filtros</h3>
                <div>
                    <label htmlFor='filrt1'> <input type='radio'name='filters' value="Continentes" id='filrt1'/>Continentes</label>
                    <label htmlFor='filrt2'><input type='radio'name='filters' value="Actividades" id='filrt2'/>Actividades</label>
                </div>
                <div>
                    <select name='filter' onChange={handleFilter} className={style.sel}>
                        <option value="All">Todos</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">Americas</option>
                        <option value="Antarctic">Antarctic</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                    <SelectActivities/>
                    
              </div> 
                <div><button className={style.btn}> Filtrar</button></div> 
              </div></div>
            <CardsContainer/>
        </>
    )
 
}
export default Home