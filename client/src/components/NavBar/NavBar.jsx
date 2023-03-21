
import styles from './NavBar.module.css';
import {  NavLink } from "react-router-dom";

const NavBar=()=>{
    return(
        <div className={styles.containerNavBar}>
            <NavLink to ='/home'>Home</NavLink>
            <NavLink to ='/form'>Form</NavLink>
        </div>
    )
}
export default NavBar;