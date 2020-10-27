import React from 'react';
import classes from './ListContents.module.css';
// import tokyoGhoul from '../../../assets/images/tokyoGhoul.jpeg'
const ListContents = props =>{
    return(
        <div className={classes.ListContents}>
            {/* <p>hiii</p>
            <h1>1</h1> */}
            <button className={classes.b1} onClick={props.showup}><div className={classes.Image}>
                <span>Tokyo</span>
                {/* <img src={tokyoGhoul} alt='tokyoGhoul'style={{height:'100%', width:'100%'}}/> */}
            </div>
            </button>
            
        </div>
    );
}


export default ListContents;