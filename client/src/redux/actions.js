
import axios from "axios";

export const GET_COUNTRIES = 'GET_COUNTRIES';

export const getCountries=()=>{
    return async (dispatch)=>{
        const apiData= await axios.get('https://restcountries.com/v3/all');
        const countries=apiData.data;
        dispatch(
            {type: GET_COUNTRIES,
             payload: countries}
        );
    };
};