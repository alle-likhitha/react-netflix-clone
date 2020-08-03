import React from 'react';
import classes from './NavItem.module.css';
import { Link } from 'react-router-dom';


const navItems = (props) =>(
    <li className={classes.NavItem}>
        <Link activeClassName={classes.active} to={props.link} exact >{props.children}</Link>
    </li>
);

export default navItems;