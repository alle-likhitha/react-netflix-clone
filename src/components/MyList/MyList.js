import React from 'react';
import ListContents from './ListContents/ListContents';
import classes from './MyList.module.css';
// import Aux from '../../hoc/Aux/Aux';

const MyList = props =>{
    // let listCon = null;
    // for()
    console.log(props.data)
    let contents = null
    if(props.data){
        // console.log(props.data[0])
        // let x = props.data[0]
        // console.log(x.Title)
        contents = props.data.map( idata =>{
            // console.log(idata)
            return <ListContents showup = {props.showup} poster = {idata.Poster} name = {idata.Title} key={idata._id} id = {idata._id}/>
        })
        
    }

    return(
        <div className={classes.MyListDiv} >
             <h3 style={{padding:'0 0 0 40px', margin:0, color:'white'}}>{props.type}</h3>
            <div className={classes.MyList} style={props.lala}>
                {contents}
            {/* <ListContents showup = {props.showup}/>
            <ListContents showup = {props.showup}/>
            <ListContents showup = {props.showup}/>
            <ListContents showup = {props.showup}/>
            <ListContents showup = {props.showup}/>
            <ListContents showup = {props.showup}/> */}
            {/* <ListContents /> */}
        
        </div>
        </div>
    );
}


export default MyList;