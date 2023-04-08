import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import CardsContainer from '../../components/CardsContainer/CardsContainer.jsx'
import { getCountries , orderCards, filterCardsCont,filterCardsAct,getActivites} from '../../redux/actions.js';
import style from './Home.module.css'
import SelectActivities from '../../components/SelectActivities/SelectActivities'

const Home=()=>{

        const [orderType,setOrderType]=useState({direccion:'ascedente', criterio:'alfabetico'})
        const [filter,setFilter]=useState({filtro:'Continentes', opcion:'All'})
        const dispatch= useDispatch();
        
        useEffect(()=>{
            dispatch(getCountries())
            dispatch(getActivites())
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]);

        function handleOrderDir(e){
            setOrderType({...orderType, direccion:e.target.value})
        }
        
        function handleOrderCrit(e){ 
        // console.log(e.target.value);
            setOrderType({...orderType, criterio:e.target.value});
        }
        function handleFilterOpt(e){ 
             
             let opt;
             // eslint-disable-next-line no-unused-vars
             if(e.target.value ==='Continentes')  {opt='All';} else { opt='-1'}
             console.log(e.target.value, opt);
            setFilter({ filtro:e.target.value, opcion: opt});
        }
        function handleFilterCont(e){
            // console.log(e.target.value)
            setFilter({...filter, opcion:e.target.value});
        }
        
        // function handlerFilterAct(e){
        //     console.log(e.target.value, 'activi')
        //     setFilter({...filter, opcion:e.target.value});
        // }
        //console.log(filter)
        function handlerFilter(e){
            console.log(filter)
            if(filter.filtro==='Continentes') {
                dispatch(filterCardsCont(filter.opcion))
                console.log(filter , 'en continnaeta dispahct')
            }
            if(filter.filtro==='Actividades') {
                dispatch(filterCardsAct(filter.opcion))
                console.log(filter, 'en activid dispahct')
            }
          
        }
        function clickOrder(e){
            console.log(orderType)
            dispatch(orderCards(orderType))
        }
        return (
            <>
                <h1 className={style.title}>Home</h1>
                <div className={style.contOrderFilter}>
                
                <div className={style.contOrderFilter2}>
                    <h3>Filtros</h3>
                    <div>
                        <label htmlFor='filrt1'> 
                            <input type='radio'name='filters' value="Continentes" id='filrt1' checked={filter.filtro === "Continentes"} onChange={handleFilterOpt}/>
                            Continentes
                        </label>
                        <label htmlFor='filrt2'>
                            <input type='radio'name='filters' value="Actividades" id='filrt2' checked={filter.filtro === "Actividades"} onChange={handleFilterOpt}/>
                             Actividades
                        </label>
                    </div>
                    <div>
                    {filter.filtro === "Continentes"&&<select name='filter' onChange={handleFilterCont} className={style.sel}>
                            <option value="All">Todos</option>
                            <option value="Africa">Africa</option>
                            <option value="Americas">Americas</option>
                            <option value="Antarctic">Antarctic</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>}
                        {filter.filtro === "Actividades"&&<SelectActivities filter={filter} setFilter={setFilter}/>}                        
                    </div> 
                    <div><button className={style.btn} onClick={handlerFilter}> Filtrar</button></div> 
                </div>
                <div className={style.contOrderFilter2}>
                    <h3>Orden</h3>                
                <div>
                    <label htmlFor='sort1'><input type='radio'name='sort' onChange={handleOrderCrit} value="alfabetico" id='sort1' checked={orderType.criterio === "alfabetico"}/> Alfabeticamente</label>
                    <label htmlFor='sort2'><input type='radio'name='sort' onChange={handleOrderCrit} value="habitantes" id='sort2' checked={orderType.criterio === "habitantes"}/> Habitantes</label>
                </div> 
                        
                <div>  
                    <select name ='order' onChange={handleOrderDir} className={style.sel}>
                        <option value="ascendente" select>Ascendente</option>
                        <option value="descendente">Descendente</option>
                    </select>
                </div> 
                    <div><button className={style.btn} onClick={clickOrder}> Ordenar</button></div> 
                </div>
                </div>
                <CardsContainer/>
            </>
        ) 
}
export default Home