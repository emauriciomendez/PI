
import axios from "axios";

export const GET_COUNTRIES_API = 'GET_COUNTRIES_API';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const ORDER= 'ORDER';
export const FILTER_CONTI= 'FILTER_CONTI';
export const FILTER_ACTIV= 'FILTER_ACTIV';
export const SEARCH_COUNTRY= 'SEARCH_COUNTRY';

export const getCountriesApi=()=>{
    return async ()=>{
       // const apiData= 
       console.log('actions')
        await axios.get('http://localhost:3001/');
       // const countriesApi=apiData.data;
        // dispatch(
        //     {type: GET_COUNTRIES_API,
        //      payload: countriesApi}
        // );
    };
};
export const getCountries=()=>{
    return async (dispatch)=>{
        const Data= await axios.get('http://localhost:3001/countries/');
        const countries=Data.data;
        // console.log('countries en actions')
        // console.log(countries)
        dispatch(
            {type: GET_COUNTRIES,
             payload: countries}
        );
    };
};

export const getActivites=()=>{
    return async (dispatch)=>{
        const Data= await axios.get('http://localhost:3001/activities/');
        const activities=Data.data;
        dispatch(
            {type: GET_ACTIVITIES,
             payload: activities}
        );
    };
};
export const orderCards= (data)=>{
    return{
       type: ORDER,
       payload: data
    }
}
export const filterCardsCont= (status)=>{
    return{
       type: FILTER_CONTI,
       payload: status
    }
}

export const searchCountry= (name)=>{
   
    return async (dispatch)=>{
        const Data= await axios.get(`http://localhost:3001/countries?name=${name}`);
        const country=Data.data;
        console.log(country)
        dispatch(
            { type: SEARCH_COUNTRY,
                payload: country}
        );
    };
}

export const filterCardsAct= (id)=>{
    if( id!=='-1'){
    return async(dispatch)=>{
        const Data= await axios.get(`http://localhost:3001/activities/${id}`);
        const countries=Data.data;
        console.log(countries)
        dispatch(
            { type: FILTER_ACTIV,
                payload: countries}
        );
    }} else {alert('No se selecciono ninguna actividad') //devuelve todos los paises
            return async (dispatch)=>{
                const Data= await axios.get('http://localhost:3001/countries/');
                const countries=Data.data;
                
                dispatch(
                    {type: GET_COUNTRIES,
                    payload: countries}
                );
            };

}

}