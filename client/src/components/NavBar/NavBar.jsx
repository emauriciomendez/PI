
import styles from './NavBar.module.css';
import {  NavLink } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar';

const NavBar=()=>{
    return(
        <div className={styles.containerNavBar}>
            <NavLink to ='/home'>Home</NavLink>
            <NavLink to ='/activities'>Actividades</NavLink>
            <NavLink to ='/form'>Form</NavLink>
            
            <SearchBar/>
        </div>
    )
}
export default NavBar;