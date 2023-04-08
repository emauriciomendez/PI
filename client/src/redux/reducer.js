

import { GET_COUNTRIES , GET_ACTIVITIES, ORDER , FILTER_CONTI, SEARCH_COUNTRY,FILTER_ACTIV} from './actions'
const initialState={
    countries:[],
    activities:[],
    countriesView:[],
    pageCurrent:1
};

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_COUNTRIES:
            return{ ...state , countries: action.payload ,countriesView: action.payload};
        case GET_ACTIVITIES:
                return{ ...state , activities: action.payload };
        // case GET_COUNTRIES_ID:
        //             return{ ...state , detail: action.payload };
        case  ORDER:    
                     //  console.log(action.payload.criterio+ 'en reducer'); //action.payload.criterio ;
                       let orderChar=[];
                        if (action.payload.criterio==='alfabetico')
                            {
                            orderChar = state.countriesView.sort((a,b)=>{                           
                               if(action.payload.direccion==="ascendente"){
                                   if(a.name < b.name)  return -1
                                   if(a.name > b.name)  return 1;    
                                   return 0;                     
                               }else{
                                   if(a.name < b.name)  return 1
                                   if(a.name > b.name)  return -1;    
                                   return 0;                   
                               }
                                });
                        }
                     if (action.payload.criterio==='habitantes') {
                            orderChar = state.countriesView.sort((a,b)=>{                                                    
                                if(action.payload.direccion==="ascendente"){
                                    return a.population-b.population;                                              
                                }else{
                                   return b.population-a.population  ;                                            
                                }
                            })
                        }
                        //console.log(orderChar)
                       return{
                           ...state,
                           countriesView:[...orderChar] 
                       }
        case   FILTER_CONTI:
                        // console.log(state.allCharacters )
                        if(action.payload==='All'){
                            return{
                                ...state,
                                countriesView:[...state.countries] 
                            } 
                        }else{
                            const filteredChar= state.countries.filter((char) => char.region === action.payload)
                             return{
                                 ...state,
                                 countriesView:[...filteredChar] 
                             }
                        }

        case FILTER_ACTIV:
            
                if (action.payload.length===0)alert('No se encontro el pais Buscado');
                //  
                return{ ...state , countriesView: action.payload};
            
        case SEARCH_COUNTRY:
             
            if (action.payload.length===0)alert('No se encontro el pais Buscado');
              //  console.log(action.payload)
              return{ ...state , countriesView: action.payload};
        
                         
        default:
            return {...state};
    }
}

export default rootReducer;