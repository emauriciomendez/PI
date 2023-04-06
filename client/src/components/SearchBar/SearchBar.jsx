import s from './SearchBar.module.css';
import React, {useState, useRef,useEffect} from "react";
import { useDispatch } from 'react-redux'
import {searchCountry} from '../../redux/actions.js'

export default function SearchBar({onSearch, logout}) {
   const dispatch= useDispatch();   
         const [cardABuscar,setCardABuscar]=useState('')
         const inputB=useRef(null);
         
useEffect(()=>{
   inputB.current.focus();
},[cardABuscar])

         function cambiosInput(e) {
            e.preventDefault();
            setCardABuscar(e.target.value)
            //console.log(cardABuscar);
         }

         function enviarInput(e) {
            e.preventDefault();
         //  console.log(cardABuscar);
           // onSearch(cardABuscar);
            dispatch(searchCountry(cardABuscar))
            setCardABuscar('');
         }
         
         return (<form onSubmit={e=>{
                  e.preventDefault();
                  enviarInput(e)
               }} >
               <>
                
                  <div className={s.divS}>
                     <input   className={s.inp} 
                              type='search' 
                              placeholder='  Nombre...'
                              onChange={(e)=>cambiosInput(e)}
                              value={cardABuscar}
                              ref={inputB}/>
                     <input   type='submit'   
                              value='Aceptar' 
                              className={s.boton} />
                     {/* <button     
                              onClick={logout}
                              className={s.boton1} >Logout</button> */}
                  </div>
                 {/* <button className={s.boton} onClick={()=>enviarInput()}>Agregar</button> */}
               </>
            </form>
            );
            }
