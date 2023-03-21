import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import CardsContainer from '../../components/CardsContainer/CardsContainer.jsx'
import { getCountries } from '../../redux/actions.js';

const Home=()=>{

const dispatch= useDispatch();
useEffect(()=>{
    dispatch(getCountries())
},[]);
 return   (
        <>
            <h1>Home</h1>
            <CardsContainer/>
        </>
    )
 
}
export default Home