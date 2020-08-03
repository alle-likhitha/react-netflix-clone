import React from 'react';
import netflixLogo from '../../assets/images/Netflix_Logo_RGB.png'
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height : props.height}}>
        <img src={netflixLogo} alt='NETFLIX IMG'/>
    </div>
);

export default logo;