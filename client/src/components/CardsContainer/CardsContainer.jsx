import Card from '../Card/Card.jsx';
import style from './CardsContainer.module.css';
import {useSelector}  from 'react-redux'
import Paginacion from '../Paginacion/Paginacion.jsx';
import { useEffect, useState } from 'react';
const CardsContainer=()=>{
    const countries= useSelector(state=>state.countriesView);
    const itemsPerPage=10;
    const [pageCurrent,setPageCurrent]=useState(1);
    let totalItems=countries.length;
    let indInicial=(pageCurrent-1)*itemsPerPage;
    let indFinal= indInicial+itemsPerPage;
    useEffect(()=>{
        setPageCurrent(1)
    },[countries])

return(
    <>
      <Paginacion 
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            pageCurrent={pageCurrent}
            setPageCurrent={setPageCurrent}
            />
    <div className={style.container}>
        {
        countries.map(cont=>{

        return <Card
         id= {cont.id}
         name={cont.name}
        flags={cont.flags}
         region={cont.region}
        capital={cont.capital}
         subregion={cont.subregion}
         area={cont.area}
        population={cont.population}
        key={cont.id}
        />
        }).slice(indInicial,indFinal)
        } 
           
    </div> 
      
    </>
)
}
export default CardsContainer;

//               Debe rendrizar un array  de paises y por cada uno debe renderizar un componente card  
