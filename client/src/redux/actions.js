
import axios from "axios";

export const GET_COUNTRIES_API = 'GET_COUNTRIES_API';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';
export const ORDER= 'ORDER';
export const FILTER= 'FILTER';
export const SEARCH_COUNTRY= 'SEARCH_COUNTRY';

export const getCountriesApi=()=>{
    return async ()=>{
       // const apiData= 
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
export const filterCards= (status)=>{
    return{
       type: FILTER,
       payload: status
    }
}

export const searchCountry= (name)=>{
   
    return async (dispatch)=>{
        const Data= await axios.get(`http://localhost:3001/countries?name=${name}`);
        const country=Data.data;
        dispatch(
            { type: SEARCH_COUNTRY,
                payload: country}
        );
    };
}