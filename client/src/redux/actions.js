
import axios from "axios";

export const GET_COUNTRIES_API = 'GET_COUNTRIES_API';
export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_ID = 'GET_COUNTRIES_ID';
export const GET_ACTIVITIES = 'GET_ACTIVITIES';


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
export const getCountriesId=(id)=>{
    return async (dispatch)=>{
        const Data= await axios.get(`http://localhost:3001/countries/${id}`);
        const country=Data.data;
        dispatch(
            {type: GET_COUNTRIES_ID,
             payload: country}
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