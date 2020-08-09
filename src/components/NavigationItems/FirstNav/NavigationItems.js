import React from 'react';
import classes from './NavigationItems.module.css';
import NavItem from './NavItem/NavItem'

const navigationItems = (props) =>(
    <ul className={classes.NavigationItems}>
        <NavItem link='/'>Home</NavItem>
        <NavItem link='/tvshows'>Tv Shows</NavItem>
        <NavItem link='/movies'>Movies</NavItem>
        <NavItem link='/latest'>Latest</NavItem>


    </ul>
);

export default navigationItems;