/* eslint-disable no-unused-vars */
import { GET_COUNTRIES , GET_ACTIVITIES, ORDER , FILTER, SEARCH_COUNTRY} from './actions'
const initialState={
    countries:[],
    activities:[],
    countriesView:[]
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
                       return{
                           ...state,
                           countriesView:[...orderChar] 
                       }
        case   FILTER:
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
        case SEARCH_COUNTRY:
            return{ ...state , countriesView: action.payload};
                         
        default:
            return {...state};
    }
}

export default rootReducer;