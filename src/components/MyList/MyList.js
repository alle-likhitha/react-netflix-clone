import React from 'react';
import ListContents from './ListContents/ListContents';
import classes from './MyList.module.css';
// import Aux from '../../hoc/Aux/Aux';

const MyList = props =>{
    // let listCon = null;
    // for()

    return(
        <div className={classes.MyListDiv}>
             <h3 style={{padding:'0 0 0 40px', margin:0, color:'white'}}>{props.type}</h3>
            <div className={classes.MyList}>
            <ListContents />
            <ListContents />
            <ListContents />
            <ListContents />
            <ListContents />
            <ListContents />
            <ListContents />
            {/* <ListContents /> */}
        
        </div>
        </div>
    );
}


export default MyList;