import React, { Component } from 'react'
import { button, NavLink } from 'react-router-dom'
// import NavIcon from './NavIcon/NavIcon';
import NavItem from '../FirstNav/NavItem/NavItem';
import classes from './SecondaryNav.module.css';
import {FaSearch} from 'react-icons/fa';
import {FaBell} from 'react-icons/fa';
import {AiOutlineGift} from 'react-icons/ai';
import {RiNetflixLine} from 'react-icons/ri';
import {IoMdArrowDropdown} from 'react-icons/io';
import SearchBar from '../../SearchBar/SearchBar';
import Accounts from '../../Accounts/Accounts';


class SecondaryNav extends Component{
    state = {
        search:false,
        accountsopen: false
    }
    onSrearchHandler=(props)=>{
        let x = !this.state.search
        this.setState({search:x})
    }

    onOpenAccounts = props =>{
        let y = !this.state.accountsopen
        this.setState({accountsopen: y})
    }

    render(){
    let issearch = null
    let isopenaccountsbar = null
    if(this.state.search){
        issearch = <SearchBar />
    }
    if(this.state.accountsopen){
        isopenaccountsbar = <Accounts />
    }

    // onGiftHandler=(props)=>{
        
    // }
        return(
            <div className={classes.SecondaryNav}>
                {/* <SearchBar /> */}
                {issearch}
                <button className={classes.active} onClick={this.onSrearchHandler} style={{ marginLeft:'0px'}}><FaSearch className={classes.Icons} style={{paddingLeft:'0px'}}/></button>
                
                <NavItem link="/mystery">Mystery</NavItem>
                {/* <NavItem link="/">DVD</NavItem> */}
                <NavLink activeClassName={classes.active} to='/referfriends' exact >
                    <AiOutlineGift className={classes.Icons}> </AiOutlineGift> </NavLink>
                <button ><FaBell className={classes.Icons}/></button>
                <div className={classes.dropdown}>
                <button onClick={this.onOpenAccounts}><RiNetflixLine className={classes.Icons}/>
                <IoMdArrowDropdown className={classes.Icons} style={{overflow:'hidden'}}/></button>
                {isopenaccountsbar}
                </div>
            </div>
        );
    }
 
}

export default SecondaryNav;