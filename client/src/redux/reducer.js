import { GET_COUNTRIES , GET_ACTIVITIES, GET_COUNTRIES_ID } from './actions'
const initialState={
    countries:[],
    activities:[],
    detail:[]
};

const rootReducer=(state=initialState, action)=>{
    switch(action.type){
        case GET_COUNTRIES:
            return{ ...state , countries: action.payload };
        case GET_ACTIVITIES:
                return{ ...state , activities: action.payload };
        case GET_COUNTRIES_ID:
                    return{ ...state , detail: action.payload };
        default:
            return {...state};
    }
}

export default rootReducer;