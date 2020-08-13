import React, { Component } from 'react'
import { button, NavLink } from 'react-router-dom'
import NavIcon from './NavIcon/NavIcon';
import classes from './SecondaryNav.module.css';
import {FaSearch} from 'react-icons/fa';
import {FaBell} from 'react-icons/fa';
import {AiOutlineGift} from 'react-icons/ai';
import {RiNetflixLine} from 'react-icons/ri';
import {IoMdArrowDropdown} from 'react-icons/io'
import SearchBar from '../../SearchBar/SearchBar';


class SecondaryNav extends Component{
    state = {
        search:false
    }
    onSrearchHandler=(props)=>{
        let x = !this.state.search
        this.setState({search:x})
    }
    render(){
    let issearch = null
    if(this.state.search){
        issearch = <SearchBar />
    }
    // onGiftHandler=(props)=>{
        
    // }
        return(
            <div className={classes.SecondaryNav}>
                {/* <SearchBar /> */}
                {issearch}
                <button className={classes.active} onClick={this.onSrearchHandler} style={{ marginLeft:'0px'}}><FaSearch className={classes.Icons} style={{paddingLeft:'0px'}}/></button>
                
                <NavIcon>CHILDREN</NavIcon>
                <NavIcon>DVD</NavIcon>
                <NavLink activeClassName={classes.Icons} to='/referfriends' exact >
                    <AiOutlineGift className={classes.Icons}/></NavLink>
                <button ><FaBell className={classes.Icons}/></button>
                <button ><RiNetflixLine className={classes.Icons}/>
                <IoMdArrowDropdown className={classes.Icons} style={{overflow:'hidden'}}/></button>
                
            </div>
        );
    }
 
}

export default SecondaryNav;