import React from 'react'
// import { Link } from 'react-router-dom'
import NavIcon from './NavIcon/NavIcon';
import classes from './SecondaryNav.module.css';
import {FaSearch} from 'react-icons/fa';
import {FaBell} from 'react-icons/fa';
import {AiOutlineGift} from 'react-icons/ai';
import {RiNetflixLine} from 'react-icons/ri';
import {IoMdArrowDropdown} from 'react-icons/io'
const SecondaryNav = (props) =>{
    return(
        <div className={classes.SecondaryNav}>
    
            <FaSearch className={classes.Icons}/>
            
            <NavIcon>CHILDREN</NavIcon>
            <NavIcon>DVD</NavIcon>
            <AiOutlineGift className={classes.Icons}/>
            <FaBell className={classes.Icons}/>
            <RiNetflixLine className={classes.Icons} style={{padding:'0 0 0 20'}} />
            <IoMdArrowDropdown className={classes.Icons}style={{padding:'0 20 0 0'}}/>
            
          
        </div>
    );
}

export default SecondaryNav;