import React from 'react';
import classes from './NavigationItems.module.css';
import NavItem from './NavItem/NavItem'

const navigationItems = (props) =>(
    <ul className={classes.NavigationItems}>
        <NavItem link='/'>Home</NavItem>
        <NavItem>Tv Shows</NavItem>
        <NavItem>Movies</NavItem>
        <NavItem>Latest</NavItem>


    </ul>
);

export default navigationItems;