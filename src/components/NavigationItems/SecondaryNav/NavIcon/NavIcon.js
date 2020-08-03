import React from 'react';
import {Link} from 'react-router-dom';


import classes from './NavIcon.module.css';

const NavIcon = (props) => (
    <div className={classes.NavIcon}>
        <Link activeClassName={classes.active} to={props.link} exact >{props.children}</Link>
    </div>

    
);

export default NavIcon;