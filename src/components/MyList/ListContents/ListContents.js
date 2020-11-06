import React from 'react';
import classes from './ListContents.module.css';
// import tokyoGhoul from '../../../assets/images/tokyoGhoul.jpeg'
const ListContents = props =>{

    // console.log(typeof(props.data))
    // let mydata = []
    // for(let i in props.data){
    //     mydata.push({
    //         ...mydata[i],
    //         i: i
    //     })
    // }
    // console.log(mydata)
    // console.log(Array.isArray(props.data))
    // console.log(props.poster)
    return(
        <div className={classes.ListContents}>
            <button className={classes.b1} onClick={()=>{props.showup(props.id)}}>
                <div className={classes.Image} >
                <img className={classes.Image} src={props.poster} alt="kahjsbdkjhs" ></img>
                <span>{props.name} </span>
            
                
                {/* <img src={tokyoGhoul} alt='tokyoGhoul'style={{height:'100%', width:'100%'}}/> */}

            </div>
            </button>
            
        </div>
    );
}


export default ListContents;