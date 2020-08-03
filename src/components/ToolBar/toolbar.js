import React from 'react';
import classes from './ToolBar.module.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/FirstNav/NavigationItems';
import SecondaryNav from '../NavigationItems/SecondaryNav/SecondaryNav'
import Aux from '../../hoc/Aux/Aux';


const ToolBar =() =>{
        return(
            <header className={classes.Toolbar}>
                <Aux>
                <Logo />
                <NavigationItems />
                </Aux>
                <SecondaryNav />
            </header>

        );
    
}

export default ToolBar;