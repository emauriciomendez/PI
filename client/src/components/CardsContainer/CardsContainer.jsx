import Card from '../Card/Card.jsx';
import style from './CardsContainer.module.css';
import {useSelector}  from 'react-redux'
import Paginacion from '../Paginacion/Paginacion.jsx';
import { useState } from 'react';
const CardsContainer=()=>{
    const countries= useSelector(state=>state.countriesView);
    const countriesPerPage=10;
    const [pageCurrent,setPageCurrent]=useState(1);
    let totalCountries=countries.length;
    let indInicial=(pageCurrent-1)*countriesPerPage;
    let indFinal= indInicial+countriesPerPage;

return(
    <>
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
        <Paginacion 
            totalCountries={totalCountries}
            countriesPerPage={countriesPerPage}
            pageCurrent={pageCurrent}
            setPageCurrent={setPageCurrent}
            />
    </>
)
}
export default CardsContainer;

//               Debe rendrizar un array  de paises y por cada uno debe renderizar un componente card  
