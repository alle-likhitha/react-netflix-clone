import React from 'react'
import { Link } from 'react-router-dom'
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
    
            <Link className={classes.Link} to='/'><FaSearch className={classes.Icons}/></Link>
            
            <NavIcon>CHILDREN</NavIcon>
            <NavIcon>DVD</NavIcon>
            <Link className={classes.Link}><AiOutlineGift className={classes.Icons}/></Link>
            <Link className={classes.Link}><FaBell className={classes.Icons}/></Link>
            <Link className={classes.Link}><RiNetflixLine className={classes.Icons}/>
            <IoMdArrowDropdown className={classes.Icons} style={{overflow:'hidden'}}/></Link>

            
            
            
            
          
        </div>
    );
}

export default SecondaryNav;