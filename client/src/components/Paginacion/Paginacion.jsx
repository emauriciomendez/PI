import {useSelector}  from 'react-redux';
import st from './Paginacion.module.css'


const Paginacion=({ totalCountries, countriesPerPage , pageCurrent, setPageCurrent})=>{
    const countries= useSelector(state=>state.countriesView)
//    console.log(pageCurrent+' pcurrent');
let pageNumber=[];
const cantPage=Math.ceil(totalCountries / countriesPerPage);
for(let i=1; i<=cantPage; i++){
    pageNumber.push(i);
}
const goToPage=(n)=>{
    setPageCurrent(n)
}
const goToPrev=()=>{
    setPageCurrent(pageCurrent-1)
}
const goToNext=()=>{
    setPageCurrent(pageCurrent+1)
}

return(
    <div className={st.containerPag}>
       
        <nav className={st.navPagination}> 
        <button  onClick={goToPrev}
                     className={  st.linkPagSig} disabled={pageCurrent===1 ? true :false}  >
                        Anterior
                    </button>
            { pageNumber.map ( noPage =>(
                <>

                    <div  onClick={()=>goToPage(noPage)}
                     className={  (noPage===pageCurrent ? st.isCurrent : st.linkPagination)}    key={noPage}>
                        {noPage}
                    </div></>
               )           
            ) 
        }
       <button  onClick={goToNext}
                     className={  st.linkPagSig} disabled={pageCurrent>=cantPage ? true :false}  >
                        Siguiente
                    </button>
        </nav>
    </div>

)

}
export default Paginacion;