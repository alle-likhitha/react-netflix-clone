import React from 'react';
import classes from './Button.module.css';
import Aux from '../../hoc/Aux/Aux';


const Button = props =>{
    return(
        <Aux>
            <button className={classes.Button}>{props.children}</button>
        </Aux>
            
         );
}

export default Button;