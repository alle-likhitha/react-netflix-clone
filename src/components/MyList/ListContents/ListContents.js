import React from 'react';
import classes from './ListContents.module.css';
import tokyoGhoul from '../../../assets/images/tokyoGhoul.jpeg'
const ListContents = props =>{
    return(
        <div className={classes.ListContents}>
            {/* <p>hiii</p>
            <h1>1</h1> */}
            <img src={tokyoGhoul} alt='tokyoGhoul' />
        </div>
    );
}


export default ListContents;