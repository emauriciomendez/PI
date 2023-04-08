//import {useSelector}  from 'react-redux';
import st from './Paginacion.module.css'


const Paginacion=({ totalItems, itemsPerPage , pageCurrent, setPageCurrent})=>{
   // const countries= useSelector(state=>state.countriesView)
//    console.log(pageCurrent+' pcurrent');
let pageNumber=[];
const cantPage=Math.ceil(totalItems / itemsPerPage);
for(let i=1; i<=cantPage; i++){
    pageNumber.push(i);
}
const goToFirts=()=>{
    setPageCurrent(1)
}
const goToLast=()=>{
    setPageCurrent(cantPage)
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
            <button  onClick={goToFirts}
                     className={  st.linkPagSig} disabled={pageCurrent===1 ? true :false}  >
                        Primero
                    </button>
            <button  onClick={goToPrev}
                     className={  st.linkPagSig} disabled={pageCurrent===1 ? true :false}  >
                        Anterior
            </button>

            { pageNumber.map ( noPage =>
                    ( ( noPage <=(pageCurrent+3)&& noPage >=(pageCurrent-3))?
                        <div  onClick={()=>goToPage(noPage)}
                     className={  (noPage===pageCurrent ? st.isCurrent : st.linkPagination)}    key={noPage}>
                        {noPage}
                    </div>:( noPage ===(pageCurrent+4))? <span>▷▷</span>:( noPage ===(pageCurrent-4))? <span>◁◁</span>:''
                    )
                               
                ) 
            }
            <button  onClick={goToNext}
                     className={  st.linkPagSig} disabled={pageCurrent>=cantPage ? true :false}  >
                        Siguiente
            </button>
            <button  onClick={goToLast}
                     className={  st.linkPagSig} disabled={pageCurrent>=cantPage ? true :false}  >
                        Ultimo
            </button>
        </nav>
    </div>

)

}
export default Paginacion;