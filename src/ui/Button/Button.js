import React from 'react';
import classes from './Button.module.css';
// import { Link } from 'react-router-dom';
// import Aux from '../../hoc/Aux/Aux';


const Button = props =>{
    
    return(
        // <Link >
        <div className={classes.buttonSpace}>
           <props.iconname.icon className={classes.Icon}/>
            <button className={classes.Button}>{props.children}</button>
            {/* {props.children} */}
       </div>
        // </Link>
       
           
        
            
);
}

export default Button;